import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["zh-CN", "zh-TW", "en"] as const,
  defaultLocale: "zh-CN",
  localePrefix: "always",
});


