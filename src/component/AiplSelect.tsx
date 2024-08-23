import { TypeBoxes } from "@mjtdev/engine";
import { useContext, type ButtonHTMLAttributes } from "react";
import { formatAndCapitalize } from "../common/formatAndCapitalize";
import { AiplFormConfigContext } from "../provider/AiplFormConfigContext";

export const AiplSelect = (
  props: ButtonHTMLAttributes<HTMLSelectElement> & {
    onChange?: (value: string) => void;
    defaultValue?: string;
    values?: Record<string, string> | string[];
    aiplName: string;
    formatter?: (value: string) => string;
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
  const items = entries.map((entry, i) => (
    <option key={i} value={entry[0]}>
      {formatter(entry[1])}
    </option>
  ));

  const value = context.componentState[aiplName] || defaultValue;
  return (
    <select value={value} {...rest}>
      {items}
    </select>
  );
};
