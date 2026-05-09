import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: process.env.VERCEL ? false : undefined,
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
