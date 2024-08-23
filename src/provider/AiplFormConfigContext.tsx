import { createContext } from "react";
import type { AiplComponentContextRealizedConfig } from "../type/AiplComponentContextConfig";

export const AiplFormConfigContext = createContext<
  AiplComponentContextRealizedConfig | undefined
>(undefined);
