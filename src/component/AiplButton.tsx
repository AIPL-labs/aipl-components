import { useContext, type ButtonHTMLAttributes } from "react";
import { AiplFormConfigContext } from "../provider/AiplFormConfigContext";
import type { AiplComponentContextRealizedConfig } from "../type/AiplComponentContextConfig";

export const AiplButton = (
  props: ButtonHTMLAttributes<HTMLButtonElement> & {
    aiplName: string;
    onAction?: (
      context: AiplComponentContextRealizedConfig,
      aiplName: string
    ) => void;
  }
) => {
  const { children, aiplName, onAction, ...rest } = props;
  const context = useContext(AiplFormConfigContext);

  return (
    <button
      onClick={async () => {
        onAction && context && onAction(context, aiplName);
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
