Search.setIndex({docnames:["hpecp","hpecp.client","hpecp.config","hpecp.epic_worker","hpecp.exceptions","hpecp.k8s_cluster","hpecp.k8s_worker","hpecp.license","hpecp.lock","hpecp.logger","hpecp.tag","hpecp.tenant","index","installation","license","logging"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":2,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["hpecp.rst","hpecp.client.rst","hpecp.config.rst","hpecp.epic_worker.rst","hpecp.exceptions.rst","hpecp.k8s_cluster.rst","hpecp.k8s_worker.rst","hpecp.license.rst","hpecp.lock.rst","hpecp.logger.rst","hpecp.tag.rst","hpecp.tenant.rst","index.rst","installation.rst","license.rst","logging.rst"],objects:{"hpecp.client":{ContainerPlatformClient:[1,1,1,""]},"hpecp.client.ContainerPlatformClient":{__init__:[1,2,1,""],config:[1,2,1,""],create_session:[1,2,1,""],k8s_cluster:[1,2,1,""],log:[1,2,1,""],tenant:[1,2,1,""]},"hpecp.config":{ConfigController:[2,1,1,""]},"hpecp.config.ConfigController":{__init__:[2,2,1,""],auth:[2,2,1,""]},"hpecp.epic_worker":{EpicWorkerController:[3,1,1,""]},"hpecp.epic_worker.EpicWorkerController":{__init__:[3,2,1,""],add_gateway:[3,2,1,""],get_gateway:[3,2,1,""],get_gateways:[3,2,1,""],wait_for_gateway_state:[3,2,1,""]},"hpecp.exceptions":{APIException:[4,3,1,""],APIItemNotFoundException:[4,3,1,""],ContainerPlatformClientException:[4,3,1,""]},"hpecp.exceptions.APIException":{__init__:[4,2,1,""]},"hpecp.exceptions.APIItemNotFoundException":{__init__:[4,2,1,""]},"hpecp.exceptions.ContainerPlatformClientException":{__init__:[4,2,1,""]},"hpecp.k8s_cluster":{K8sCluster:[5,1,1,""],K8sClusterController:[5,1,1,""],K8sClusterHostConfig:[5,1,1,""],K8sClusterList:[5,1,1,""],K8sClusterStatus:[5,1,1,""]},"hpecp.k8s_cluster.K8sCluster":{__init__:[5,2,1,""],admin_kube_config:[5,2,1,""],all_fields:[5,4,1,""],api_endpoint_access:[5,2,1,""],cert_data:[5,2,1,""],created_by_user_id:[5,2,1,""],created_by_user_name:[5,2,1,""],created_time:[5,2,1,""],dashboard_endpoint_access:[5,2,1,""],dashboard_token:[5,2,1,""],description:[5,2,1,""],id:[5,2,1,""],k8s_version:[5,2,1,""],k8shosts_config:[5,2,1,""],name:[5,2,1,""],set_columns:[5,2,1,""],status:[5,2,1,""],status_message:[5,2,1,""]},"hpecp.k8s_cluster.K8sClusterController":{"delete":[5,2,1,""],__init__:[5,2,1,""],create:[5,2,1,""],get:[5,2,1,""],list:[5,2,1,""],wait_for_status:[5,2,1,""]},"hpecp.k8s_cluster.K8sClusterHostConfig":{__init__:[5,2,1,""],to_dict:[5,2,1,""]},"hpecp.k8s_cluster.K8sClusterList":{__init__:[5,2,1,""],next:[5,2,1,""],tabulate:[5,2,1,""]},"hpecp.k8s_cluster.K8sClusterStatus":{creating:[5,4,1,""],deleting:[5,4,1,""],error:[5,4,1,""],ready:[5,4,1,""],updating:[5,4,1,""],upgrading:[5,4,1,""],warning:[5,4,1,""]},"hpecp.k8s_worker":{K8sWorkerController:[6,1,1,""],WorkerK8s:[6,1,1,""],WorkerK8sList:[6,1,1,""],WorkerK8sStatus:[6,1,1,""]},"hpecp.k8s_worker.K8sWorkerController":{__init__:[6,2,1,""],add_k8shost:[6,2,1,""],get_k8shost:[6,2,1,""],get_k8shosts:[6,2,1,""],set_storage_k8shost:[6,2,1,""],wait_for_k8shost_status:[6,2,1,""]},"hpecp.k8s_worker.WorkerK8s":{__init__:[6,2,1,""],hostname:[6,2,1,""],href:[6,2,1,""],ipaddr:[6,2,1,""],status:[6,2,1,""],worker_id:[6,2,1,""]},"hpecp.k8s_worker.WorkerK8sList":{__init__:[6,2,1,""],next:[6,2,1,""],tabulate:[6,2,1,""]},"hpecp.k8s_worker.WorkerK8sStatus":{bundle:[6,4,1,""],configured:[6,4,1,""],configuring:[6,4,1,""],deleting:[6,4,1,""],error:[6,4,1,""],installed:[6,4,1,""],installing:[6,4,1,""],ready:[6,4,1,""],status_name:[6,2,1,""],status_names:[6,2,1,""],storage_configuring:[6,4,1,""],storage_error:[6,4,1,""],storage_pending:[6,4,1,""],sysinfo:[6,4,1,""],unconfiguring:[6,4,1,""],unlicensed:[6,4,1,""]},"hpecp.license":{LicenseController:[7,1,1,""]},"hpecp.license.LicenseController":{__init__:[7,2,1,""],delete_license:[7,2,1,""],get_license:[7,2,1,""],get_platform_id:[7,2,1,""],register_license:[7,2,1,""],upload_license:[7,2,1,""]},"hpecp.lock":{LockController:[8,1,1,""]},"hpecp.lock.LockController":{__init__:[8,2,1,""],delete_lock:[8,2,1,""],delete_locks:[8,2,1,""],get_locks:[8,2,1,""],set_lock:[8,2,1,""]},"hpecp.logger":{Logger:[9,1,1,""]},"hpecp.logger.Logger":{get_logger:[9,2,1,""]},"hpecp.tag":{TagController:[10,1,1,""]},"hpecp.tag.TagController":{__init__:[10,2,1,""]},"hpecp.tenant":{Tenant:[11,1,1,""],TenantController:[11,1,1,""],TenantList:[11,1,1,""]},"hpecp.tenant.Tenant":{__init__:[11,2,1,""],description:[11,2,1,""],id:[11,2,1,""],name:[11,2,1,""],status:[11,2,1,""],tenant_type:[11,2,1,""]},"hpecp.tenant.TenantController":{__init__:[11,2,1,""],auth_setup:[11,2,1,""],create:[11,2,1,""],get:[11,2,1,""],list:[11,2,1,""]},"hpecp.tenant.TenantList":{__init__:[11,2,1,""],next:[11,2,1,""],tabulate:[11,2,1,""]},hpecp:{client:[1,0,0,"-"],config:[2,0,0,"-"],epic_worker:[3,0,0,"-"],exceptions:[4,0,0,"-"],k8s_cluster:[5,0,0,"-"],k8s_worker:[6,0,0,"-"],license:[7,0,0,"-"],lock:[8,0,0,"-"],logger:[9,0,0,"-"],tag:[10,0,0,"-"],tenant:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:attribute"},terms:{"5ambapwd":[1,2],"class":[1,2,3,5,6,7,8,9,10,11,14],"default":5,"enum":[5,6],"function":1,"import":[12,14,15],"int":[1,5],"long":5,"return":[1,3,5,11],"static":6,"true":[1,5,12],"while":14,For:[14,15],K8S:5,K8s:5,Not:14,The:[1,14],Use:5,Uses:[3,6],__init__:[1,2,3,4,5,6,7,8,10,11],abov:14,accur:[2,3,4,5,6,7,8,10,11],act:14,activ:[1,2],add:14,add_gatewai:3,add_k8shost:6,addendum:14,admin123:12,admin:[3,6,11,12],admin_kube_config:5,administr:[1,2],advanc:1,advis:14,against:14,agre:14,agreement:14,all:[5,14],all_field:5,alleg:14,alon:14,along:14,alongsid:14,also:14,ani:[1,14],annot:14,apach:12,api:[1,3,5,6,11,12,15],api_endpoint_access:5,api_host:[1,12],api_port:[1,12],apidoc:[3,6],apiexcept:[1,4,5],apiitemnotfoundexcept:[4,5],appear:14,applic:14,appropri:14,archiv:14,arg:[4,5],argument:[5,11],aris:14,arrai:5,assert:14,associ:14,assum:14,attach:14,attribut:[1,14],auth:[1,2],auth_setup:11,author:14,authorship:14,avail:[1,14],base64enc_licens:7,base:[2,3,4,5,6,7,8,9,10,11,14],base_dn:[1,2],basi:14,been:14,befor:5,begin:[3,6],behalf:14,below:14,benefici:14,bind:14,bind_dn:[1,2],bind_pwd:[1,2],bind_typ:[1,2],blob:[3,6],boilerpl:14,bool:[1,5],bracket:14,bundl:6,call:1,can:[1,5],cannot:14,carri:14,caus:14,ceas:5,central:1,cert:[1,12],cert_data:5,chang:14,charact:14,charg:14,check:5,choos:14,claim:14,clazz:9,client:[0,2,3,5,6,7,8,10,11,12,13],cluster:5,code:[14,15],column:[5,12],com:[1,2,3,6,11,13],combin:14,comment:14,commerci:14,common:14,commun:[13,14],compil:14,compli:14,complianc:14,comput:[3,14],config:[0,1],configcontrol:[1,2],configur:[3,6,14],connect:1,consequenti:14,consist:14,conspicu:14,constitut:14,constru:14,contain:[1,12,13,14],containerplatformcli:[1,12],containerplatformclientexcept:4,content:14,contract:14,contributor:14,contributori:14,control:[1,14,15],controller_ip:[3,6],convers:14,copi:14,counterclaim:14,creat:[1,5,11],create_sess:[1,12],created_by_user_id:5,created_by_user_nam:5,created_tim:5,credenti:[3,6],cross:14,customari:14,damag:14,dashboard_endpoint_access:5,dashboard_token:5,data:[2,3,6,11],date:14,debug:15,def:1,defend:14,defin:[1,14],delet:[5,6],delete_licens:7,delete_lock:8,deliber:14,demotenantadmin:11,demotenantus:11,deriv:14,describ:14,descript:[5,11,12,14],design:14,detail:5,determin:14,dev:6,differ:14,direct:14,directori:[1,2],discuss:14,displai:14,doc:12,document:14,doe:[1,14],don:14,dure:1,each:14,easier:14,editori:14,either:14,elabor:14,electron:14,empti:5,enclos:14,end:[3,6,14],entiti:14,enumer:[5,6],environ:15,ephemeral_disk:6,epic_work:0,epicworkercontrol:3,error:[1,5,6,15],even:14,event:[14,15],exampl:[1,2,3,5,6,11,12,14],except:[0,1,3,5,6,14],exclud:14,exclus:14,execut:14,exercis:14,exist:5,explicitli:14,express:14,external_identity_serv:[1,2],external_user_group:11,failur:14,fals:[1,2,5],fee:14,field:[5,14],fifti:14,file:14,fit:14,follow:14,form:14,format:14,found:5,free:14,from:[1,12,14],full:15,gatewai:3,gener:[5,14],get:[5,11],get_gatewai:3,get_k8shost:6,get_licens:7,get_lock:8,get_logg:9,get_platform_id:7,git:13,github:[3,6,13],give:14,goodwil:14,govern:14,grossli:14,group:11,harmless:14,has:14,have:14,help:[2,3,4,5,6,7,8,10,11],here:15,herebi:14,herein:14,hold:14,host:[1,2],hostnam:6,how:5,howev:14,hpe:[1,12,13],hpeclient:5,hpecp:[0,12,13],href:6,html:[3,6],http:[1,3,6,13,14],identif:14,identifi:14,iii:14,impli:14,improv:14,inabl:14,incident:14,includ:14,inclus:14,incorpor:14,incur:14,indemn:14,indemnifi:14,index:6,indic:[6,14],indirect:14,individu:14,info:15,inform:14,infring:14,initi:[1,2,3,4,5,6,7,8,10,11],instal:[6,12],instanc:1,instanti:1,institut:14,intention:14,interact:1,interfac:14,intern:3,ipaddr:6,irrevoc:14,issu:14,item:5,its:14,januari:14,json:[5,6,11],justiniso:[3,6],k8s_cluster:[0,1,11,12],k8s_version:5,k8s_worker:0,k8scluster:5,k8scluster_id:5,k8sclustercontrol:[1,5],k8sclusterhostconfig:5,k8sclusterlist:5,k8sclusterstatu:5,k8shosts_config:5,k8sworkercontrol:6,kei:[3,6],keyword:5,kind:14,languag:14,law:14,lawsuit:14,ldap:[1,2],least:14,legal:14,level:15,liabl:14,librari:[1,12],licens:[0,12],license_kei:7,licensecontrol:7,licensor:14,link:14,list:[1,5,11,12,14,15],litig:14,local:5,lock:0,lock_id:8,lockcontrol:8,log:[1,5,12],log_level:15,logger:[0,1],login:12,loss:14,made:[1,14],mai:[14,15],mail:14,main:1,make:[1,14],malfunct:14,manag:14,mark:14,master:[1,3,6,13],mean:14,mechan:14,media:14,medium:14,meet:14,member:11,merchant:14,mere:14,messag:4,method:1,modif:14,modifi:14,modul:0,more:14,must:14,name:[5,11,14],necessarili:14,neglig:14,next:[5,6,11],node:5,non:14,none:[1,4,5,8,11],normal:14,note:1,noth:14,notic:14,notwithstand:14,nvme1n1:6,nvme2n1:6,object:[1,2,3,5,6,7,8,9,10,11,14],oblig:14,obtain:14,occur:5,offer:14,one:14,onli:14,op_spec:6,org:14,origin:14,other:14,otherwis:[5,14],out:14,output:5,outstand:14,own:14,owner:14,ownership:14,page:14,paramet:[1,15],part:14,parti:14,particular:14,pass:1,password:[1,12],pem:12,percent:14,perform:14,permiss:14,perpetu:14,persistent_disk:6,persistent_storage_loc:5,persistent_storage_nimble_csi:5,pertain:14,pip3:13,place:14,platform:[1,12,13],pod_dns_domain:5,pod_network_rang:5,poll:[3,6],port:[1,2],possibl:14,power:14,prefer:14,prepar:14,print:[5,14],privat:[3,6],product:14,programmat:15,promin:14,properti:[1,5,6,11],provid:[5,14],proxi:3,proxy_nodes_hostnam:3,publicli:14,purpos:[3,14],python:12,rais:[1,3,5,6],readabl:14,readi:[5,6],readthedoc:1,reason:[8,14],receiv:14,recipi:14,recommend:14,refer:1,regard:14,register_licens:7,remain:14,replac:14,repositori:12,repres:[5,14],represen:5,reproduc:14,request:[1,15],request_data:4,request_method:4,request_url:4,requestexcept:1,requir:14,respons:[3,6,14],result:14,retain:14,retriev:5,revis:14,right:14,risk:14,role:[5,11],royalti:14,rsa:[3,6],samaccountnam:[1,2],samdom:[1,2,11],same:14,schema:[3,6],search_bind:[1,2],section:14,security_protocol:[1,2],see:[1,2,3,4,5,6,7,8,10,11,14,15],self:[1,2,3,4,5,6,7,8,10,11],sell:14,sent:14,separ:14,server_filenam:7,servic:14,service_network_rang:5,session:1,set:[5,15],set_column:5,set_lock:8,set_storage_k8shost:6,setup:5,setup_log:5,shall:14,share:14,should:14,signatur:[2,3,4,5,6,7,8,10,11],signific:15,site:[3,6],softwar:14,sole:14,some:1,some_method:1,sourc:[12,14],special:14,specif:14,ssh_key_access:[3,6],ssh_key_data:[3,6],ssl:1,state:[3,5,14],statement:14,statu:[3,5,6,11],status_messag:5,status_nam:6,stoppag:14,storag:6,storage_configur:6,storage_error:6,storage_pend:6,str:[1,5],subject:14,sublicens:14,submit:14,subsequ:14,subset:5,summari:[5,11],supersed:14,support:14,syntax:14,sysinfo:6,system:14,tabl:5,tabul:[5,6,11,12],tabular:5,tag:[0,3,6],tagcontrol:10,tenant:[0,1],tenant_id:11,tenant_typ:11,tenantcontrol:[1,11],tenantlist:11,termin:14,text:14,theori:14,thereof:14,thi:[1,14],third:14,those:14,through:14,timeout:5,timeout_sec:[3,5,6,8],titl:14,to_dict:5,tort:14,track:14,trade:14,transfer:14,transform:14,translat:14,type:[1,2,3,4,5,6,7,8,10,11,14],typic:15,unconfigur:6,under:14,union:14,unless:14,unlicens:6,updat:5,upgrad:[5,13],upload_licens:7,url:14,usag:12,use:[5,14],use_ssl:[1,12],user:[1,2,11],user_attribut:[1,2],usernam:[1,12],using:[1,14],valid:15,valu:[3,6,15],variabl:15,verbal:14,verif:1,verify_p:[1,2],verify_ssl:[1,12],version:14,via:1,wait:5,wait_for_gateway_st:3,wait_for_k8shost_statu:6,wait_for_statu:5,want:5,warn:[5,15],watch_for_statu:5,west:3,where:14,wherev:14,whether:14,which:14,whole:14,whom:14,within:14,without:14,work:1,worker_id:6,workerk8:6,workerk8slist:6,workerk8sstatu:[3,6],worldwid:14,would:1,write:14,written:14,www:14,you:[5,14,15],your:15,yyyi:14},titles:["API Docs","hpecp.client module","hpecp.config module","hpecp.epic_worker module","hpecp.exceptions module","hpecp.k8s_cluster module","hpecp.k8s_worker module","hpecp.license module","hpecp.lock module","hpecp.logger module","hpecp.tag module","hpecp.tenant module","Overview","Installation","Apache License","Logging"],titleterms:{AND:14,FOR:14,USE:14,accept:14,addit:14,apach:14,api:0,appendix:14,appli:14,client:1,condit:14,config:2,content:12,contribut:14,copyright:14,definit:14,disclaim:14,distribut:14,doc:0,epic_work:3,except:4,github:12,grant:14,how:14,hpecp:[1,2,3,4,5,6,7,8,9,10,11],instal:13,k8s_cluster:5,k8s_worker:6,liabil:14,licens:[7,14],limit:14,lock:8,log:15,logger:9,modul:[1,2,3,4,5,6,7,8,9,10,11],overview:[12,13],patent:14,redistribut:14,reproduct:14,submiss:14,tag:10,tenant:11,term:14,trademark:14,warranti:14,work:14,your:14}})