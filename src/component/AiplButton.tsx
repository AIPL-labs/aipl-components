import { useContext, type ButtonHTMLAttributes } from "react";
import { AiplComponentContext } from "../provider/AiplComponentContext";
import type { AiplComponentContextState } from "../type/AiplComponentContextState";

export const AiplButton = (
  props: ButtonHTMLAttributes<HTMLButtonElement> & {
    aiplName: string;
    onAction?: (
      context: AiplComponentContextState,
      aiplName: string
    ) => void;
  }
) => {
  const { children, aiplName, onAction, ...rest } = props;
  const context = useContext(AiplComponentContext);

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
