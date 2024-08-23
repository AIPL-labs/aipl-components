import{a as o,j as s}from"./mockConfig-Cf5w7nTW.js";import{r as m}from"./index-uubelm5h.js";const p=t=>{const{children:r,aiplName:i,onAction:e,...a}=t,n=m.useContext(o);return s("button",{onClick:async()=>{e&&n&&e(n,i)},...a,children:r})};p.__docgenInfo={description:"",methods:[],displayName:"AiplButton",props:{aiplName:{required:!0,tsType:{name:"string"},description:""},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  context: AiplComponentContextState,
  aiplName: string
) => void`,signature:{arguments:[{type:{name:"intersection",raw:`AiplComponentContextConfig<T> & {
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
) => void`,signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]}],raw:"Record<string, string | string[]>"},name:"componentState"}],return:{name:"void"}},required:!0}}]}}]},name:"context"},{type:{name:"string"},name:"aiplName"}],return:{name:"void"}}},description:""}}};export{p as A};
