import{d as k,a as S,o as f,c as x,i as a,M as d,N as c,e as T,m as b,g as D,E as i,x as w,p as y,h as I,_ as $}from"./index-75e5a65c.js";import{u as M}from"./index-fc343c6b.js";import{c as V,d as N}from"./index-5cb59226.js";const p=n=>(y("data-v-b0e91d61"),n=n(),I(),n),B={class:"post-position"},C={class:"post-card"},E=p(()=>a("h3",null,"组员的任务",-1)),G=p(()=>a("h3",null,"提示",-1)),U=k({__name:"menberTask",setup(n){const r=M().user.groupId,s=S({task:"",description:"",groupId:r,avgDuration:"",date:""});async function u(e){const t=await V(e);s.value.task=t.data.data.task,s.value.description=t.data.data.description}u(r);function l(){const e=new Date,t=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),m=String(e.getDate()).padStart(2,"0"),g=String(e.getHours()).padStart(2,"0"),h=String(e.getMinutes()).padStart(2,"0"),v=String(e.getSeconds()).padStart(2,"0");return`${t}-${o}-${m} ${g}:${h}:${v}`}const _=()=>{const e=l();s.value.date=e,N(s.value).then(t=>{t.data.code==200&&i.success("发布成功")}).catch(t=>{i.error(t)})};return(e,t)=>(f(),x("div",B,[a("div",C,[E,d(a("textarea",{placeholder:"安排组员的默认任务","onUpdate:modelValue":t[0]||(t[0]=o=>s.value.task=o)},null,512),[[c,s.value.task]]),G,d(a("textarea",{class:"description",placeholder:"给组员的提示","onUpdate:modelValue":t[1]||(t[1]=o=>s.value.description=o)},null,512),[[c,s.value.description]]),a("button",{onClick:_,class:"post"},[T(b(w),{style:{width:"1em",height:"0.8em","margin-right":"0px"}}),D(" 发布 ")])])]))}});const j=$(U,[["__scopeId","data-v-b0e91d61"]]);export{j as default};
