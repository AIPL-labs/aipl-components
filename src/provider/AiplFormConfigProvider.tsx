import { useEffect, useState, type ReactNode } from "react";
import {
  type AiplComponentContextConfig,
  type AiplComponentContextRealizedConfig,
} from "../type/AiplComponentContextConfig.ts";
import { AiplFormConfigContext } from "./AiplFormConfigContext.tsx";
import { createAiplClient, type AiplClient } from "../client/AiplClients.ts";
import { isDefined, isUndefined } from "@mjtdev/engine";
import type { TypeInfoSchema } from "@mjtdev/engine/packages/mjtdev-object";
import { signal, type Signal } from "@preact/signals-react";

let aiplClient: AiplClient | undefined = undefined;

export const schemaToSingals = (schema: TypeInfoSchema | undefined) => {
  console.log("schemaToSingals", schema);
  if (isUndefined(schema)) {
    return {};
  }
  const properties = schema.properties as Record<string, TypeInfoSchema>;
  console.log("properties", properties);
  const result: Record<string, Signal<string | undefined>> = {};
  for (const key in properties) {
    console.log("key", key);
    result[key] = signal<string>();
  }
  return result;
};

export const AiplFormConfigProvider = ({
  config,
  children,
}: {
  config: AiplComponentContextConfig;
  children: ReactNode;
}) => {
  const [state, setState] = useState<AiplComponentContextRealizedConfig>({
    ...config,
    componentState: {},
    updateComponentState: (componentState) => {
      console.log("updateComponentState", componentState);
      setState((s) => ({ ...s, componentState }));
    },
  });
  useEffect(() => {
    if (isDefined(aiplClient)) {
      return setState((s) => ({ ...s, client: aiplClient }));
    }
    const client = createAiplClient({ url: config.homeUrl });
    aiplClient = client;
    setState((s) => ({ ...s, client: aiplClient }));
    client.papAuth({ accessPointId: config.papId }).then((auth) => {
      console.log("auth", auth);
    });
  }, [config]);
  console.log("AiplFormConfigProvider", state);
  return (
    <AiplFormConfigContext.Provider value={state}>
      {children}
    </AiplFormConfigContext.Provider>
  );
};
