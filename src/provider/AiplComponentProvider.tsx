import { isDefined } from "@mjtdev/engine";
import { useEffect, useState, type ReactNode } from "react";
import { createAiplClient, type AiplClient } from "../client/AiplClients.ts";
import {
  type AiplComponentContextConfig,
  type AiplComponentContextState,
} from "../type/AiplComponentContextState.ts";
import { AiplComponentContext } from "./AiplComponentContext.tsx";

let aiplClient: AiplClient | undefined = undefined;

export const AiplComponentProvider = ({
  config,
  children,
}: {
  config: AiplComponentContextConfig;
  children: ReactNode;
}) => {
  const [state, setState] = useState<AiplComponentContextState>({
    ...config,
    componentState: {},
    updateComponentState: (componentState) => {
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
    client.papAuth({ accessPointId: config.papId }).then(() => {
      console.log("aipl-client authorized");
    });
  }, [config]);
  return (
    <AiplComponentContext.Provider value={state}>
      {children}
    </AiplComponentContext.Provider>
  );
};
