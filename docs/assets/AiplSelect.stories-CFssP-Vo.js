import{j as n,m as e,A as m}from"./mockConfig-Cf5w7nTW.js";import{A as i}from"./AiplSelect-JkOdGZLY.js";import"./jsx-runtime-QvZ8i92b.js";import"./index-uubelm5h.js";import"./formatAndCapitalize-B4FHAME9.js";import"./runtime.module-gsVPOQKY.js";const f={component:i,tags:["autodocs"],argTypes:{papId:{control:{type:"text"}},aiplHomeUrl:{control:{type:"text"}}}},o={render:({papId:a,aiplHomeUrl:p,...l})=>n(m,{config:{...e,papId:a,homeUrl:p},children:n(i,{...l})}),args:{papId:e.papId,aiplHomeUrl:e.homeUrl,aiplName:"size",values:["one","two","three"]}},r={render:({papId:a,aiplHomeUrl:p,...l})=>n(m,{config:{...e,papId:a,homeUrl:p},children:n(i,{onClick:()=>{console.log("clicked")},...l})}),args:{papId:e.papId,aiplHomeUrl:e.homeUrl,aiplName:"size",values:["one","two","three"]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    papId,
    aiplHomeUrl,
    ...args
  }) => <AiplComponentProvider config={{
    ...mockConfig,
    papId,
    homeUrl: aiplHomeUrl
  }}>
      <AiplSelect {...args} />
    </AiplComponentProvider>,
  args: {
    papId: mockConfig.papId,
    aiplHomeUrl: mockConfig.homeUrl,
    aiplName: "size",
    values: ["one", "two", "three"]
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: ({
    papId,
    aiplHomeUrl,
    ...args
  }) => <AiplComponentProvider config={{
    ...mockConfig,
    papId,
    homeUrl: aiplHomeUrl
  }}>
      <AiplSelect onClick={() => {
      // playTypes(mockConfig);
      console.log("clicked");
    }} {...args} />
    </AiplComponentProvider>,
  args: {
    papId: mockConfig.papId,
    aiplHomeUrl: mockConfig.homeUrl,
    aiplName: "size",
    values: ["one", "two", "three"]
  }
}`,...r.parameters?.docs?.source}}};const C=["Example","Play"];export{o as Example,r as Play,C as __namedExportsOrder,f as default};
