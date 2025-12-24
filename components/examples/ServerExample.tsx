import { getTranslations } from "next-intl/server";

export async function ServerExample() {
  const t = await getTranslations("ServerExample");
  const serverTime = new Date().toISOString();

  return (
    <div className="text-sm">
      {t("serverTime")}: <code>{serverTime}</code>
    </div>
  );
}



