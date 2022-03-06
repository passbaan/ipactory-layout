var H=Object.defineProperty,Q=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var F=(e,t,i)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,c=(e,t)=>{for(var i in t||(t={}))ee.call(t,i)&&F(e,i,t[i]);if(T)for(var i of T(t))te.call(t,i)&&F(e,i,t[i]);return e},f=(e,t)=>Q(e,Y(t));import{v as m,c as ie,E as ne,a as h,b as E,r as w,o as _,d as u,t as $,n as P,e as M,m as R,f as L,g as oe,F as x,h as y,i as C,w as V,j as se,k as ae,l as re}from"./vendor.f75703bf.js";const de=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}};de();const le=()=>({started:"yes"}),ce={},_e={},ue={};var pe={actions:_e,mutations:ue,state:le,getters:ce};const N="activate_area",O="move_area",B="deactivate_area",j="resizing_AREA",D="update_list",U="window_was_resized",G="READJUST_AREAS",k="area_toggle",Z="rearrange_area",J="set_list",X="resize_area",q="recalibrate_sizes",K="redistribute_areas",me=()=>({list:[],originalList:[{name:"Area 1",original_position:1,current_position:1,id:1,is_active:!1,width:0,pixel_width:0,uid:m(),hasEditor:!1,cards:[{title:"Card A",content:"Card A",id:m(),fold_status:!1},{title:"Card B",content:"Card B",id:m(),fold_status:!1},{title:"Card C",content:"Card C",id:m(),fold_status:!1}]},{name:"Area 2",original_position:2,current_position:3,id:2,is_active:!1,width:0,pixel_width:0,uid:m(),hasEditor:!1},{name:"Area 3",original_position:3,current_position:3,id:3,is_active:!1,width:0,pixel_width:0,uid:m(),hasEditor:!0},{name:"Area 4",original_position:4,current_position:4,id:4,is_active:!1,width:0,pixel_width:0,uid:m(),hasEditor:!1},{name:"Area 5",original_position:5,current_position:5,id:5,is_active:!1,width:0,pixel_width:0,uid:m(),hasEditor:!1,image:"https://i.imgur.com/GL7igry.png"}]}),he={},fe={[N]({commit:e},t=null){let i=null;return typeof t=="number"?e(k,{areaId:t,show:!0}):i="`areaId` needs to be a number.",i},[B]({commit:e},t=null){let i=null;return typeof t=="number"?e(k,{areaId:t,show:!1}):i="`areaId` needs to be a number.",i},[O]({commit:e},{oldIndex:t,newIndex:i}){e(Z,{oldIndex:t,newIndex:i})},[D]({commit:e},t){e(J,t)},[j]({commit:e},{id:t,sizeDiff:i}){e(X,{id:t,sizeDiff:i})},[U]({commit:e}){e(q)},[G]({commit:e}){e(K)}},ge=e=>e.map(t=>{const i=window.innerWidth;return t.pixel_width===0&&(t.pixel_width=100),t.width=t.pixel_width/i*100,c({},t)}),we={[k](e,{areaId:t,show:i}){const{originalList:a,list:o}=e;let n=o;if(i===!0){const r=a.find(g=>g.id===t),l=parseFloat((100/(n.length+1)).toFixed(2)),b=100-l;if(n=n.map(g=>{const p=parseFloat((b*g.width/100).toFixed(2));return f(c({},g),{width:p})}),r.is_active=!0,r.width=l,r.original_position<n.length)n.splice(r.original_position-1,0,r);else{let g=-1;for(let p=0;p<length;p+=1)n[p].original_position>r.original_position&&p>0&&n[p].original_position<n[p-1].original_position&&(g=p);g!==-1?n.splice(g,0,r):n.push(r)}}else{e.originalList=a.map(d=>f(c({},d),{is_active:d.id===t?!1:d.is_active,uid:m()})),n=o.filter(d=>d.id!==t);const r=n.reduce((d,l)=>d+l.width,0);n=n.map(d=>f(c({},d),{width:d.width/r*100}))}const s=window.innerWidth;e.list=n.map((r,d)=>f(c({},r),{current_position:d+1,pixel_width:s/(100/r.width),uid:m()}))},[X](e,{id:t,sizeDiff:i}){const{list:a}=e,o=a.findIndex(n=>n.id===t);e.list[o].pixel_width+=i,e.list[o+1].pixel_width-=i,e.list=ge(e.list)},[Z](e){const{list:t}=e;e.list=t.map((i,a)=>f(c({},i),{current_position:a+1,uid:m()}))},[J](e,t){e.list=t.map((i,a)=>f(c({},i),{current_position:a+1,uid:m()}))},[q](e){const t=window.innerWidth;e.list=e.list.map((i,a)=>f(c({},i),{current_position:a+1,pixel_width:t/(100/i.width)}))},[K](e){const i=parseFloat((100/e.list.length).toFixed(2)),a=window.innerWidth;e.list=e.list.map((o,n)=>f(c({},o),{current_position:n+1,width:i,pixel_width:a/(100/i)}))}};var Ae={state:me,actions:fe,getters:he,mutations:we},ve=ie({modules:{base:pe,areas:Ae}}),v=(e,t)=>{const i=e.__vccOpts||e;for(const[a,o]of t)i[a]=o;return i};const Ee={name:"TinyEditor",components:{editor:ne}};function be(e,t,i,a,o,n){const s=w("editor",!0);return _(),h("div",null,[E(s,{"api-key":"no-api-key",init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor |            alignleft aligncenter alignright alignjustify |            bullist numlist outdent indent | removeformat | help"}})])}var ye=v(Ee,[["render",be]]);const $e={name:"AreaCard",props:{card:Object},data(){return{collapsed:!1}},methods:{collapse(){this.collapsed=!this.collapsed}}},xe={class:"card"},Ce={class:"card__header"},ke={class:"card__draggable"};function Re(e,t,i,a,o,n){return _(),h("div",xe,[u("div",Ce,[u("span",ke,"\u2630 "+$(i.card.title),1),u("span",{class:"card__fold",onClick:t[0]||(t[0]=(...s)=>n.collapse&&n.collapse(...s))},"\u2193")]),u("div",{class:P(["card__content",o.collapsed?"card__content--hide":""])},$(i.card.content),3)])}var Le=v($e,[["render",Re]]);const We={name:"AreaComponent",data(){return{area:null,containerWidth:0,cards:[]}},components:{Editor:ye,Card:Le,draggable:M},props:{element:Object},computed:c({},R({list:({areas:e})=>e.list})),mounted(){this.area=document.getElementById(`area-${this.element.id}`),this.cards=this.element.cards},methods:f(c({},L({deActivateArea:B,resizeArea:j})),{downMouse(e){const{target:t,pageX:i}=e;let a=t.parentElement;const{addEventListener:o,removeEventListener:n}=window;let{offsetWidth:s}=a;const r=this.list[this.list.findIndex(A=>A.id===this.element.id)+1],d=document.getElementById(`area-${r.id}`),l=d.offsetWidth;let b=0;const g=(A,S=0)=>{let I=A+S;const z=l-S;z>100&&I>=100&&(d.style.width=z+"px",b=a.style.width=I+"px")},p=({pageX:A})=>{g(s,A-i)},W=()=>{const A=parseFloat(b.replace("px",""));this.resizeArea({id:this.element.id,sizeDiff:A-s}),n("mousemove",p),n("mouseup",W)};o("mousemove",p),o("mouseup",W)}})},Se=["id"],Ie={class:"area__header"},ze=u("div",{class:"area__handle"},[u("i",{class:"icon icon__move"},"\u2725")],-1),Te={class:"area__close"},Fe={class:"area__content"},Pe=u("hr",null,null,-1),Me=u("hr",null,null,-1),Ve=["src"];function Ne(e,t,i,a,o,n){const s=w("Editor"),r=w("Card"),d=w("draggable");return _(),h("div",{class:"area",id:`area-${i.element.id}`,style:se(`width:${i.element.pixel_width}px`)},[u("div",Ie,[ze,u("div",Te,[u("i",{class:"icon icon__close",onClick:t[0]||(t[0]=l=>e.deActivateArea(i.element.id))},"\xD7")])]),u("div",Fe,[oe(" Area "+$(i.element.id)+" ",1),i.element.hasEditor?(_(),h(x,{key:0},[Pe,E(s)],64)):y("",!0),i.element.image?(_(),h(x,{key:1},[Me,u("img",{class:"area__image",src:i.element.image,alt:"Image"},null,8,Ve)],64)):y("",!0),i.element.cards&&i.element.cards.length>0?(_(),C(d,{key:2,modelValue:o.cards,"onUpdate:modelValue":t[1]||(t[1]=l=>o.cards=l),tag:"transition-group","item-key":"id",handle:".card__draggable"},{item:V(({element:l})=>[(_(),C(r,{card:l,key:l.id},null,8,["card"]))]),_:1},8,["modelValue"])):y("",!0)]),e.list.findIndex(l=>l.id===i.element.id)+1!==e.list.length?(_(),h("div",{key:0,class:"area__divider",onMousedown:t[2]||(t[2]=(...l)=>n.downMouse&&n.downMouse(...l))},null,32)):y("",!0)],12,Se)}var Oe=v(We,[["render",Ne]]);const Be={name:"WindowComponent",data:()=>({}),components:{Area:Oe,draggable:M},created(){window.onresize=this.windowResized},computed:{list:{get(){return this.$store.state.areas.list.filter(e=>e.is_active)},set(e){this.$store.dispatch(D,e)}}},methods:c({},L({moveArea:O,windowResized:U}))},je={class:"window"};function De(e,t,i,a,o,n){const s=w("Area"),r=w("draggable");return _(),h("div",je,[E(r,{onChange:e.moveArea,handle:".area__handle",modelValue:n.list,"onUpdate:modelValue":t[0]||(t[0]=d=>n.list=d),tag:"transition-group","item-key":"uid"},{item:V(({element:d})=>[(_(),C(s,{key:d.uid,element:d},null,8,["element"]))]),_:1},8,["onChange","modelValue"])])}var Ue=v(Be,[["render",De]]);const Ge={name:"FooterComponent",methods:f(c({},L({activateArea:N,readjust:G})),{addArea(e){const{target:t}=e,i=t.getAttribute("data-area-id");this.activateArea(parseInt(i,10))}}),computed:c({},R({list:({areas:e})=>e.originalList}))},Ze={class:"footer"},Je=["disabled","data-area-id"],Xe=u("textarea",{name:"config",id:"config",cols:"30",rows:"5"},null,-1);function qe(e,t,i,a,o,n){return _(),h("footer",Ze,[(_(!0),h(x,null,ae(e.list,s=>(_(),h("button",{key:s.id,class:P(["footer__btn",s.is_active?"footer__btn--disabled":""]),disabled:s.is_active,onClick:t[0]||(t[0]=(...r)=>n.addArea&&n.addArea(...r)),"data-area-id":s.id}," Add Area "+$(s.id),11,Je))),128)),Xe,u("button",{class:"footer__btn",onClick:t[1]||(t[1]=(...s)=>e.readjust&&e.readjust(...s))},"Adjust Structure")])}var Ke=v(Ge,[["render",qe]]);const He={name:"MainComponent",components:{Window:Ue,Footer:Ke}};function Qe(e,t,i,a,o,n){const s=w("Window"),r=w("Footer");return _(),h("main",null,[E(s),E(r)])}var Ye=v(He,[["render",Qe]]);const et={name:"App",components:{Main:Ye},computed:c({},R({test:({base:e})=>e.started}))};function tt(e,t,i,a,o,n){const s=w("Main");return _(),h("div",null,[E(s)])}var it=v(et,[["render",tt]]);re(it).use(ve).mount("#app");
