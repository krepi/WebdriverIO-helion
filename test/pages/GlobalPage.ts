class GlobalPage {

    get homepageUrl () {
        return "https://helion.pl/";
    }


    async openPage(pageUrl: string, expectedPageUrl: string = pageUrl) {
        await browser.url(pageUrl);
        await expect(browser).toHaveUrl(expectedPageUrl);
    }
}

export default new GlobalPage();