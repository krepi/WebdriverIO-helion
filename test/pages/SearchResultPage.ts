


class SearchResultPage {

    get pageTitle(){
        return $('div#page-title h1');
    }
    get searchedResultsList(){
        return $$('ul.list > li')
    }


    async checkSearchedTitleValue(value:string) {
        const searchedTitle:WebdriverIO.Element = await this.pageTitle;
        await searchedTitle.waitForDisplayed();
        const searchedTitleValue:string = await searchedTitle.getText();
        await expect(searchedTitleValue).toBe(value);
    }
    async getPageTitle(): Promise<string> {
        const title = await this.pageTitle;
        return await title.getText();
    }
    async checkNumberOfSuggestedBooks(numberOfSuggestedBooks: number) {
        const booksList:WebdriverIO.ElementArray = await this.searchedResultsList;
        await expect(booksList.length).toEqual(numberOfSuggestedBooks);
    }
}

export default new SearchResultPage();