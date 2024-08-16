import { Colors } from "@mjtdev/engine";
import type { AppMessageMap } from "ai-worker-common";
import { EVENTS } from "./AiplClientEvents";


export const addLogListener = () => {
  const logger = (message: AppMessageMap["log"]) => {
    const logLevelColors = {
      trace: Colors.from("cyan").toString(),
      debug: Colors.from("green").lighten(0.5).toString(),
      info: Colors.from("yellow").toString(),
      error: Colors.from("red").toString(),
    };
    // console.log(safe(() => JSON.parse(message.detail)));
    const { message: text, level, extra, stack } = message;
    const color = logLevelColors[level ?? "info"];
    if (level === "error") {
      console.log(`%c${text}`, `color: ${color}`, { extra, stack });
      // AppEvents.dispatchEvent("error", message.detail);
      return;
    }
    if (extra) {
      console.log(`%c${text}`, `color: ${color}`, extra);
      // console.log(text, extra);
    } else {
      console.log(`%c${text}`, `color: ${color}`);
      // console.log(text);
    }
  };
  EVENTS.on("log", (message) => {
    logger(message.detail);
  });
};
