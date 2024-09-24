import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const federationPluginConfig = federation({
  name: "host-app",
  remotes: {
    videoEditor: {
      external: "http://localhost:8083/remoteEntry.js",
      externalType: 'url',
      format: 'var'
    },
  },
  shared: ["vue"],
});
export default defineConfig({
  plugins: [vue(), react(), federationPluginConfig],
});
