import{b as Q,e as X,s as Y}from"./index-d2b966e5.js";import{d as Z,a as u,k as ee,r as S,b as r,o as le,c as ae,i as b,e,w as o,m as n,J as te,F as oe,E as N,K as ne,g as v,t as E,L as se,p as de,h as ue,_ as re}from"./index-c2bd9599.js";import{u as ie}from"./index-4c43e805.js";const pe=x=>(de("data-v-9add5fb6"),x=x(),ue(),x),me=pe(()=>b("h2",null,"组员管理",-1)),ce={class:"mt-4"},fe={class:"pagination-block"},_e={class:"drawer__content"},ge={align:"center",class:"drawer__footer"},ve={class:"dialog-footer"},z="80px",I="100px",be=Z({__name:"MemberManage",setup(x){let p=u([]);const W=ie().user.groupId;function M(){Q(W).then(t=>{p.value=t.data.data}).catch(t=>{N.error(t)})}M();const f=u(""),h=u(""),T=ee(()=>h.value=="2"?p.value.filter(t=>t.duration>=25&&t.userName.includes(f.value)):h.value=="3"?p.value.filter(t=>t.duration<25&&t.userName.includes(f.value)):h.value=="4"?p.value.filter(t=>t.mailbox&&t.userName.includes(f.value)):p.value.filter(t=>t.userName.includes(f.value)));let F,m=u(!1);const B=u(!1),k=u(!1);let s=S({userName:"",password:"",phoneNumber:0,duration:0,leaderTaskWeek:"第0周"});const D=()=>{X(s).then(()=>{N.success("修改成功"),M(),m.value=!1}).catch(t=>{N.error(t)})},j=()=>{k.value=!1,B.value=!1,m.value=!1,clearTimeout(F)},L=t=>{m.value=!0,p.value.forEach(l=>{l.id==t&&Object.assign(s,l)})},V=u(!1),i=S({id:0,leaderTask:"",description:""}),P=(t,l)=>{V.value=!0,p.value.forEach(d=>{d.id==t&&d.leaderTaskWeek==l&&(i.id=d.id,i.leaderTask=d.leaderTask,i.description=d.description)})},$=()=>{Y(i).then(()=>{N.success("修改成功"),V.value=!1,M()}).catch(t=>{N.error(t)})},w=u(1),C=u(10),J=u(!1),K=t=>{C.value=t},O=t=>{w.value=t};return(t,l)=>{const d=r("el-option"),R=r("el-select"),c=r("el-button"),_=r("el-input"),g=r("el-table-column"),q=r("el-table"),A=r("el-pagination"),y=r("el-form-item"),U=r("el-form"),G=r("el-dialog");return le(),ae(oe,null,[me,b("div",ce,[e(_,{modelValue:f.value,"onUpdate:modelValue":l[1]||(l[1]=a=>f.value=a),size:"large",placeholder:"输入组员姓名",class:"input-with-select"},{prepend:o(()=>[e(R,{modelValue:h.value,"onUpdate:modelValue":l[0]||(l[0]=a=>h.value=a),onChange:T.value,size:"large",placeholder:"选择",style:{width:"150px"}},{default:o(()=>[e(d,{label:"所有组员",value:"1"}),e(d,{label:"上周时长达标",value:"2"}),e(d,{label:"上周时长未达标",value:"3"}),e(d,{label:"正式队员",value:"4"})]),_:1},8,["modelValue","onChange"])]),append:o(()=>[e(c,{icon:n(ne),onClick:T.value},null,8,["icon","onClick"])]),_:1},8,["modelValue"])]),e(q,{data:T.value.slice((w.value-1)*C.value,w.value*C.value),style:{width:"97%",height:"445px"}},{default:o(()=>[e(g,{prop:"userName",label:"姓名",style:{width:"20%"}}),e(g,{prop:"password",label:"密码",style:{width:"21%"}}),e(g,{prop:"phoneNumber",label:"手机号码",style:{width:"18%"}}),e(g,{prop:"duration",align:"center",label:"上周时长",style:{width:"12%"}}),e(g,{prop:"leaderTaskWeek",align:"center",label:"任务的周期",style:{width:"13%"}}),e(g,{align:"center",fixed:"right",label:"操作",style:{width:"16%"}},{default:o(a=>[e(c,{link:"",type:"primary",size:"large",onClick:H=>L(a.row.id)},{default:o(()=>[v("修改")]),_:2},1032,["onClick"]),e(c,{link:"",type:"success",size:"large",disabled:!a.row.mailbox,onClick:H=>P(a.row.id,a.row.leaderTaskWeek)},{default:o(()=>[v("添加任务")]),_:2},1032,["disabled","onClick"])]),_:1})]),_:1},8,["data"]),b("div",fe,[e(A,{"hide-on-single-page":!1,"current-page":w.value,"onUpdate:currentPage":l[2]||(l[2]=a=>w.value=a),"page-size":C.value,"onUpdate:pageSize":l[3]||(l[3]=a=>C.value=a),background:J.value,layout:"prev, pager, next, jumper","page-count":Math.ceil(T.value.length/10),onSizeChange:K,onCurrentChange:O,"hide-on-single-page:true":""},null,8,["current-page","page-size","background","page-count"])]),e(n(se),{modelValue:n(m),"onUpdate:modelValue":l[7]||(l[7]=a=>te(m)?m.value=a:m=a),title:"修改组员信息",direction:"rtl",size:"30%"},{default:o(()=>[b("div",_e,[e(U,{model:n(s)},{default:o(()=>[e(y,{label:"姓名","label-width":z},{default:o(()=>[e(_,{modelValue:n(s).userName,"onUpdate:modelValue":l[4]||(l[4]=a=>n(s).userName=a),autocomplete:"off",disabled:""},null,8,["modelValue"])]),_:1}),e(y,{label:"密码","label-width":z},{default:o(()=>[e(_,{modelValue:n(s).password,"onUpdate:modelValue":l[5]||(l[5]=a=>n(s).password=a),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(y,{label:"手机号码","label-width":z},{default:o(()=>[e(_,{modelValue:n(s).phoneNumber,"onUpdate:modelValue":l[6]||(l[6]=a=>n(s).phoneNumber=a),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),b("div",ge,[e(c,{onClick:j},{default:o(()=>[v("取消")]),_:1}),e(c,{type:"primary",loading:k.value,onClick:D},{default:o(()=>[v(E(k.value?"提交中...":"提交"),1)]),_:1},8,["loading"])])])]),_:1},8,["modelValue"]),e(G,{modelValue:V.value,"onUpdate:modelValue":l[11]||(l[11]=a=>V.value=a),title:"添加任务"},{footer:o(()=>[b("span",ve,[e(c,{onClick:l[10]||(l[10]=a=>V.value=!1)},{default:o(()=>[v("取消")]),_:1}),e(c,{type:"primary",loading:k.value,onClick:$},{default:o(()=>[v(E(k.value?"提交中...":"提交"),1)]),_:1},8,["loading"])])]),default:o(()=>[e(U,{model:n(s)},{default:o(()=>[e(y,{label:"任务安排","label-width":I},{default:o(()=>[e(_,{modelValue:i.leaderTask,"onUpdate:modelValue":l[8]||(l[8]=a=>i.leaderTask=a),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(y,{label:"任务描述","label-width":I},{default:o(()=>[e(_,{modelValue:i.description,"onUpdate:modelValue":l[9]||(l[9]=a=>i.description=a),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});const Ce=re(be,[["__scopeId","data-v-9add5fb6"]]);export{Ce as default};