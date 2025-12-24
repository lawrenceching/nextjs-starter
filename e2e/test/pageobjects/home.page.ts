import { $ } from '@wdio/globals'
import Page from './page.js'

/**
 * sub page containing specific selectors and methods for the home page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get title () {
        return $('main h1');
    }

    public get subtitle () {
        return $('main p.text-muted-foreground');
    }

    public get currentLocale () {
        return $('main div.text-sm');
    }

    public get serverSectionTitle () {
        return $$('main section h2')[0];
    }

    public get clientSectionTitle () {
        return $$('main section h2')[1];
    }

    public get localeSwitcher () {
        return $('[aria-label*="locale" i], [aria-label*="language" i]');
    }

    public get themeToggle () {
        return $('[aria-label*="theme" i], [aria-label*="dark" i], [aria-label*="light" i]');
    }

    public get greenThemeToggle () {
        return $('[aria-label*="green" i]');
    }

    /**
     * get the text content of the current locale display
     */
    public async getCurrentLocaleText (): Promise<string> {
        const element = await this.currentLocale;
        await element.waitForDisplayed();
        return element.getText();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open (path: string) {
        return super.open(path);
    }
}

const homePage = new HomePage();
export default homePage;
