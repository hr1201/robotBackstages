import{h as N,i as P}from"./index-83ffd307.js";import{d as S,o as c,c as _,h as l,ab as C,_ as B,a as u,E as x,b as h,e as g,w as k,F as m,m as V,l as y,k as z,t as b,f as E,p as T,g as W}from"./index-b0eb5274.js";import{u as M}from"./index-3689345c.js";const j={class:"download-button"},q=C('<div class="docs" data-v-d6bef176><svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24" data-v-d6bef176><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-v-d6bef176></path><polyline points="14 2 14 8 20 8" data-v-d6bef176></polyline><line y2="13" x2="8" y1="13" x1="16" data-v-d6bef176></line><line y2="17" x2="8" y1="17" x1="16" data-v-d6bef176></line><polyline points="10 9 9 9 8 9" data-v-d6bef176></polyline></svg> Docs</div>',1),F=[q],H=["href"],L=C('<div class="download" data-v-d6bef176><svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24" data-v-d6bef176><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-d6bef176></path><polyline points="7 10 12 15 17 10" data-v-d6bef176></polyline><line y2="3" x2="12" y1="15" x1="12" data-v-d6bef176></line></svg></div>',1),O=[L],R=S({__name:"docsButton",props:["wordUrl"],emits:["DocsPreview"],setup(r,{emit:v}){const d=r,i=a=>{let n=["doc","docx","xls","xlsx","xlsm","ppt","pptx"],o=typeof a=="string"?a:(a==null?void 0:a.toString())||"",p=o.substring(o.lastIndexOf(".")+1,o.length).split("?")[0];n.find(e=>e===p)&&(o="http://view.officeapps.live.com/op/view.aspx?src="+encodeURIComponent(o)),v("DocsPreview",{urlPre:o})};return(a,n)=>(c(),_("button",j,[l("a",{onClick:n[0]||(n[0]=o=>i(d.wordUrl)),class:"preview",title:"预览"},F),l("a",{href:d.wordUrl},O,8,H)]))}});const A=B(R,[["__scopeId","data-v-d6bef176"]]),I=r=>(T("data-v-cac214c3"),r=r(),W(),r),G=["src"],J=I(()=>l("span",{style:{color:"rgb(156 163 175)"}},"   --点击下拉框选择，本页面可使用浏览器自带的Ctrl+f 进行搜索--",-1)),K={class:"card-block"},Q={class:"title"},X={class:"description"},Y=I(()=>l("strong",null,"总结：",-1)),Z={class:"actions"},ee={class:"pref"},te=S({__name:"weekly",setup(r){const v=M(),d=u("第1周");let i=u([]);const a=v.user.groupId,n=()=>{P(d.value,a).then(e=>{o.value=e.data.data}).catch(e=>{x.error(e)})};N().then(e=>{e.data.data.forEach(s=>{i.value&&e.data.data.length==1?(d.value=s,i.value.push({value:s,label:s}),n()):i.value&&i.value.push({value:s,label:s})})}).catch(e=>{x.error(e)});let o=u([]);n();const p=u(!1);let f;const w=e=>{p.value=!0,f=e.urlPre};return(e,s)=>{const U=h("el-dialog"),$=h("el-option"),D=h("el-select");return c(),_(m,null,[g(U,{modelValue:p.value,"onUpdate:modelValue":s[0]||(s[0]=t=>p.value=t),title:"预览周报"},{default:k(()=>[l("iframe",{width:"100%",height:"500px",src:y(f)},`\r
        `,8,G)]),_:1},8,["modelValue"]),g(D,{modelValue:d.value,"onUpdate:modelValue":s[1]||(s[1]=t=>d.value=t),"value-key":"id",onChange:n,style:{"margin-left":"10px"},class:"m-2",placeholder:"Select",size:"large"},{default:k(()=>[(c(!0),_(m,null,V(y(i),t=>(c(),z($,{key:t.value,label:t.label,value:t.value,loading:"true"},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),J,l("div",K,[(c(!0),_(m,null,V(y(o),t=>(c(),_("div",{class:"card",key:t.id},[l("span",Q,"🍪 "+b(t.userName),1),l("p",X,[Y,E(b(t.summary),1)]),l("div",Z,[l("p",ee,b(t.time),1),g(A,{wordUrl:t.wordUrl,onDocsPreview:w},null,8,["wordUrl"])])]))),128))])],64)}}});const ae=B(te,[["__scopeId","data-v-cac214c3"]]);export{ae as default};
