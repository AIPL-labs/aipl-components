import{c,j as t,m as r,A as i}from"./mockConfig-Cf5w7nTW.js";import{A as s}from"./AiplButton-DTALNtJW.js";import"./jsx-runtime-QvZ8i92b.js";import"./index-uubelm5h.js";const m=async e=>{console.log("playAsk"),console.log("config",e);const o=e.client;if(c(o)){console.log("client is undefined");return}if(console.log("client",o),!e.typeInfo){console.log("config.typeInfo is undefined");return}const n=e.typeInfo.schema.$id,a=await o.ask({userMessage:`JSON ${n} response object ONLY! what is the current ${n} the user wants?`,toolConfig:{schema:e.typeInfo?.schema}});return console.log("ans",a),a},h={component:s,tags:["autodocs"],argTypes:{papId:{control:{type:"text"}},aiplHomeUrl:{control:{type:"text"}}}},p={render:({papId:e,aiplHomeUrl:o,...n})=>t(i,{config:{...r,papId:e,homeUrl:o},children:t(s,{...n})}),args:{papId:r.papId,aiplHomeUrl:r.homeUrl,aiplName:"exampleButton",children:"click me"}},l={render:({papId:e,aiplHomeUrl:o,...n})=>t(i,{config:{...r,papId:e,homeUrl:o},children:t(s,{onAction:a=>{m(a)},...n})}),args:{papId:r.papId,aiplHomeUrl:r.homeUrl,aiplName:"exampleButton",children:"play"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    papId,
    aiplHomeUrl,
    ...args
  }) => <AiplComponentProvider config={{
    ...mockConfig,
    papId,
    homeUrl: aiplHomeUrl
  }}>
      <AiplButton {...args} />
    </AiplComponentProvider>,
  args: {
    papId: mockConfig.papId,
    aiplHomeUrl: mockConfig.homeUrl,
    aiplName: "exampleButton",
    children: "click me"
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ({
    papId,
    aiplHomeUrl,
    ...args
  }) => <AiplComponentProvider config={{
    ...mockConfig,
    papId,
    homeUrl: aiplHomeUrl
  }}>
      <AiplButton onAction={context => {
      playAsk(context);
    }} {...args} />
    </AiplComponentProvider>,
  args: {
    papId: mockConfig.papId,
    aiplHomeUrl: mockConfig.homeUrl,
    aiplName: "exampleButton",
    children: "play"
  }
}`,...l.parameters?.docs?.source}}};const U=["Example","Play"];export{p as Example,l as Play,U as __namedExportsOrder,h as default};
