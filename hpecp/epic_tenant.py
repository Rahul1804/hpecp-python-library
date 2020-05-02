from __future__ import absolute_import

from .logger import Logger

from datetime import datetime, timedelta
from operator import attrgetter
import time
import requests
import json

try:
    from urllib import quote  # Python 2.X
except ImportError:
    from urllib.parse import quote  # Python 3+

class EpicTenant():

    def __init__(self, json):
        self.json = json

    @property
    def tenant_id(self): return int(self.json['_links']['self']['href'].split('/')[-1])

    @property
    def status(self): return self.json['status']

    @property
    def name(self): return self.json['label']['name']

    @property
    def description(self): return self.json['label']['description']

class EpicTenantList():
    """[summary]
    """

    def __init__(self, json):
        self.tenants = sorted([EpicTenant(t) for t in json],  key=attrgetter('tenant_id'))

    def __getitem__(self, item):
        return self.tenants[item]

    # Python 2
    def next(self):
        if not self.tenants:
           raise StopIteration
        return self.tenants.pop(0)

    # Python 3
    def __next__(self):
        if not self.tenants:
           raise StopIteration
        return self.tenants.pop(0)

    def __iter__(self):
        return self

class EpicTenantController:
    """[summary]
    """

    def __init__(self, client):
        self.client = client

    def list(self):
        response = self.client._request(url='/api/v1/tenant', http_method='get', description='epic_tenant_list')
        tenants = EpicTenantList(response.json()['_embedded']['tenants'])
        return tenants

    def auth_setup(self, tenant_id, data):
        """[summary]

        Arguments:
            tenant_id {[type]} -- [description]
            data {[type]} -- [description]
        """
        self.client._request(
            url='/api/v1/tenant/{}?external_user_groups'.format(tenant_id), 
            http_method='put', 
            data=data,
            description='epic_tenant_auth'
            )