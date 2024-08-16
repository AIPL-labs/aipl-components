import { type ReactNode } from "react";
import { type AiplFormConfig } from "../types/AiplFormConfig.ts";
import { AiplFormConfigContext } from "./AiplFormConfigContext.tsx";

export const AiplFormConfigProvider = ({
  config,
  children,
}: {
  config: AiplFormConfig;
  children: ReactNode;
}) => {
  return (
    <AiplFormConfigContext.Provider value={config}>
      {children}
    </AiplFormConfigContext.Provider>
  );
};
