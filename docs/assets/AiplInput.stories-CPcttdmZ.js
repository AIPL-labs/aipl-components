import{j as r,m as o,A as l}from"./mockConfig-Cf5w7nTW.js";import{A as m}from"./AiplInput-7Z3KzxmS.js";import"./jsx-runtime-QvZ8i92b.js";import"./index-uubelm5h.js";import"./runtime.module-gsVPOQKY.js";const I={component:m,tags:["autodocs"],argTypes:{papId:{control:{type:"text"}},aiplHomeUrl:{control:{type:"text"}}}},e={render:({papId:n,aiplHomeUrl:a,...i})=>r(l,{config:{...o,papId:n,homeUrl:a},children:r(m,{...i})}),args:{papId:o.papId,aiplHomeUrl:o.homeUrl,aiplName:"specialInstructions"}},p={render:({papId:n,aiplHomeUrl:a,...i})=>r(l,{config:{...o,papId:n,homeUrl:a},children:r(m,{...i})}),args:{papId:o.papId,aiplHomeUrl:o.homeUrl,aiplName:"toppings[pepperoni]",type:"checkbox"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: ({
    papId,
    aiplHomeUrl,
    ...args
  }) => <AiplComponentProvider config={{
    ...mockConfig,
    papId,
    homeUrl: aiplHomeUrl
  }}>
      <AiplInput {...args} />
    </AiplComponentProvider>,
  args: {
    papId: mockConfig.papId,
    aiplHomeUrl: mockConfig.homeUrl,
    aiplName: "specialInstructions"
  }
}`,...e.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    papId,
    aiplHomeUrl,
    ...args
  }) => <AiplComponentProvider config={{
    ...mockConfig,
    papId,
    homeUrl: aiplHomeUrl
  }}>
      <AiplInput {...args} />
    </AiplComponentProvider>,
  args: {
    papId: mockConfig.papId,
    aiplHomeUrl: mockConfig.homeUrl,
    aiplName: "toppings[pepperoni]",
    type: "checkbox"
  }
}`,...p.parameters?.docs?.source}}};const U=["TextExample","CheckboxExample"];export{p as CheckboxExample,e as TextExample,U as __namedExportsOrder,I as default};
