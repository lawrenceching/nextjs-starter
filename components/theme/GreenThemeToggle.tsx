"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { useGreenTheme } from "./ThemeProvider";

export function GreenThemeToggle() {
  const t = useTranslations("Theme");
  const { enabled, toggle } = useGreenTheme();

  return (
    <Button variant={enabled ? "default" : "outline"} onClick={toggle}>
      {t("greenLabel")}: {enabled ? t("on") : t("off")}
    </Button>
  );
}


