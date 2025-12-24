import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page.js'

describe('Home Page', () => {
    it('should display the home page with correct title and locale', async () => {
        await HomePage.open('/en');

        await expect(HomePage.title).toBeDisplayed();
        await expect(HomePage.title).toHaveText('Downkit Scaffold');

        await expect(HomePage.subtitle).toBeDisplayed();

        const localeText = await HomePage.getCurrentLocaleText();
        expect(localeText).toContain('en');
    });

    it('should display server and client section titles', async () => {
        await HomePage.open('/en');

        await expect(HomePage.serverSectionTitle).toBeDisplayed();
        await expect(HomePage.serverSectionTitle).toHaveText('Server Component example');

        await expect(HomePage.clientSectionTitle).toBeDisplayed();
        await expect(HomePage.clientSectionTitle).toHaveText('Client Component example');
    });
});
