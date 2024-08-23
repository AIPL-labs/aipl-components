import{t as S,c as v,a as w,e as k,j as x,i as g}from"./mockConfig-Cf5w7nTW.js";import{r as d}from"./index-uubelm5h.js";import{N as R}from"./runtime.module-gsVPOQKY.js";const T=(e=0)=>typeof e=="number"?Array.from({length:e}):Array.from(e),I={from:T},q=e=>{if(e!==void 0)return e.replace(/\[.*\]/,"")},N=({aiplName:e="",value:t})=>{if(Array.isArray(t)){const n=/\[(.*?)\]/,o=e.match(n);return o?t.includes(o[1]):!1}return S(t)},V=e=>{if(v(e))return;const t=/\[(.*?)\]/,n=e.match(t);return n?n[1]:e},b=e=>{var t=R(1);try{const n=d.useContext(w);if(!n||!n.typeInfo)throw new Error("AiplFormConfigContext is not provided, make sure to wrap your component with AiplFormConfigProvider");const{children:o,aiplName:r,onChangeValue:f,defaultValue:h,...s}=e,c=q(r)??"",i=n.componentState[c]||h||"",m=s.type==="checkbox"||s.type==="radio",p=m?N({aiplName:r,value:i}):void 0,a=d.useRef(null);return d.useEffect(()=>{if(a.current){if(m){a.current.checked=p??!1;return}a.current.value=k(i).join(", ")}},[a,p,i]),x("input",{ref:a,onChange:u=>{const y=u.target.value,l=V(r);if(m&&g(l)){const A=n.componentState[c]||[],C=new Set([...A,l]);u.target.checked||C.delete(l),n.updateComponentState({...n.componentState,[c]:I.from(C)})}else n.updateComponentState({...n.componentState,[r]:y});g(f)&&f(y,n,r),g(e.onChange)&&e.onChange(u)},defaultValue:i,defaultChecked:p,...s,children:o})}finally{t.f()}};b.__docgenInfo={description:"",methods:[],displayName:"AiplInput",props:{onChangeValue:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: string,
  contextState: AiplComponentContextState,
  aiplName: string
) => void`,signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"intersection",raw:`AiplComponentContextConfig<T> & {
  client?: AiplClient;
  componentState: Record<string, string | string[]>;
  updateComponentState: (
    componentState: Record<string, string | string[]>
  ) => void;
}`,elements:[{name:"signature",type:"object",raw:`{
  papId: string;
  homeUrl: string;
  typeInfo?: TypeInfo<T>;
}`,signature:{properties:[{key:"papId",value:{name:"string",required:!0}},{key:"homeUrl",value:{name:"string",required:!0}},{key:"typeInfo",value:{name:"TypeInfo",elements:[{name:"T"}],raw:"TypeInfo<T>",required:!1}}]}},{name:"signature",type:"object",raw:`{
  client?: AiplClient;
  componentState: Record<string, string | string[]>;
  updateComponentState: (
    componentState: Record<string, string | string[]>
  ) => void;
}`,signature:{properties:[{key:"client",value:{name:"ReturnType",elements:[{name:"createAiplClient"}],raw:"ReturnType<typeof createAiplClient>",required:!1}},{key:"componentState",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]}],raw:"Record<string, string | string[]>",required:!0}},{key:"updateComponentState",value:{name:"signature",type:"function",raw:`(
  componentState: Record<string, string | string[]>
) => void`,signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]}],raw:"Record<string, string | string[]>"},name:"componentState"}],return:{name:"void"}},required:!0}}]}}]},name:"contextState"},{type:{name:"string"},name:"aiplName"}],return:{name:"void"}}},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},aiplName:{required:!0,tsType:{name:"string"},description:""}}};export{b as A};
