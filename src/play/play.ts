import { isUndefined, safe, TypeBoxes } from "@mjtdev/engine";
import { createAiplClient } from "../client/AiplClients";
import type {
  AiplComponentContextConfig,
  AiplComponentContextRealizedConfig,
} from "../type/AiplComponentContextConfig";

export const playConnect = async (config: AiplComponentContextConfig) => {
  const client = createAiplClient({ url: config.homeUrl });
  console.log("client", client);
  client.hello();
  client.ping();
  const auth = await client.papAuth({ accessPointId: config.papId });
  console.log("auth", auth);
  const ans = await client.ask({
    userMessage: "tell me a joke about the moon",
  });
  console.log("ans", ans);
  return ans;
};

export const jsonTextToObject = <T>(text: string) => {
  const filteredText = extractJsonText(text);
  console.log("filteredText", filteredText);
  return safe(() => JSON.parse(filteredText)) as T | undefined;
};

export const extractJsonText = (markdown: string): string => {
  const flexibleJsonRegex =
    /```(?:json)?([\s\S]*?)```|```([\s\S]*?)(?:```)?|([\s\S]+)/;
  const match = flexibleJsonRegex.exec(markdown);

  if (match) {
    return (match[1] || match[2] || match[3]).trim();
  }

  return "";
};

export const playAsk = async (config: AiplComponentContextRealizedConfig) => {
  console.log("playAsk");
  // const client = createAiplClient({ url: config.homeUrl });
  console.log("config", config);
  const client = config.client;
  if (isUndefined(client)) {
    console.log("client is undefined");
    return;
  }
  console.log("client", client);
  // client.hello();
  // client.ping();
  // const auth = await client.papAuth({ accessPointId: config.papId });
  // console.log("auth", auth);
  if (!config.typeInfo) {
    console.log("config.typeInfo is undefined");
    return;
  }
  const typeName = config.typeInfo.schema.$id;
  const ans = await client.ask({
    userMessage: `JSON ${typeName} response object ONLY! what is the current ${typeName} the user wants?`,
    toolConfig: { schema: config.typeInfo?.schema },
  });
  console.log("ans", ans);

  return ans;
};

export const playTypes = async (config: AiplComponentContextConfig) => {
  const typeInfo = TypeBoxes.createTypeInfo((Type) => {
    return Type.Object({
      name: Type.String(),
      age: Type.Number(),
      isStudent: Type.Boolean(),
    });
  });
  console.log("typeInfo", typeInfo);
  console.log("typeInfo.schema", JSON.stringify(typeInfo.schema));

  const typeInfo2 = TypeBoxes.schemaToTypeInfo(typeInfo.schema);

  console.log("typeInfo2", typeInfo2);
};
