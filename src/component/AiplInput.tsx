import { toBoolean } from "@mjtdev/engine";
import { type InputHTMLAttributes, useContext } from "react";
import { AiplFormConfigContext } from "../provider/AiplFormConfigContext";
import type { AiplComponentContextRealizedConfig } from "../type/AiplComponentContextConfig";

export const isChecked = ({
  aiplName = "",
  value,
}: {
  aiplName: string | undefined; // like "toppings[pepperoni]" or "pepperoni"
  value: undefined | string | string[]; // like "true" or ["pepperoni", "mushrooms"]
}): boolean => {
  if (Array.isArray(value)) {
    const aiplNameWithoutBrackets = aiplName.replace(/\[.*\]/, "");
    const regex = /\[(.*?)\]/;
    const match = aiplName.match(regex);

    if (match) {
      const checked = value.includes(match[1]);
      return checked;
    }
    return false;
  }
  return toBoolean(value);
};

export const toTopAiplName = (aiplName: string | undefined) => {
  if (aiplName === undefined) {
    return undefined;
  }
  return aiplName.replace(/\[.*\]/, "");
};

export const AiplInput = (
  props: InputHTMLAttributes<HTMLInputElement> & {
    onChangeValue?: (
      value: string,
      context: AiplComponentContextRealizedConfig,
      aiplName: string
    ) => void;
    defaultValue?: string;
    aiplName: string;
  }
) => {
  const context = useContext(AiplFormConfigContext);
  if (!context || !context.typeInfo) {
    throw new Error(
      "AiplFormConfigContext is not provided, make sure to wrap your component with AiplFormConfigProvider"
    );
  }
  const { children, aiplName, onChangeValue, defaultValue, ...rest } = props;

  const topAiplName = toTopAiplName(aiplName) ?? "";

  const value = context.componentState[topAiplName] || defaultValue || "";
  const isCheckable = rest.type === "checkbox" || rest.type === "radio";
  const checked = isCheckable ? isChecked({ aiplName, value }) : undefined;
  return (
    <input
      onChange={(evt) => {
        props.onChangeValue &&
          props.onChangeValue(evt.target.value, context, aiplName);
        return props.onChange && props.onChange(evt);
      }}
      defaultValue={value}
      checked={checked}
      {...rest}
    >
      {children}
    </input>
  );
};
