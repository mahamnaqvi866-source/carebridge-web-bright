import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      retryCount: 2,
    },
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/services" },
      { path: "/fleet" },
      { path: "/contact" },
    ],
  },
});
