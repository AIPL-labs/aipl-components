import { createContext } from "react";
import type { AiplComponentContextState } from "../type/AiplComponentContextState";

export const AiplComponentContext = createContext<
  AiplComponentContextState | undefined
>(undefined);
