# (C) Copyright [2020] Hewlett Packard Enterprise Development LP
#
# Permission is hereby granted, free of charge, to any person obtaining a
# copy of this software and associated documentation files (the "Software"),
# to deal in the Software without restriction, including without limitation
# the rights to use, copy, modify, merge, publish, distribute, sublicense,
# and/or sell copies of the Software, and to permit persons to whom the
# Software is furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included
# in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
# THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
# OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
# ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
# OTHER DEALINGS IN THE SOFTWARE.


import os
import sys
import unittest
from textwrap import dedent
import json
import yaml

import requests
from mock import patch

from hpecp import ContainerPlatformClient
from hpecp.exceptions import APIItemNotFoundException
import tempfile
from hpecp.base_resource import ResourceList

from .base_test import BaseTestCase, MockResponse, mocked_login_post
import six


class TestCLI(BaseTestCase):
    def mocked_login_post(*args, **kwargs):
        if args[0] == "https://127.0.0.1:8080/api/v1/login":
            return MockResponse(
                json_data={},
                status_code=200,
                headers={
                    "location": (
                        "/api/v1/session/df1bfacb-xxxx-xxxx-xxxx-c8f57d8f3c71"
                    )
                },
            )
        if args[0] == "https://127.0.0.1:8080/api/v2/hpelicense":
            return MockResponse(
                json_data={},
                status_code=201,
                headers={"location": "/api/v2/hpeclicense/1"},
            )
        raise RuntimeError("Unhandle POST request: " + args[0])

    def mocked_requests_get(*args, **kwargs):
        if args[0] == "https://127.0.0.1:8080/api/v1/license":
            return MockResponse(
                json_data={
                    "_links": {"self": {"href": "/api/v1/license"}},
                    "state": "unlicensed",
                    "uuid": "3c831f6e-f76f-410d-977c-ed13b0c817d1",
                },
                status_code=200,
                headers=dict(),
            )
        if args[0] == "https://127.0.0.1:8080/api/v2/hpelicense":
            return MockResponse(
                json_data={
                    "_links": {"self": {"href": "/api/v2/hpelicense"}},
                    "Licenses": [
                        {
                            "Label": "The License",
                            "Feature": "HPE Machine Learning Ops",
                            "Capacity": 240,
                            "UnlimitedCapacity": False,
                            "Start": 1566864000000,
                            "StartDisplay": "2019-08-27T00:00:00Z",
                            "Expiration": 1609286399000,
                            "ExpirationDisplay": "2020-12-29T23:59:59Z",
                            "LicenseKey": "TEST_LICENSE_KEY",
                            "DeviceID": "1234 1234",
                            "Evaluation": False,
                        }
                    ],
                    "Summaries": [
                        {
                            "Label": "HPE Container Platform",
                            "UnlimitedCapacity": False,
                            "TotalCapacity": 240,
                            "UsedCapacity": 24,
                            "AvailableCapacity": 216,
                            "NextExpiration": 1609286399000,
                            "NextExpirationDisplay": "2020-12-29T23:59:59Z",
                            "LatestExpiration": 1609286399000,
                            "LatestExpirationDisplay": "2020-12-29T23:59:59Z",
                            "Valid": True,
                            "ValidationTime": 1594758782000,
                            "RevalidateTime": 1609286400000,
                        },
                        {
                            "Label": "HPE Machine Learning Ops",
                            "UnlimitedCapacity": False,
                            "TotalCapacity": 240,
                            "UsedCapacity": 0,
                            "AvailableCapacity": 240,
                            "NextExpiration": 1609286399000,
                            "NextExpirationDisplay": "2020-12-29T23:59:59Z",
                            "LatestExpiration": 1609286399000,
                            "LatestExpirationDisplay": "2020-12-29T23:59:59Z",
                            "Valid": True,
                            "ValidationTime": 1594758782000,
                            "RevalidateTime": 1609286400000,
                        },
                    ],
                    "Messages": [],
                    "Valid": True,
                    "Enabled": True,
                    "ValidationTime": 1594758782000,
                    "RevalidateTime": 1609286400000,
                },
                status_code=200,
                headers=dict(),
            )
        raise RuntimeError("Unhandle GET request: " + args[0])

    @patch("requests.post", side_effect=mocked_login_post)
    @patch("requests.get", side_effect=mocked_requests_get)
    def test_list(self, mock_post, mock_get):

        try:
            hpecp = self.cli.CLI()
            hpecp.license.list()
        except Exception as e:
            # Unexpected Exception
            self.fail(e)

        stdout = self.out.getvalue().strip()
        stderr = self.err.getvalue().strip()

        expected_stdout = """\
Enabled: true
Licenses:
- Capacity: 240
  DeviceID: 1234 1234
  Evaluation: false
  Expiration: 1609286399000
  ExpirationDisplay: \'2020-12-29T23:59:59Z\'
  Feature: HPE Machine Learning Ops
  Label: The License
  LicenseKey: TEST_LICENSE_KEY
  Start: 1566864000000
  StartDisplay: \'2019-08-27T00:00:00Z\'
  UnlimitedCapacity: false
Messages: []
RevalidateTime: 1609286400000
Summaries:
- AvailableCapacity: 216
  Label: HPE Container Platform
  LatestExpiration: 1609286399000
  LatestExpirationDisplay: \'2020-12-29T23:59:59Z\'
  NextExpiration: 1609286399000
  NextExpirationDisplay: \'2020-12-29T23:59:59Z\'
  RevalidateTime: 1609286400000
  TotalCapacity: 240
  UnlimitedCapacity: false
  UsedCapacity: 24
  Valid: true
  ValidationTime: 1594758782000
- AvailableCapacity: 240
  Label: HPE Machine Learning Ops
  LatestExpiration: 1609286399000
  LatestExpirationDisplay: \'2020-12-29T23:59:59Z\'
  NextExpiration: 1609286399000
  NextExpirationDisplay: \'2020-12-29T23:59:59Z\'
  RevalidateTime: 1609286400000
  TotalCapacity: 240
  UnlimitedCapacity: false
  UsedCapacity: 0
  Valid: true
  ValidationTime: 1594758782000
Valid: true
ValidationTime: 1594758782000
_links:
  self:
    href: /api/v2/hpelicense"""

        expected_stderr = ""

        self.assertEqual(stdout, expected_stdout)

        # coverage seems to populate standard error on PY3 (issues 93)
        if six.PY2:
            self.assertEqual(stderr, expected_stderr)

    @patch("requests.post", side_effect=mocked_login_post)
    @patch("requests.get", side_effect=mocked_requests_get)
    def test_list_license_key_only(self, mock_post, mock_get):

        try:
            hpecp = self.cli.CLI()
            hpecp.license.list(license_key_only=True)
        except Exception as e:
            # Unexpected Exception
            self.fail(e)

        stdout = self.out.getvalue().strip()
        stderr = self.err.getvalue().strip()

        expected_stdout = "TEST_LICENSE_KEY"
        expected_stderr = ""

        self.assertEqual(stdout, expected_stdout)

        # coverage seems to populate standard error on PY3 (issues 93)
        if six.PY2:
            self.assertEqual(stderr, expected_stderr)

    @patch("requests.post", side_effect=mocked_login_post)
    @patch("requests.get", side_effect=mocked_requests_get)
    def test_list_output_json(self, mock_post, mock_get):

        self.maxDiff = None

        try:
            hpecp = self.cli.CLI()
            hpecp.license.list(output="json")
        except Exception as e:
            # Unexpected Exception
            self.fail(e)

        stdout = self.out.getvalue().strip()
        stderr = self.err.getvalue().strip()

        stdout = json.dumps(json.loads(stdout), sort_keys=True)
        expected_stdout = json.dumps(
            {
                "_links": {"self": {"href": "/api/v2/hpelicense"}},
                "RevalidateTime": 1609286400000,
                "ValidationTime": 1594758782000,
                "Valid": True,
                "Licenses": [
                    {
                        "Expiration": 1609286399000,
                        "DeviceID": "1234 1234",
                        "Evaluation": False,
                        "Capacity": 240,
                        "UnlimitedCapacity": False,
                        "StartDisplay": "2019-08-27T00:00:00Z",
                        "Start": 1566864000000,
                        "LicenseKey": "TEST_LICENSE_KEY",
                        "ExpirationDisplay": "2020-12-29T23:59:59Z",
                        "Feature": "HPE Machine Learning Ops",
                        "Label": "The License",
                    }
                ],
                "Messages": [],
                "Enabled": True,
                "Summaries": [
                    {
                        "NextExpiration": 1609286399000,
                        "LatestExpirationDisplay": "2020-12-29T23:59:59Z",
                        "TotalCapacity": 240,
                        "Valid": True,
                        "UnlimitedCapacity": False,
                        "UsedCapacity": 24,
                        "RevalidateTime": 1609286400000,
                        "ValidationTime": 1594758782000,
                        "AvailableCapacity": 216,
                        "Label": "HPE Container Platform",
                        "NextExpirationDisplay": "2020-12-29T23:59:59Z",
                        "LatestExpiration": 1609286399000,
                    },
                    {
                        "NextExpiration": 1609286399000,
                        "LatestExpirationDisplay": "2020-12-29T23:59:59Z",
                        "TotalCapacity": 240,
                        "Valid": True,
                        "UnlimitedCapacity": False,
                        "UsedCapacity": 0,
                        "RevalidateTime": 1609286400000,
                        "ValidationTime": 1594758782000,
                        "AvailableCapacity": 240,
                        "Label": "HPE Machine Learning Ops",
                        "NextExpirationDisplay": "2020-12-29T23:59:59Z",
                        "LatestExpiration": 1609286399000,
                    },
                ],
            },
            sort_keys=True,
        )
        expected_stderr = ""

        self.assertEqual(stdout, expected_stdout)

        # coverage seems to populate standard error on PY3 (issues 93)
        if six.PY2:
            self.assertEqual(stderr, expected_stderr)

    @patch("requests.post", side_effect=mocked_login_post)
    @patch("requests.get", side_effect=mocked_requests_get)
    def test_platform_id(self, mock_post, mock_get):

        try:
            hpecp = self.cli.CLI()
            hpecp.license.platform_id()
        except Exception as e:
            # Unexpected Exception
            self.fail(e)

        stdout = self.out.getvalue().strip()
        stderr = self.err.getvalue().strip()

        expected_stdout = """3c831f6e-f76f-410d-977c-ed13b0c817d1"""
        expected_stderr = ""

        self.assertEqual(stdout, expected_stdout)

        # coverage seems to populate standard error on PY3 (issues 93)
        if six.PY2:
            self.assertEqual(stderr, expected_stderr)

    @patch("requests.post", side_effect=mocked_login_post)
    @patch("requests.get", side_effect=mocked_requests_get)
    def test_register(self, mock_post, mock_get):

        try:
            hpecp = self.cli.CLI()
            hpecp.license.register(server_filename="abc")
        except Exception as e:
            # Unexpected Exception
            self.fail(e)

        stdout = self.out.getvalue().strip()
        stderr = self.err.getvalue().strip()

        expected_stdout = "/api/v2/hpeclicense/1"
        expected_stderr = ""

        self.assertEqual(stdout, expected_stdout)

        # coverage seems to populate standard error on PY3 (issues 93)
        if six.PY2:
            self.assertEqual(stderr, expected_stderr)

    def mocked_requests_delete(*args, **kwargs):
        if (
            args[0]
            == "https://127.0.0.1:8080/api/v2/hpelicense/TEST_LICENSE_KEY/"
        ):
            return MockResponse(json_data={}, status_code=200, headers=dict(),)
        raise RuntimeError("Unhandle DELETE request: " + args[0])

    @patch("requests.post", side_effect=mocked_login_post)
    @patch("requests.delete", side_effect=mocked_requests_delete)
    def test_delete(self, mock_post, mock_delete):

        with patch.dict("os.environ", {"LOG_LEVEL": "DEBUG"}):
            hpecp = self.cli.CLI()
            hpecp.license.delete(license_key="TEST_LICENSE_KEY")

        stdout = self.out.getvalue().strip()
        stderr = self.err.getvalue().strip()

        expected_stdout = ""
        expected_stderr = ""

        self.assertEqual(stdout, expected_stdout)

        # coverage seems to populate standard error on PY3 (issues 93)
        if six.PY2:
            self.assertEqual(stderr, expected_stderr)

    @patch("requests.post", side_effect=mocked_login_post)
    @patch("requests.delete", side_effect=mocked_requests_delete)
    @patch("requests.get", side_effect=mocked_requests_get)
    def test_delete_all(self, mock_post, mock_delete, mock_get):

        with patch.dict("os.environ", {"LOG_LEVEL": "DEBUG"}):
            hpecp = self.cli.CLI()
            hpecp.license.delete_all()

        stdout = self.out.getvalue().strip()
        stderr = self.err.getvalue().strip()

        expected_stdout = ""
        expected_stderr = ""

        self.assertEqual(stdout, expected_stdout)

        # coverage seems to populate standard error on PY3 (issues 93)
        if six.PY2:
            self.assertEqual(stderr, expected_stderr)
