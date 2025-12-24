"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { routing } from "@/i18n/routing";

function stripLocale(pathname: string) {
  const parts = pathname.split("/");
  const maybeLocale = parts[1];
  if (routing.locales.includes(maybeLocale as never)) {
    return "/" + parts.slice(2).join("/");
  }
  return pathname;
}

export function LocaleSwitcher() {
  const t = useTranslations("Locale");
  const pathname = usePathname();
  const router = useRouter();

  const basePath = React.useMemo(() => stripLocale(pathname), [pathname]);

  return (
    <div className="flex flex-wrap gap-2">
      {routing.locales.map((locale) => (
        <Button
          key={locale}
          variant="outline"
          onClick={() => router.push(`/${locale}${basePath}`)}
        >
          {locale === "zh-CN"
            ? t("zhCN")
            : locale === "zh-TW"
              ? t("zhTW")
              : t("en")}
        </Button>
      ))}
    </div>
  );
}


