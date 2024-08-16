import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    // "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
    enableCrashReports: false, // 👈 Disables crash reports
  },
  // async viteFinal(config) {
  //   // Merge custom configuration into the default config
  //   const { mergeConfig } = await import("vite");

  //   return mergeConfig(config, {
  //     // Add dependencies to pre-optimization
  //     optimizeDeps: {
  //       include: ["storybook-dark-mode"],
  //     },
  //   });
  // },
};
export default config;
