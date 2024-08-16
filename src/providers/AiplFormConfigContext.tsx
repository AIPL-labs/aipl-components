import { createContext } from "react";
import type { AiplFormConfig } from "../types/AiplFormConfig";

export const AiplFormConfigContext = createContext<AiplFormConfig | undefined>(
  undefined
);
