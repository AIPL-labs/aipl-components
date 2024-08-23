import{s as h,a as b,b as r,j as e,d as x,i as f,m as l,A as N}from"./mockConfig-Cf5w7nTW.js";import{r as m}from"./index-uubelm5h.js";import{A as y}from"./AiplButton-DTALNtJW.js";import{A as i}from"./AiplInput-7Z3KzxmS.js";import{A as s}from"./AiplRadioGroup-BJs_trpR.js";import{A as u}from"./AiplSelect-JkOdGZLY.js";import{N as v}from"./runtime.module-gsVPOQKY.js";import"./jsx-runtime-QvZ8i92b.js";import"./formatAndCapitalize-B4FHAME9.js";function k(){for(var o=arguments.length,t=new Array(o),a=0;a<o;a++)t[a]=arguments[a];return h(t)}const C=k`
  .container {
    background-color: black;
    color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
  }

  .group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    padding: 0.3em;
    margin-top: 0.5em;
  }

  .video {
    top: 1em;
    right: 1em;
    position: absolute;
    background-color: black;
    color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
  }
  .instruction {
    text-align: center;
    bottom: 10em;
    right: 10em;
    position: absolute;
  }

  h1 {
    text-align: center;
    color: #d35400;
  }

  label {
    display: block;
    margin-top: 10px;
  }

  select,
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .radio-group {
    display: flex;
    justify-content: space-around;
    margin-top: 5px;
  }

  fieldset {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: none;
  }
  fieldset label {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  button {
    background-color: #d35400;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
  }

  button:hover {
    background-color: #e67e22;
  }

  .order-summary {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: black;
    color: white;
  }
`,g=async(o,t)=>{if(!o?.client||!o?.typeInfo?.schema)return;const a=o.typeInfo.schema.$id,p=await o.client.ask({userMessage:`${t}

JSON ${a} response object ONLY! what is the current ${a} the user wants?`,toolConfig:{schema:o.typeInfo?.schema,current:o.componentState}});console.log("ans",p);const n=x(()=>JSON.parse(p));console.log("objMaybe",n),f(n)&&(console.log("objMaybe",n),o.updateComponentState(n))},d=()=>{var o=v(1);try{const[t,a]=m.useState({instruction:"random pizza"}),p=m.useContext(b);return r("div",{css:C,children:[r("div",{className:"video",children:["Video",e("video",{id:"video"})]}),r("div",{className:"instruction",children:["Instruction",e("input",{onKeyUp:n=>{n.key==="Enter"&&g(p,t.instruction)},onChange:n=>{a({instruction:n.target.value})}}),e(y,{onAction:async n=>g(n,t.instruction),aiplName:"enter",children:"Enter"})]}),r("div",{className:"container",children:[e("h1",{children:"Order Your Pizza"}),r("div",{className:"group",children:[e("label",{htmlFor:"size",children:"Choose Size"}),e(u,{aiplName:"size"})]}),r("div",{className:"group",children:[e("label",{htmlFor:"crust",children:"Choose Crust"}),e(u,{aiplName:"crust"})]}),r("div",{className:"group",children:[e("label",{children:"Cheese"}),e(s,{aiplName:"cheeseKind"})]}),r("div",{className:"toppings",children:[e("label",{children:"Choose Toppings"}),r("div",{className:"group",children:["Pepperoni",e(i,{type:"checkbox",aiplName:"toppings[pepperoni]"}),e(s,{aiplName:"peperoniSegment"})]}),r("div",{className:"group",children:["Mushrooms",e(i,{type:"checkbox",aiplName:"toppings[mushrooms]"}),e(s,{aiplName:"mushroomsSegment"})]}),r("div",{className:"group",children:["Onions",e(i,{type:"checkbox",aiplName:"toppings[onions]"}),e(s,{aiplName:"onionsSegment"})]}),r("div",{className:"group",children:["Sausage",e(i,{type:"checkbox",aiplName:"toppings[sausage]"}),e(s,{aiplName:"sausageSegment"})]}),r("div",{className:"group",children:["Bacon",e(i,{type:"checkbox",aiplName:"toppings[bacon]"}),e(s,{aiplName:"baconSegment"})]})]}),e("div",{children:"Special Instructions"}),e(i,{aiplName:"specialInstructions"}),e("button",{children:"Place Order"})]})]})}finally{o.f()}};d.__docgenInfo={description:"",methods:[],displayName:"PizzaDemo"};const D={component:d,tags:["autodocs"],argTypes:{papId:{control:{type:"text"}},aiplHomeUrl:{control:{type:"text"}}}},c={render:({papId:o,aiplHomeUrl:t,...a})=>e(N,{config:{...l,papId:o,homeUrl:t},children:e(d,{...a})}),args:{papId:l.papId,aiplHomeUrl:l.homeUrl}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    papId,
    aiplHomeUrl,
    ...args
  }) => <AiplComponentProvider config={{
    ...mockConfig,
    papId,
    homeUrl: aiplHomeUrl
  }}>
      <PizzaDemo {...args} />
    </AiplComponentProvider>,
  args: {
    papId: mockConfig.papId,
    aiplHomeUrl: mockConfig.homeUrl
    // aiplName: "exampleButton",
    // children: "click me",
  }
}`,...c.parameters?.docs?.source}}};const E=["Demo"];export{c as Demo,E as __namedExportsOrder,D as default};
