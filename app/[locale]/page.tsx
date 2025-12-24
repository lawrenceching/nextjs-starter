import { getTranslations } from "next-intl/server";

import { ClientExample } from "@/components/examples/ClientExample";
import { ServerExample } from "@/components/examples/ServerExample";
import { LocaleSwitcher } from "@/components/i18n/LocaleSwitcher";
import { GreenThemeToggle } from "@/components/theme/GreenThemeToggle";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations("Home");
  const { locale } = await params;

  return (
    <main className="p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-muted-foreground">{t("subtitle")}</p>
        <div className="mt-2 text-sm">
          {t("currentLocale")}: <code>{locale}</code>
        </div>
      </div>

      <section className="mt-6 flex flex-wrap items-center gap-3">
        <LocaleSwitcher />
        <ThemeToggle />
        <GreenThemeToggle />
      </section>

      <section className="mt-8 rounded-lg border bg-card p-4">
        <h2 className="mb-3 text-base font-semibold">{t("serverSectionTitle")}</h2>
        <ServerExample />
      </section>

      <section className="mt-4 rounded-lg border bg-card p-4">
        <h2 className="mb-3 text-base font-semibold">{t("clientSectionTitle")}</h2>
        <ClientExample />
      </section>
    </main>
  );
}


