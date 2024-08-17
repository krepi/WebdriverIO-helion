class SearchBarPage {
    get searchInput() {
        return $('#inputSearch');
    }

    get searchIon() {
        return $("//button[contains(text(), 'Szukaj')]");
    }
    get searchSuggestList() {
        return $('form#szukanie div.suggest-list ');
    }
    get suggestListShowAllButton() {
        return $('li.wszystkie > p > a');
    }


    async searchBarIsVisible() {
        const input: WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
    }

    async clickSearchIcon() {
        const icon: WebdriverIO.Element = await this.searchIon;
        await icon.waitForDisplayed();
        await icon.click();
    }
    async typeSearchPhrase(value: string) {
        const searchInput = await this.searchInput;
        await searchInput.waitForDisplayed();
        await searchInput.setValue(value);
    }
    async suggestListVisibility(){
        const suggestList: WebdriverIO.Element = await this.searchSuggestList;
        await suggestList.waitForDisplayed();
    }

    async clickShowAllButton() {
        const showAllButton:WebdriverIO.Element = await this.suggestListShowAllButton;
        await showAllButton.waitForDisplayed();
        await showAllButton.scrollIntoView();
        await browser.pause(1000);
        await showAllButton.click();

    }

}

export default new SearchBarPage()