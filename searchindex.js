Search.setIndex({docnames:["cli","cli_overview","github","hpecp","hpecp.base_resource","hpecp.client","hpecp.config","hpecp.exceptions","hpecp.gateway","hpecp.k8s_cluster","hpecp.k8s_worker","hpecp.license","hpecp.lock","hpecp.tag","hpecp.tenant","index","installation","license"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["cli.rst","cli_overview.rst","github.rst","hpecp.rst","hpecp.base_resource.rst","hpecp.client.rst","hpecp.config.rst","hpecp.exceptions.rst","hpecp.gateway.rst","hpecp.k8s_cluster.rst","hpecp.k8s_worker.rst","hpecp.license.rst","hpecp.lock.rst","hpecp.tag.rst","hpecp.tenant.rst","index.rst","installation.rst","license.rst"],objects:{"bin.cli":{AutoComplete:[0,1,1,""],BaseProxy:[0,1,1,""],CLI:[0,1,1,""],CatalogProxy:[0,1,1,""],GatewayProxy:[0,1,1,""],HttpClientProxy:[0,1,1,""],K8sClusterProxy:[0,1,1,""],K8sWorkerProxy:[0,1,1,""],LicenseProxy:[0,1,1,""],LockProxy:[0,1,1,""],RoleProxy:[0,1,1,""],TenantProxy:[0,1,1,""],UserProxy:[0,1,1,""],configure_cli:[0,3,1,""],get_client:[0,3,1,""],intercept_exception:[0,3,1,""]},"bin.cli.AutoComplete":{bash:[0,2,1,""]},"bin.cli.BaseProxy":{"delete":[0,2,1,""],all_fields:[0,2,1,""],get:[0,2,1,""],list:[0,2,1,""],new_instance:[0,2,1,""],print_list:[0,2,1,""],validate_list_params:[0,2,1,""],wait_for_delete:[0,2,1,""],wait_for_state:[0,2,1,""],wait_for_status:[0,2,1,""]},"bin.cli.CatalogProxy":{"delete":[0,2,1,""],install:[0,2,1,""],refresh:[0,2,1,""]},"bin.cli.GatewayProxy":{create_with_ssh_key:[0,2,1,""],states:[0,2,1,""]},"bin.cli.HttpClientProxy":{"delete":[0,2,1,""],get:[0,2,1,""],post:[0,2,1,""],put:[0,2,1,""]},"bin.cli.K8sClusterProxy":{admin_kube_config:[0,2,1,""],create:[0,2,1,""],dashboard_token:[0,2,1,""],dashboard_url:[0,2,1,""],k8s_supported_versions:[0,2,1,""],statuses:[0,2,1,""]},"bin.cli.K8sWorkerProxy":{create_with_ssh_key:[0,2,1,""],set_storage:[0,2,1,""],statuses:[0,2,1,""]},"bin.cli.LicenseProxy":{"delete":[0,2,1,""],delete_all:[0,2,1,""],list:[0,2,1,""],platform_id:[0,2,1,""],register:[0,2,1,""]},"bin.cli.LockProxy":{"delete":[0,2,1,""],create:[0,2,1,""],delete_all:[0,2,1,""],list:[0,2,1,""]},"bin.cli.TenantProxy":{add_external_user_group:[0,2,1,""],assign_user_to_role:[0,2,1,""],create:[0,2,1,""],delete_external_user_group:[0,2,1,""],examples:[0,2,1,""],get_external_user_groups:[0,2,1,""],k8skubeconfig:[0,2,1,""],users:[0,2,1,""]},"bin.cli.UserProxy":{create:[0,2,1,""],examples:[0,2,1,""]},"hpecp.base_resource":{AbstractResource:[4,1,1,""],AbstractResourceController:[4,1,1,""],AbstractWaitableResourceController:[4,1,1,""],ResourceList:[4,1,1,""]},"hpecp.base_resource.AbstractResource":{all_fields:[4,2,1,""],id:[4,2,1,""]},"hpecp.base_resource.AbstractResourceController":{"delete":[4,2,1,""],base_resource_path:[4,2,1,""],get:[4,2,1,""],list:[4,2,1,""],resource_class:[4,2,1,""],resource_list_path:[4,2,1,""]},"hpecp.base_resource.AbstractWaitableResourceController":{status_class:[4,2,1,""],status_fieldname:[4,2,1,""],wait_for_state:[4,2,1,""],wait_for_status:[4,2,1,""]},"hpecp.base_resource.ResourceList":{tabulate:[4,2,1,""]},"hpecp.client":{ContainerPlatformClient:[5,1,1,""]},"hpecp.client.ContainerPlatformClient":{catalog:[5,2,1,""],config:[5,2,1,""],create_from_config_file:[5,2,1,""],create_from_env:[5,2,1,""],create_session:[5,2,1,""],gateway:[5,2,1,""],k8s_cluster:[5,2,1,""],k8s_worker:[5,2,1,""],license:[5,2,1,""],lock:[5,2,1,""],log:[5,2,1,""],role:[5,2,1,""],tenant:[5,2,1,""],user:[5,2,1,""]},"hpecp.config":{ConfigController:[6,1,1,""]},"hpecp.config.ConfigController":{auth:[6,2,1,""]},"hpecp.exceptions":{APIException:[7,4,1,""],APIForbiddenException:[7,4,1,""],APIItemConflictException:[7,4,1,""],APIItemNotFoundException:[7,4,1,""],APIUnknownException:[7,4,1,""],ContainerPlatformClientException:[7,4,1,""]},"hpecp.gateway":{Gateway:[8,1,1,""],GatewayController:[8,1,1,""],GatewayStatus:[8,1,1,""]},"hpecp.gateway.Gateway":{all_fields:[8,5,1,""],approved_worker_pubkey:[8,2,1,""],default_display_fields:[8,5,1,""],hacapable:[8,2,1,""],hostname:[8,2,1,""],ip:[8,2,1,""],propinfo:[8,2,1,""],proxy_nodes_hostname:[8,2,1,""],purpose:[8,2,1,""],schedule:[8,2,1,""],state:[8,2,1,""],status_info:[8,2,1,""],sysinfo:[8,2,1,""],tags:[8,2,1,""]},"hpecp.gateway.GatewayController":{base_resource_path:[8,5,1,""],create_with_ssh_key:[8,2,1,""],get:[8,2,1,""],list:[8,2,1,""],resource_class:[8,5,1,""],resource_list_path:[8,5,1,""],status_class:[8,5,1,""],status_fieldname:[8,5,1,""],wait_for_state:[8,2,1,""]},"hpecp.gateway.GatewayStatus":{bundle:[8,5,1,""],configured:[8,5,1,""],configuring:[8,5,1,""],decommission_in_progress:[8,5,1,""],delete_in_progress:[8,5,1,""],deleting:[8,5,1,""],error:[8,5,1,""],installed:[8,5,1,""],installing:[8,5,1,""],ready:[8,5,1,""],storage_configuring:[8,5,1,""],storage_error:[8,5,1,""],storage_pending:[8,5,1,""],sysinfo:[8,5,1,""],unconfiguring:[8,5,1,""],unlicensed:[8,5,1,""]},"hpecp.k8s_cluster":{K8sCluster:[9,1,1,""],K8sClusterController:[9,1,1,""],K8sClusterHostConfig:[9,1,1,""],K8sClusterStatus:[9,1,1,""]},"hpecp.k8s_cluster.K8sCluster":{admin_kube_config:[9,2,1,""],all_fields:[9,5,1,""],api_endpoint_access:[9,2,1,""],cert_data:[9,2,1,""],created_by_user_id:[9,2,1,""],created_by_user_name:[9,2,1,""],created_time:[9,2,1,""],dashboard_endpoint_access:[9,2,1,""],dashboard_token:[9,2,1,""],description:[9,2,1,""],k8s_version:[9,2,1,""],k8shosts_config:[9,2,1,""],name:[9,2,1,""],status:[9,2,1,""],status_message:[9,2,1,""]},"hpecp.k8s_cluster.K8sClusterController":{base_resource_path:[9,5,1,""],create:[9,2,1,""],get:[9,2,1,""],k8s_supported_versions:[9,2,1,""],resource_class:[9,5,1,""],resource_list_path:[9,5,1,""],status_class:[9,5,1,""],status_fieldname:[9,5,1,""]},"hpecp.k8s_cluster.K8sClusterHostConfig":{create_from_list:[9,2,1,""],to_dict:[9,2,1,""]},"hpecp.k8s_cluster.K8sClusterStatus":{creating:[9,5,1,""],deleting:[9,5,1,""],error:[9,5,1,""],ready:[9,5,1,""],updating:[9,5,1,""],upgrading:[9,5,1,""],warning:[9,5,1,""]},"hpecp.k8s_worker":{K8sWorkerController:[10,1,1,""],WorkerK8s:[10,1,1,""],WorkerK8sStatus:[10,1,1,""]},"hpecp.k8s_worker.K8sWorkerController":{base_resource_path:[10,5,1,""],create_with_ssh_key:[10,2,1,""],get:[10,2,1,""],resource_class:[10,5,1,""],resource_list_path:[10,5,1,""],set_storage:[10,2,1,""],status_class:[10,5,1,""],status_fieldname:[10,5,1,""]},"hpecp.k8s_worker.WorkerK8s":{all_fields:[10,5,1,""],hostname:[10,2,1,""],href:[10,2,1,""],ipaddr:[10,2,1,""],status:[10,2,1,""],worker_id:[10,2,1,""]},"hpecp.k8s_worker.WorkerK8sStatus":{bundle:[10,5,1,""],configured:[10,5,1,""],configuring:[10,5,1,""],deleting:[10,5,1,""],error:[10,5,1,""],installed:[10,5,1,""],installing:[10,5,1,""],ready:[10,5,1,""],storage_configuring:[10,5,1,""],storage_error:[10,5,1,""],storage_pending:[10,5,1,""],sysinfo:[10,5,1,""],unconfiguring:[10,5,1,""],unlicensed:[10,5,1,""]},"hpecp.license":{LicenseController:[11,1,1,""]},"hpecp.license.LicenseController":{"delete":[11,2,1,""],list:[11,2,1,""],platform_id:[11,2,1,""],register:[11,2,1,""],upload_with_ssh_key:[11,2,1,""],upload_with_ssh_pass:[11,2,1,""]},"hpecp.lock":{LockController:[12,1,1,""]},"hpecp.lock.LockController":{"delete":[12,2,1,""],create:[12,2,1,""],delete_all:[12,2,1,""],get:[12,2,1,""],list:[12,2,1,""]},"hpecp.tenant":{Tenant:[14,1,1,""],TenantController:[14,1,1,""],TenantStatus:[14,1,1,""]},"hpecp.tenant.Tenant":{all_fields:[14,5,1,""],description:[14,2,1,""],external_user_groups:[14,2,1,""],id:[14,2,1,""],name:[14,2,1,""],status:[14,2,1,""],tenant_type:[14,2,1,""]},"hpecp.tenant.TenantController":{add_external_user_group:[14,2,1,""],assign_user_to_role:[14,2,1,""],base_resource_path:[14,5,1,""],create:[14,2,1,""],delete_external_user_group:[14,2,1,""],get_external_user_groups:[14,2,1,""],k8skubeconfig:[14,2,1,""],resource_class:[14,5,1,""],resource_list_path:[14,5,1,""],revoke_user_from_role:[14,2,1,""],status_class:[14,5,1,""],status_fieldname:[14,5,1,""],users:[14,2,1,""]},"hpecp.tenant.TenantStatus":{creating:[14,5,1,""],deleting:[14,5,1,""],error:[14,5,1,""],ready:[14,5,1,""],updating:[14,5,1,""],upgrading:[14,5,1,""],warning:[14,5,1,""]},bin:{cli:[0,0,0,"-"]},hpecp:{base_resource:[4,0,0,"-"],client:[5,0,0,"-"],config:[6,0,0,"-"],exceptions:[7,0,0,"-"],gateway:[8,0,0,"-"],k8s_cluster:[9,0,0,"-"],k8s_worker:[10,0,0,"-"],license:[11,0,0,"-"],lock:[12,0,0,"-"],tenant:[14,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","exception","Python exception"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:exception","5":"py:attribute"},terms:{"4ffa":[1,15],"5ambapwd":[0,5,6],"abstract":4,"class":[0,4,5,6,8,9,10,11,12,14,17],"default":[0,1,4,5,9,10,15],"enum":[8,9,10,14],"export":1,"function":5,"import":[15,17],"int":[4,5,12],"long":[4,12],"new":[0,12],"return":[0,1,4,5,8,9,10],"true":[0,1,4,5,9,15],"while":[16,17],AND:15,And:1,DNS:9,FOR:15,For:[1,9,17],K8S:[4,9],K8s:[0,9,10],Not:[0,1,11,17],RES:1,The:[0,1,2,4,5,8,9,10,11,12,14,15,17],USE:15,Use:4,Used:[0,8,10],__init__:5,_embed:4,_link:[1,4,9,10,14],_request:0,aa8716b:[1,15],abl:4,abov:17,abstractresourc:[4,8,9,10,14],abstractresourcecontrol:4,abstractwaitableresourcecontrol:[4,8,9,10,14],accept:15,access:[0,8,10],act:17,activ:[0,5,6],adapt:0,add:[0,1,9,17],add_external_user_group:[0,14],addendum:17,addit:15,address:[0,8,10],admin123:[1,5,15],admin:[0,1,5,15],admin_kube_config:[0,9],administr:[0,5,6],advanc:5,advis:17,after:[4,15],against:17,agre:17,agreement:17,alia:[8,9,10,14],all:[0,4,9,10,12,17],all_field:[0,4,8,9,10,14],alleg:17,allow:9,alon:17,along:17,alongsid:17,alpha:[15,16],also:[0,17],altern:[0,5],alwai:16,ani:[1,5,17],annot:17,apach:15,api:[0,1,4,5,8,9,10,12,14,15,16],api_endpoint_access:9,api_host:[1,5,15],api_port:[1,5,15],apiexcept:[0,4,5,7,8,9,10,11,12,14],apiforbiddenexcept:7,apiitemconflictexcept:[7,10,14],apiitemnotfoundexcept:[4,7,10,14],apiunknownexcept:7,appear:17,appendix:15,appli:15,applic:17,appropri:17,approved_worker_pubkei:8,archiv:17,arg:7,argument:1,aris:17,arrai:4,assert:17,assertionerror:10,assign:[0,14],assign_user_to_rol:[0,14],associ:17,assum:17,asynchron:9,attach:17,attribut:[4,8,9,14,17],auth:[0,5,6],authent:[0,1],author:17,authorship:17,auto:1,autocomplet:[0,15],avaialbl:4,avail:[4,5,8,9,14,15,17],await:1,b838:[1,15],bar:[0,8,10],base64enc_licens:11,base:[0,4,6,7,8,9,10,11,12,14,17],base_dn:[0,5,6],base_resourc:[3,8,9,10,14,15],base_resource_path:[4,8,9,10,14],baseproxi:0,bash:[0,1],bash_profil:1,basi:17,basic:15,bc74:[1,15],becom:16,been:[11,17],befor:[0,4,12],behalf:17,below:[5,8,9,14,17],benefici:17,beta:[15,16],bin:0,bind:17,bind_dn:[0,5,6],bind_pwd:[0,5,6],bind_typ:[0,5,6],bluedata:[0,11],boilerpl:17,bool:[4,5,9],bracket:17,broken:1,bundl:[8,10],call:[0,4,5,8,10],can:[1,2,5,8,9,12,14],cannot:17,capabl:15,carri:17,cat:[0,1,15],catalog:[0,5],catalog_id:0,catalogcontrol:5,catalogproxi:0,caus:17,ceas:4,central:5,cert:[5,15],cert_data:9,chang:[1,15,16,17],charact:[9,17],charg:17,choos:17,claim:17,classmethod:[5,9],clear:12,client:[0,1,3,4,6,8,9,10,11,12,14,15,16],client_module_nam:0,cluster:[0,4,8,9,10],code:[2,17],column:[0,4,15],com:[0,1,5,6,16],combin:17,comma:0,command:[0,1,15],comment:17,commerci:17,common:17,commun:[0,1,8,10,16,17],compil:17,complet:[1,3],compli:17,complianc:17,comput:17,condit:15,conf:[1,5,15],config:[0,1,3,5,15],config_fil:5,configcontrol:[5,6],configur:[0,1,5,8,9,10,15,17],configure_cli:0,connect:[1,5],consequenti:17,consist:17,conspicu:17,constitut:17,constru:17,constructor:[0,5,15],contain:[0,1,4,5,8,9,10,15,16,17],containerplatformcli:[0,1,5,8,9,14,15],containerplatformclientexcept:[7,14],content:17,contract:17,contribut:15,contributor:17,contributori:17,control:[1,4,5,11,17],convers:17,copi:17,copyright:15,counterclaim:17,creat:[0,1,5,8,9,10,12,14,15],create_from_config_fil:[5,15],create_from_env:5,create_from_list:9,create_sess:[5,8,9,14,15],create_with_ssh_kei:[0,1,8,10],create_with_ssh_password:1,created_by_user_id:9,created_by_user_nam:9,created_tim:9,creation:9,credenti:[8,10],cross:17,csi:9,current:1,customari:17,d92e6934d224:[1,15],damag:17,dashboard:0,dashboard_endpoint_access:9,dashboard_token:[0,9],dashboard_url:0,data:[0,6,8,9,10],date:[1,16,17],debug:1,declar:4,decommission_in_progress:8,def:5,default_display_field:[0,8],defend:17,defin:[0,4,8,10,17],definit:[5,15],delet:[0,1,4,8,9,10,11,12,14],delete_al:[0,12],delete_external_user_group:[0,14],delete_in_progress:8,deliber:17,demoserv:5,deriv:17,describ:17,descript:[0,1,4,9,14,15,17],descripton:0,design:17,determin:[9,17],dev:0,dict:[0,9],differ:[0,1,17],direct:17,directori:[0,5,6],disabl:5,disclaim:15,discuss:17,disk:[0,10],displai:[0,1,17],display_head:4,distribut:15,dns:0,doc:15,document:17,doe:[4,5,17],domain:[0,9],don:17,dure:5,each:17,easier:17,echo:1,editori:17,either:[0,4,17],elabor:17,electron:17,element:4,empti:[4,9],enabl:[0,9],enclos:17,end:17,ensur:[1,16],enter:15,entiti:[0,17],enumer:10,environ:[1,5,15],eof:[0,1,15],ephemer:[0,10],ephemeral_disk:[0,10],error:[1,4,5,8,9,10,14],etc:0,even:17,event:[1,17],exampl:[0,5,6,8,9,14,17],except:[0,3,4,5,15,17],exclud:17,exclus:17,execut:17,exercis:17,exist:4,exit:0,expect:[8,9],explicitli:17,expos:9,express:17,extern:[0,12],external_identity_serv:[0,5,6],external_user_group:14,factori:9,failur:17,fals:[0,1,4,5,6,9,10,15],fancy_grid:4,fee:17,field:[4,8,9,10,14,17],fieldnam:4,fifti:17,file:[0,1,5,15,17],filenam:5,filepath:[0,11],filter:0,find:15,fire:1,first:[1,15],fish:1,fit:17,flag:[1,16],follow:[1,17],foo:[0,8,10],form:17,format:[0,1,4,8,9,10,12,14,17],found:[0,2,4,10],free:17,from:[1,4,5,8,9,14,15,17],gatewai:[0,1,3,5,10,15],gateway_id:[1,8],gatewaycontrol:[5,8],gatewayproxi:0,gatewaystatu:8,gener:[0,17],get:[0,1,4,5,8,9,10,12,16],get_client:0,get_external_user_group:[0,14],get_platform_id:1,getter:4,git:[1,16],github:[1,2,4,16],give:17,given:14,goodwil:17,googl:1,govern:17,grant:15,grid:4,grossli:17,group:[0,1,14],hacap:8,handl:0,harmless:17,has:[5,17],have:[0,1,8,9,11,14,16,17],help:15,herebi:17,herein:17,hold:17,host:[0,5,6,8,9,10],hostnam:[8,10],how:[0,1,4,12,15],howev:17,howto:1,hpe:[0,1,5,8,9,10,15,16],hpeclient:4,hpecp:[0,1,3,15,16],hpecp_api_host:5,hpecp_api_port:5,hpecp_complet:1,hpecp_config_fil:1,hpecp_password:5,hpecp_ten:5,hpecp_use_ssl:5,hpecp_usernam:5,hpecp_verify_ssl:5,hpecp_warn_ssl:5,href:[1,4,10,14],html:[1,4],http:[0,1,4,5,16,17],httpclient:0,httpclientproxi:0,id1:0,id2:0,identif:17,identifi:[8,9,14,17],ids:0,iii:17,implement:[0,1,4,11],impli:17,improv:17,inabl:17,incident:17,includ:17,inclus:17,incorpor:17,incur:17,indemn:17,indemnifi:17,indic:17,indirect:17,individu:17,info:1,inform:[4,17],infring:17,init:1,initi:5,instal:[0,1,8,9,10,15],instanc:[0,4,5,8,9,10,14],instanti:5,instead:0,institut:17,integ:[8,9,14],intention:17,interact:[8,9,14],intercept_except:0,interfac:[0,15,17],intern:[0,8,10,12],invok:[8,9,14],ipaddr:10,irrevoc:17,is_extern:0,issu:[1,17],item:[4,10],its:17,januari:17,jira:4,jmespath:0,json:[0,1,4,8,9,10,14],json_fil:0,k8s:[0,9,10],k8s_cluster:[0,3,5,14,15],k8s_cluster_id:0,k8s_supported_vers:[0,9],k8s_version:[0,9],k8s_worker:[0,3,5,15],k8scluster:[0,4,9],k8sclustercontrol:[4,5,9],k8sclusterhostconfig:9,k8sclusterproxi:0,k8sclusterstatu:[4,9],k8shost:[9,10],k8shosts_config:[0,9],k8skubeconfig:[0,14],k8sworkercontrol:[5,10],k8sworkerproxi:0,kei:[0,1,8,10,11],kind:17,kube:0,kubeconfig:[0,14],kubernet:9,label:9,languag:17,latest:[9,16],latex:4,latex_booktab:4,latex_raw:4,law:17,lawsuit:17,ldap:[0,5,6],least:[9,17],legal:17,level:15,liabil:15,liabl:17,libari:2,librari:[1,5,8,9,14,16],licens:[0,1,3,5,15],license_kei:[0,11],license_key_onli:0,licensecontrol:[5,11],licensekei:[0,11],licenseproxi:0,licensor:17,limit:15,line:[0,15],link:17,list:[0,1,4,5,8,9,10,11,12,14,15,17],list_inst:0,litig:17,local:[0,9],locat:[0,1],lock:[0,3,5,15],lock_id:12,lockcontrol:[5,12],lockproxi:0,log:[5,15],log_level:1,logger:5,login:15,loss:17,made:[5,17],mai:[0,15,17],mail:17,major:0,major_filt:0,make:[0,4,5,8,10,17],malfunct:17,manag:17,mandatori:10,mani:0,map:4,mark:17,master:[0,1,5,9,16],match:0,mean:[8,9,14,17],mechan:17,media:17,mediawiki:4,medium:17,meet:17,merchant:17,mere:17,messag:7,method:[0,4,5,8,9,14],minor:0,minor_filt:0,modif:17,modifi:17,modul:[3,15],moinmoin:4,more:[0,1,4,17],much:1,multipl:5,must:[0,9,11,17],name:[0,1,4,8,9,14,17],necessarili:17,need:12,neglig:17,network:[0,9],new_inst:0,nimbl:9,node:9,noderol:9,non:17,none:[0,5,7,9,11,12,14],normal:17,note:[1,8,9,12,14,16],noth:17,notic:17,notwithstand:17,now:15,nvme1n1:0,nvme1n2:0,nvme2n1:0,nvme2n2:0,object:[0,4,5,6,8,9,10,11,12,17],oblig:17,obtain:17,offer:17,one:[0,1,17],onli:[0,9,17],option:[0,4,5,10],org:[0,1,4,17],orgtbl:4,origin:17,other:17,otherwis:[4,17],out:[15,17],output:[0,1,4],outsid:[8,9,14],outstand:17,own:17,owner:17,ownership:17,page:17,pair:9,param:[0,4,9,10],paramaet:5,paramet:[0,4,5,9,10,14],part:17,parti:17,particular:17,pass:[5,15],password:[0,1,5,15],patch_filt:0,patent:15,path:[0,4,5,10],pem:15,percent:17,perform:17,permiss:17,perpetu:17,persist:[0,10],persistent_disk:[0,10],persistent_storage_loc:[0,9],persistent_storage_nimble_csi:[0,9],pertain:17,pip3:[1,16],pip:[1,16],pipe:4,place:17,plain:4,platform:[0,1,5,8,9,10,11,15,16],platform_id:[0,11],plugin:9,pod:[0,9],pod_dns_domain:[0,9],pod_network_rang:[0,9],point:0,port:[0,5,6],posit:1,possibl:[9,17],post:0,power:17,pre:[15,16],prefer:17,prepar:17,presto:4,pretti:[0,4],previous:11,print:[0,4,17],print_list:0,product:17,profil:5,progress:3,project:4,promin:17,properti:[0,4,5,8,9,10,14],propinfo:8,provid:[0,9,12,17],proxi:[0,8,10],proxy_node_hostnam:[0,8],proxy_nodes_hostnam:8,psql:4,publicli:17,purpos:[8,17],put:0,pypi:4,python:[1,2,15],queri:0,rais:[0,4,14],rang:[0,9],rather:[8,9,14],reach:15,readabl:17,readi:[8,9,10,14],readthedoc:5,reason:[0,12,17],receiv:17,recipi:17,recommend:[16,17],redistribut:15,refer:[0,5],refresh:0,regard:17,regist:[0,11],remain:17,remot:[4,10],replac:17,repositori:15,repreent:4,repres:[8,9,17],represent:9,reproduc:17,reproduct:15,req:1,request:[0,1,5,9],request_data:7,request_method:7,request_url:7,requestexcept:5,requir:[0,9,14,17],resourc:[0,4,8,10],resource_class:[4,8,9,10,14],resource_list_path:[4,8,9,10,14],resourcecontrol:4,resourcelist:[4,8],respons:[4,17],result:17,retain:17,retriev:[0,1,4,5,8,9,10,11,12,14],revis:17,revoke_user_from_rol:14,right:17,risk:17,role:[0,5,9,14],role_id:[0,14],rolecontrol:5,roleproxi:0,royalti:17,rpm:9,rst:4,run:[1,11],samaccountnam:[0,5,6],samdom:[0,5,6],same:17,schedul:8,scp:11,script:[0,1],search_bind:[0,5,6],sec:0,section:[4,5,17],security_protocol:[0,5,6],see:[0,1,4,5,8,9,14,17],select:5,self:[1,4,5,8,10,14],sell:17,send:9,sent:17,separ:[0,17],server:[0,11],server_filenam:[0,11],servic:[0,8,9,17],service_network_rang:[0,9],session:5,set:[0,4,9,10],set_storag:[0,10],setter:4,setup:15,setup_log:[9,10],shall:17,share:17,shell:[0,1],should:[0,17],show:0,signific:1,similari:1,simpl:4,softwar:17,sole:17,some:5,some_method:5,sometext:[0,11],sourc:[0,1,4,5,6,7,8,9,10,11,12,14,15,17],special:17,specif:[0,17],specifi:[1,9],srv:[0,11],ssh:[0,1,8,10],ssh_kei:0,ssh_key_data:[8,10,11],ssh_key_fil:[0,11],ssh_password:11,ssh_usernam:11,ssl:5,start_sess:0,state:[0,1,4,8,17],statement:17,statu:[0,4,8,9,10,14],status1:0,status2:0,status:[0,8,9,14],status_class:[4,8,9,10,14],status_fieldnam:[4,8,9,10,14],status_info:8,status_messag:9,statusn:0,stoppag:17,storag:[0,9,10],storage_configur:[8,10],storage_error:[8,10],storage_pend:[8,10],str:[0,4,5,8,9,10,11,12,14],string:[0,8,9,10,14],style:4,subcommand:1,subject:[15,16,17],sublicens:17,submiss:15,submit:17,subsequ:17,subset:4,supersed:17,support:[0,1,9,17],synopsi:1,syntax:17,sysinfo:[8,10],system:[0,17],tabl:[0,4],tabul:[4,15],tag1:[0,8,10],tag2:[0,8,10],tag:[0,3,8,10,15],tenant:[0,3,5,15],tenant_id:[0,14],tenant_typ:[0,14],tenantcontrol:[5,14],tenantproxi:0,tenantstatu:14,term:15,termin:17,test:1,text:[0,17],textil:4,than:[8,9,14],theori:17,thereof:17,thi:[0,1,5,8,9,14,15,16,17],third:17,those:17,through:17,timeout:4,timeout_sec:[0,4,8,12],titl:17,to_dict:9,token:0,tort:17,track:17,trade:17,trademark:15,transfer:17,transform:17,translat:17,tupl:0,two:9,txt:[0,11],type:[0,4,5,6,17],typic:1,unconfigur:[8,10],under:17,union:17,unless:17,unlicens:[1,8,10],unstabl:[15,16],until:[15,16],updat:[9,14],upgrad:[1,9,14,16],upload:11,upload_with_ssh_kei:11,upload_with_ssh_pass:11,url:[0,17],usag:[0,15],usage_exampl:0,use:[0,1,5,8,9,10,17],use_ssl:[1,5,15],used:[0,9],user:[0,5,6,8,9,14],user_attribut:[0,5,6],user_id:[0,14],usercontrol:5,usernam:[1,5,15],userproxi:0,uses:[8,9,14],using:[0,1,5,8,9,10,14,16,17],usual:4,uuid:1,valid:[0,1],validate_list_param:0,valu:[1,4,8,9,10,14],variabl:[1,5,15],verbal:17,verif:5,verify_p:[0,5,6],verify_ssl:[1,5,15],version:[0,9,16,17],via:5,wai:5,wait:[0,4,9,12],wait_for_delet:0,wait_for_st:[0,4,8],wait_for_statu:[0,4,8,9],want:4,warn:[1,5,9,14],warn_ssl:[1,5,15],warranti:15,what:15,where:[4,17],wherev:17,whether:17,which:[9,17],whole:17,whom:17,within:[0,17],without:[1,17],work:[3,5,8,14,15],workaround:11,worker:[0,1,4,8,9,10],worker_id:10,workerk8:10,workerk8sstatu:10,worldwid:17,would:5,wrapper:0,write:17,written:17,www:17,yaml:[0,1],yet:[1,11],you:[1,4,5,16,17],your:[1,11,15],youtrack:4,yyyi:17,zsh:1,zshrc:1},titles:["cli module","CLI Docs","Source Repository","Library API Docs","hpecp.base_resource module","hpecp.client module","hpecp.config module","hpecp.exceptions module","hpecp.gateway module","hpecp.k8s_cluster module","hpecp.k8s_worker module","hpecp.license module","hpecp.lock module","hpecp.tag module","hpecp.tenant module","Overview","Installation","Apache License"],titleterms:{AND:17,FOR:17,USE:17,accept:17,addit:17,apach:17,api:3,appendix:17,appli:17,autocomplet:1,base_resourc:4,cli:[0,1,3,15],client:5,condit:17,config:6,content:15,contribut:17,copyright:17,definit:17,disclaim:17,distribut:17,doc:[1,3],exampl:[1,15],except:7,gatewai:8,grant:17,help:1,how:17,hpecp:[4,5,6,7,8,9,10,11,12,13,14],instal:16,k8s_cluster:9,k8s_worker:10,level:1,liabil:17,librari:[3,15],licens:[11,17],limit:17,lock:12,log:1,modul:[0,4,5,6,7,8,9,10,11,12,13,14],overview:15,patent:17,redistribut:17,repositori:2,reproduct:17,setup:1,sourc:2,submiss:17,tag:13,tenant:14,term:17,trademark:17,warranti:17,work:17,your:17}})