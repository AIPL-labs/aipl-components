import{a as f,T as y,j as s,i as o}from"./mockConfig-Cf5w7nTW.js";import{r as C}from"./index-uubelm5h.js";import{f as v}from"./formatAndCapitalize-B4FHAME9.js";import{N as w}from"./runtime.module-gsVPOQKY.js";const S=a=>{var m=w(1);try{const n=C.useContext(f);if(!n||!n.typeInfo)throw new Error("AiplFormConfigContext is not provided, make sure to wrap your component with AiplFormConfigProvider");const{typeInfo:p}=n,{children:A,aiplName:t,onChangeValue:i,defaultValue:g,values:T=[],formatter:l=v,...u}=a,c=y.schemaToAnyOfs(p.schema.properties[t]).map(e=>[e,e]).map((e,r)=>s("option",{value:e[0],children:l(e[1])},r)),d=n.componentState[t]||g;return s("select",{onChange:e=>{const r=e.target.value;n.updateComponentState({...n.componentState,[t]:r}),o(i)&&i(r,n,t),o(a.onChange)&&a.onChange(e)},value:d,...u,children:c})}finally{m.f()}};S.__docgenInfo={description:"",methods:[],displayName:"AiplSelect",props:{onChangeValue:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
) => void`,signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]}],raw:"Record<string, string | string[]>"},name:"componentState"}],return:{name:"void"}},required:!0}}]}}]},name:"contextState"},{type:{name:"string"},name:"aiplName"}],return:{name:"void"}}},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"union",raw:"Record<string, string> | string[]",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},aiplName:{required:!0,tsType:{name:"string"},description:""},formatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:""}}};export{S as A};
