import React, { useContext, useState } from "react";
import "./pizza-demo.css";
import { AiplInput } from "../component/AiplInput";
import { AiplButton } from "../component/AiplButton";
import { isDefined, Reacts, safe } from "@mjtdev/engine";
import { effect } from "@preact/signals-react";
import { AiplRadioGroup } from "../component/AiplRadioGroup";
import { AiplSelect } from "../component/AiplSelect";
import type { AiplComponentContextRealizedConfig } from "../type/AiplComponentContextConfig";
import { AiplFormConfigContext } from "../provider/AiplFormConfigContext";

export const onEnter = async (
  config: AiplComponentContextRealizedConfig | undefined,
  instruction: string
) => {
  if (!config?.client || !config?.typeInfo?.schema) {
    return;
  }
  const typeName = config.typeInfo.schema.$id;

  const ans = await config.client.ask({
    userMessage: `${instruction}
              
              
              JSON ${typeName} response object ONLY! what is the current ${typeName} the user wants?`,
    toolConfig: { schema: config.typeInfo?.schema },
  });
  console.log("ans", ans);
  const objMaybe = safe(() => JSON.parse(ans));
  console.log("objMaybe", objMaybe);
  if (isDefined(objMaybe)) {
    console.log("objMaybe", objMaybe);
    config.updateComponentState(objMaybe);
  }
};

export const PizzaDemo: React.FC = () => {
  const [state, setState] = useState({ instruction: "random pizza" });
  const context = useContext(AiplFormConfigContext);
  return (
    <div>
      <div className="video">
        Video
        <video id="video" />
      </div>
      <div className="instruction">
        Instruction
        <input
          onKeyUp={(evt) => {
            if (evt.key === "Enter") {
              onEnter(context, state.instruction);
              // setState({ instruction: evt.target.value });
            }
          }}
          onChange={(evt) => {
            setState({ instruction: evt.target.value });
          }}
        />
        <AiplButton
          onAction={async (config) => {
            return onEnter(config, state.instruction);
          }}
          aiplName={"enter"}
        >
          Enter
        </AiplButton>
      </div>
      <div className="container">
        <h1>Order Your Pizza</h1>
        <div className="group">
          <label htmlFor="size">Choose Size</label>
          <AiplSelect aiplName="size" />
        </div>
        <div className="group">
          <label htmlFor="crust">Choose Crust</label>
          <AiplSelect aiplName="crust" />
        </div>
        <div className="group">
          <label>Cheese</label>
          <AiplRadioGroup aiplName="cheeseKind" />
        </div>
        <div className="toppings">
          <label>Choose Toppings</label>
          <div className="group">
            Pepperoni
            <AiplInput type="checkbox" aiplName="toppings[pepperoni]" />
            <AiplRadioGroup aiplName="peperoniSegment" />
          </div>
          <div className="group">
            Mushrooms
            <AiplInput type="checkbox" aiplName="toppings[mushrooms]" />
            <AiplRadioGroup aiplName="mushroomsSegment" />
          </div>
          <div className="group">
            Onions
            <AiplInput type="checkbox" aiplName="toppings[onions]" />
            <AiplRadioGroup aiplName="onionsSegment" />
          </div>
          <div className="group">
            Sausage
            <AiplInput type="checkbox" aiplName="toppings[sausage]" />
            <AiplRadioGroup aiplName="sausageSegment" />
          </div>
          <div className="group">
            Bacon
            <AiplInput type="checkbox" aiplName="toppings[bacon]" />
            <AiplRadioGroup aiplName="baconSegment" />
          </div>
        </div>
        <div>Special Instructions</div>

        <AiplInput aiplName="specialInstructions" />
        <button>Place Order</button>
      </div>
    </div>
  );
};
