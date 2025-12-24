import { browser, $ } from "@wdio/globals";
import { expect } from "expect-webdriverio";

describe("Home page", () => {
  it("renders the demo sections", async () => {
    await browser.url("/zh-CN");

    const h1 = await $("h1");
    await expect(h1).toBeExisting();

    // Locale section exists
    await expect($("main")).toHaveText(expect.stringContaining("当前语言"));

    // Toggles exist (text is localized; dark/light label can vary by system, so assert on stable prefixes)
    await expect($("main")).toHaveText(expect.stringContaining("外观模式"));
    await expect($("main")).toHaveText(expect.stringContaining("绿色主题"));

    // Example sections exist
    await expect($("main")).toHaveText(expect.stringContaining("Server Component 示例"));
    await expect($("main")).toHaveText(expect.stringContaining("Client Component 示例"));
  });
});


