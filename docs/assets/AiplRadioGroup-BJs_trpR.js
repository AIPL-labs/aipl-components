import{a as v,T as C,b as w,j as r,i as R}from"./mockConfig-Cf5w7nTW.js";import{r as A}from"./index-uubelm5h.js";import{f as T}from"./formatAndCapitalize-B4FHAME9.js";import{N as S}from"./runtime.module-gsVPOQKY.js";const h=s=>{var m=S(1);try{const e=A.useContext(v);if(!e||!e.typeInfo)throw new Error("AiplFormConfigContext is not provided, make sure to wrap your component with AiplFormConfigProvider");const{typeInfo:p}=e,{children:x,aiplName:t,onChangeValue:a,defaultValue:l,values:q=[],formatter:g=T,...u}=s,c=C.schemaToAnyOfs(p.schema.properties[t]).map(n=>[n,n]),d=e.componentState[t]||l,f=c.map((n,i)=>w("label",{children:[r("input",{checked:d===n[0],name:t,type:"radio",value:n[0],onChange:y=>{const o=y.target.value;e.updateComponentState({...e.componentState,[t]:o}),R(a)&&a(o,e,t)}},i),r("span",{children:g(n[1])})]},i));return r("fieldset",{...u,children:f})}finally{m.f()}};h.__docgenInfo={description:"",methods:[],displayName:"AiplRadioGroup",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"union",raw:"Record<string, string> | string[]",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},aiplName:{required:!0,tsType:{name:"string"},description:""},formatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"ReactNode"}}},description:""},onChangeValue:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
) => void`,signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]}],raw:"Record<string, string | string[]>"},name:"componentState"}],return:{name:"void"}},required:!0}}]}}]},name:"contextState"},{type:{name:"string"},name:"aiplName"}],return:{name:"void"}}},description:""}}};export{h as A};
