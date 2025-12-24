"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export function ClientExample() {
  const t = useTranslations("ClientExample");
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-3">
      <div className="text-sm">
        {t("count")}: <code>{count}</code>
      </div>
      <Button onClick={() => setCount((c) => c + 1)}>{t("increment")}</Button>
    </div>
  );
}



