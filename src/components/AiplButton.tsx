import { useContext, useState, type ButtonHTMLAttributes } from "react";
import { AiplFormConfigContext } from "../providers/AiplFormConfigContext";
import { createAiplClient } from "../client/AiplClients";

export const AiplButton = (
  props: ButtonHTMLAttributes<HTMLButtonElement> & {
    aiplName: string;
  }
) => {
  const { children, aiplName, ...rest } = props;
  const context = useContext(AiplFormConfigContext);
  console.log("context", context);
  console.log("aiplName", aiplName);
  const [state, setState] = useState(children);
  return (
    <button
      onClick={async () => {
        if (context) {
          const client = createAiplClient({ url: context.homeUrl });
          console.log("client", client);
          client.hello();
          client.ping();
          const auth = await client.papAuth({ accessPointId: context.papId });
          console.log("auth", auth);
          const ans = await client.ask("tell me a joke about the moon");
          console.log("ans", ans);
          setState(<>{ans}</>);
        }
      }}
      {...rest}
    >
      {state}
    </button>
  );
};
