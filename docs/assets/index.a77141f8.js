var ie=Object.defineProperty,ne=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var M=(e,t,i)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,c=(e,t)=>{for(var i in t||(t={}))oe.call(t,i)&&M(e,i,t[i]);if(D)for(var i of D(t))ae.call(t,i)&&M(e,i,t[i]);return e},h=(e,t)=>ne(e,se(t));import{v as g,c as re,E as de,a as f,b as x,r as w,o as _,d as u,t as b,n as z,e as P,m as k,f as S,g as le,F as $,h as C,i as R,w as I,j as ce,T as _e,k as ue,l as pe,p as me,q as he}from"./vendor.8fa25795.js";const fe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}};fe();const ge=()=>({started:"yes"}),we={},Ae={},ve={};var Ee={actions:Ae,mutations:ve,state:ge,getters:we};const V="activate_area",O="move_area",N="deactivate_area",B="resizing_AREA",U="update_list",G="window_was_resized",J="READJUST_AREAS",Z="fold_card",q="update_cards;",L="area_toggle",X="rearrange_area",K="set_list",H="resize_area",Q="recalibrate_sizes",Y="redistribute_areas",ee="set_card_fold",te="set_cards",xe=()=>({list:[],originalList:[{name:"Area 1",original_position:1,current_position:1,id:1,is_active:!1,width:0,pixel_width:0,uid:g(),hasEditor:!1,cards:[{title:"Card A",content:"Card A",id:g(),fold_status:!1},{title:"Card B",content:"Card B",id:g(),fold_status:!1},{title:"Card C",content:"Card C",id:g(),fold_status:!1}]},{name:"Area 2",original_position:2,current_position:3,id:2,is_active:!1,width:0,pixel_width:0,uid:g(),hasEditor:!1},{name:"Area 3",original_position:3,current_position:3,id:3,is_active:!1,width:0,pixel_width:0,uid:g(),hasEditor:!0},{name:"Area 4",original_position:4,current_position:4,id:4,is_active:!1,width:0,pixel_width:0,uid:g(),hasEditor:!1},{name:"Area 5",original_position:5,current_position:5,id:5,is_active:!1,width:0,pixel_width:0,uid:g(),hasEditor:!1,image:"https://i.imgur.com/GL7igry.png"}],json:""}),ye={},Ce={[q]({commit:e},{areaId:t,cards:i}){e(te,{areaId:t,cards:i})},[Z]({commit:e},{areaId:t,id:i,status:o}){e(ee,{areaId:t,id:i,status:o})},[V]({commit:e},t=null){let i=null;return typeof t=="number"?e(L,{areaId:t,show:!0}):i="`areaId` needs to be a number.",i},[N]({commit:e},t=null){let i=null;return typeof t=="number"?e(L,{areaId:t,show:!1}):i="`areaId` needs to be a number.",i},[O]({commit:e},{oldIndex:t,newIndex:i}){e(X,{oldIndex:t,newIndex:i})},[U]({commit:e},t){e(K,t)},[B]({commit:e},{id:t,sizeDiff:i}){e(H,{id:t,sizeDiff:i})},[G]({commit:e}){e(Q)},[J]({commit:e}){e(Y)}},be=e=>e.map(t=>{const i=window.innerWidth;return t.pixel_width===0&&(t.pixel_width=100),t.width=t.pixel_width/i*100,c({},t)}),A=e=>{let t=e.map(i=>{const{original_position:o,current_position:s,is_active:n,width:a,pixel_width:d,id:r,cards:l=null}=i,v={id:r,original_position:o,current_position:s,is_active:n,width:a,pixel_width:d};return l&&(v.cards=l.map((m,p)=>h(c({},m),{position:p+1}))),v});return t=t.reduce((i,o)=>(i[`area${o.id}`]=o,i),{}),JSON.stringify(t)},$e={[L](e,{areaId:t,show:i}){const{originalList:o,list:s}=e;let n=s;if(i===!0){const d=o.find(m=>m.id===t),l=parseFloat((100/(n.length+1)).toFixed(2)),v=100-l;if(n=n.map(m=>{const p=parseFloat((v*m.width/100).toFixed(2));return h(c({},m),{width:p})}),d.is_active=!0,d.width=l,d.original_position<n.length)n.splice(d.original_position-1,0,d);else{let m=-1;for(let p=0;p<length;p+=1)n[p].original_position>d.original_position&&p>0&&n[p].original_position<n[p-1].original_position&&(m=p);m!==-1?n.splice(m,0,d):n.push(d)}}else{e.originalList=o.map(r=>h(c({},r),{is_active:r.id===t?!1:r.is_active,uid:g()})),n=s.filter(r=>r.id!==t);const d=n.reduce((r,l)=>r+l.width,0);n=n.map(r=>h(c({},r),{width:r.width/d*100}))}const a=window.innerWidth;n=n.map((d,r)=>h(c({},d),{current_position:r+1,pixel_width:a/(100/d.width)})),e.list=n,e.json=A(e.list)},[H](e,{id:t,sizeDiff:i}){const{list:o}=e,s=o.findIndex(a=>a.id===t);o[s].pixel_width+=i,o[s+1].pixel_width-=i;const n=be(o);e.list=n,e.json=A(e.list)},[X](e){const{list:t}=e;e.list=t.map((i,o)=>h(c({},i),{current_position:o+1})),e.json=A(e.list)},[K](e,t){e.list=t.map((i,o)=>h(c({},i),{current_position:o+1})),e.json=A(e.list)},[Q](e){const t=window.innerWidth;e.list=e.list.map((i,o)=>h(c({},i),{current_position:o+1,pixel_width:t/(100/i.width)})),e.json=A(e.list)},[Y](e){const i=parseFloat((100/e.list.length).toFixed(2)),o=window.innerWidth;e.list=e.list.map((s,n)=>h(c({},s),{current_position:n+1,width:i,pixel_width:o/(100/i)})),e.json=A(e.list)},[ee](e,{areaId:t,id:i,status:o}){const s=e.list.findIndex(a=>a.id===t),n=e.list[s].cards.findIndex(a=>a.id===i);e.list[s].cards[n].fold_status=o,e.json=A(e.list)},[te](e,{areaId:t,cards:i}){const o=e.list.findIndex(s=>s.id===t);e.list[o].cards=i,e.json=A(e.list)}};var Re={state:xe,actions:Ce,getters:ye,mutations:$e},Ie=re({modules:{base:Ee,areas:Re}}),y=(e,t)=>{const i=e.__vccOpts||e;for(const[o,s]of t)i[o]=s;return i};const Le={name:"TinyEditor",components:{editor:de}},ke={style:{width:"100%"}};function Se(e,t,i,o,s,n){const a=w("editor",!0);return _(),f("div",ke,[x(a,{"api-key":"no-api-key",init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor |            alignleft aligncenter alignright alignjustify |            bullist numlist outdent indent | removeformat | help"}})])}var Te=y(Le,[["render",Se]]);const We={name:"AreaCard",props:{card:Object},data(){return{collapsed:!1}},methods:{collapse(){this.$emit("fold",{id:this.card.id,status:!this.card.fold_status})}}},je={class:"card"},Fe={class:"card__header"},De={class:"card__draggable"};function Me(e,t,i,o,s,n){return _(),f("div",je,[u("div",Fe,[u("span",De,"\u2630 "+b(i.card.title),1),u("span",{class:"card__fold",onClick:t[0]||(t[0]=(...a)=>n.collapse&&n.collapse(...a))},"\u2193")]),u("div",{class:z(["card__content",i.card.fold_status?"card__content--hide":""])},b(i.card.content),3)])}var ze=y(We,[["render",Me]]);const Pe={name:"AreaComponent",data(){return{area:null,containerWidth:0,cards:[]}},components:{Editor:Te,Card:ze,draggable:P},props:{element:Object},computed:c({},k({list:({areas:e})=>e.list})),mounted(){this.area=document.getElementById(`area-${this.element.id}`),this.cards=this.element.cards},methods:h(c({},S({deActivateArea:N,resizeArea:B,foldCard:Z,updateCards:q})),{downMouse(e){const{target:t,pageX:i}=e;let o=t.parentElement;const{addEventListener:s,removeEventListener:n}=window;let{offsetWidth:a}=o;const d=this.list[this.list.findIndex(E=>E.id===this.element.id)+1],r=document.getElementById(`area-${d.id}`),l=r.offsetWidth;let v=0;const m=(E,W=0)=>{let j=E+W;const F=l-W;F>100&&j>=100&&(r.style.width=F+"px",v=o.style.width=j+"px")},p=({pageX:E})=>{m(a,E-i)},T=()=>{const E=parseFloat(v.replace("px",""));this.resizeArea({id:this.element.id,sizeDiff:E-a}),n("mousemove",p),n("mouseup",T)};s("mousemove",p),s("mouseup",T)},cardsMoved(){this.updateCards({areaId:this.element.id,cards:this.cards})},cardFold({id:e,status:t}){this.foldCard({areaId:this.element.id,id:e,status:t})}})},Ve=["id"],Oe={class:"area__header"},Ne=u("div",{class:"area__handle"},[u("i",{class:"icon icon__move"},"\u2725")],-1),Be={class:"area__close"},Ue={class:"area__content"},Ge=u("hr",null,null,-1),Je=u("hr",null,null,-1),Ze=["src"];function qe(e,t,i,o,s,n){const a=w("Editor"),d=w("Card"),r=w("draggable");return _(),f("div",{class:"area",id:`area-${i.element.id}`,style:ce(`width:${i.element.pixel_width}px`)},[u("div",Oe,[Ne,u("div",Be,[u("i",{class:"icon icon__close",onClick:t[0]||(t[0]=l=>e.deActivateArea(i.element.id))},"\xD7")])]),u("div",Ue,[le(" Area "+b(i.element.id)+" ",1),i.element.hasEditor?(_(),f($,{key:0},[Ge,x(a)],64)):C("",!0),i.element.image?(_(),f($,{key:1},[Je,u("img",{class:"area__image",src:i.element.image,alt:"Image"},null,8,Ze)],64)):C("",!0),i.element.cards&&i.element.cards.length>0?(_(),R(r,{key:2,onChange:n.cardsMoved,modelValue:s.cards,"onUpdate:modelValue":t[1]||(t[1]=l=>s.cards=l),tag:"transition-group","item-key":"id",handle:".card__draggable"},{item:I(({element:l})=>[(_(),R(d,{onFold:n.cardFold,card:l,key:l.id},null,8,["onFold","card"]))]),_:1},8,["onChange","modelValue"])):C("",!0)]),e.list.findIndex(l=>l.id===i.element.id)+1!==e.list.length?(_(),f("div",{key:0,class:"area__divider",onMousedown:t[2]||(t[2]=(...l)=>n.downMouse&&n.downMouse(...l))},null,32)):C("",!0)],12,Ve)}var Xe=y(Pe,[["render",qe]]);const Ke={name:"WindowComponent",data:()=>({}),components:{Area:Xe,draggable:P},created(){window.onresize=this.windowResized},computed:{list:{get(){return this.$store.state.areas.list.filter(e=>e.is_active)},set(e){this.$store.dispatch(U,e)}}},methods:c({},S({moveArea:O,windowResized:G}))},He={class:"window"};function Qe(e,t,i,o,s,n){const a=w("Area"),d=w("draggable");return _(),f("div",He,[x(d,{onChange:e.moveArea,handle:".area__handle",modelValue:n.list,"onUpdate:modelValue":t[0]||(t[0]=r=>n.list=r),tag:"transition-group","item-key":"uid"},{item:I(({element:r})=>[x(_e,null,{default:I(()=>[r?(_(),R(a,{key:r.uid,element:r},null,8,["element"])):C("",!0)]),_:2},1024)]),_:1},8,["onChange","modelValue"])])}var Ye=y(Ke,[["render",Qe]]);const et={name:"FooterComponent",methods:h(c({},S({activateArea:V,readjust:J})),{addArea(e){const{target:t}=e,i=t.getAttribute("data-area-id");this.activateArea(parseInt(i,10))}}),computed:c({},k({list:({areas:e})=>e.originalList,jsonText:({areas:e})=>e.json}))},tt={class:"footer"},it=["disabled","data-area-id"];function nt(e,t,i,o,s,n){return _(),f("footer",tt,[(_(!0),f($,null,ue(e.list,a=>(_(),f("button",{key:a.id,class:z(["footer__btn",a.is_active?"footer__btn--disabled":""]),disabled:a.is_active,onClick:t[0]||(t[0]=(...d)=>n.addArea&&n.addArea(...d)),"data-area-id":a.id}," Add Area "+b(a.id),11,it))),128)),pe(u("textarea",{readonly:"",name:"config",id:"config",cols:"30",rows:"5","onUpdate:modelValue":t[1]||(t[1]=a=>e.jsonText=a)},`
    `,512),[[me,e.jsonText]]),u("button",{class:"footer__btn",onClick:t[2]||(t[2]=(...a)=>e.readjust&&e.readjust(...a))},"Adjust Structure")])}var st=y(et,[["render",nt]]);const ot={name:"MainComponent",components:{Window:Ye,Footer:st}};function at(e,t,i,o,s,n){const a=w("Window"),d=w("Footer");return _(),f("main",null,[x(a),x(d)])}var rt=y(ot,[["render",at]]);const dt={name:"App",components:{Main:rt},computed:c({},k({test:({base:e})=>e.started}))};function lt(e,t,i,o,s,n){const a=w("Main");return _(),f("div",null,[x(a)])}var ct=y(dt,[["render",lt]]);he(ct).use(Ie).mount("#app");
