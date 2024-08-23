import { TypeBoxes } from "@mjtdev/engine";
import { useContext, type ButtonHTMLAttributes, type ReactNode } from "react";
import { formatAndCapitalize } from "../common/formatAndCapitalize";
import { AiplFormConfigContext } from "../provider/AiplFormConfigContext";

export const AiplRadioGroup = (
  props: ButtonHTMLAttributes<HTMLFieldSetElement> & {
    onChange?: (value: string) => void;
    defaultValue?: string;
    values?: Record<string, string> | string[];
    aiplName: string;
    formatter?: (value: string) => ReactNode;
  }
) => {
  const context = useContext(AiplFormConfigContext);
  if (!context || !context.typeInfo) {
    throw new Error(
      "AiplFormConfigContext is not provided, make sure to wrap your component with AiplFormConfigProvider"
    );
  }
  const { typeInfo } = context;
  const {
    children,
    aiplName,
    onChange,
    defaultValue,
    values = [],
    formatter = formatAndCapitalize,
    ...rest
  } = props;
  const optionValues = TypeBoxes.schemaToAnyOfs(
    typeInfo.schema.properties[aiplName]
  );
  const entries = optionValues.map((v) => [v, v] as const);

  const value = context.componentState[aiplName] || defaultValue;
  const items = entries.map((entry, i) => (
    <label key={i}>
      <input
        checked={value === entry[0]}
        name={aiplName}
        type="radio"
        key={i}
        value={entry[0]}
      />
      <span>{formatter(entry[1])}</span>
    </label>
  ));
  return <fieldset {...rest}>{items}</fieldset>;
};
