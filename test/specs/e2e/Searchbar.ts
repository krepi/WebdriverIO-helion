import GlobalPage from "../../pages/GlobalPage.ts";
import SearchBarPage from "../../pages/components/SearchBarPage.ts";
import SearchResultsPage from "../../pages/SearchResultPage.ts";
import {helionHomeUrl, searchedPhraseUrl} from "../../config/pagesUrl.ts";
import {searchPhrase, searcheResultTitle} from "../../config/data.ts";

describe('E2E - Searchbar', async () => {
    it('Should open website helion.pl and verify url and check that searchbar is visible ', async () => {
        await GlobalPage.openPage(helionHomeUrl);
        await SearchBarPage.searchBarIsVisible();
    });
    it('Should click searchbar icon and reload website', async () => {
        await SearchBarPage.clickSearchIcon();
        await expect(browser).toHaveUrl(helionHomeUrl);
    });
    it('Should type search value and verify  visibility of popup ', async ()=>{
        await SearchBarPage.typeSearchPhrase(searchPhrase);
        await SearchBarPage.suggestListVisibility();

    });
    it("Should click Show All button ", async ()=>{
        await SearchBarPage.clickShowAllButton();
        await expect(browser).toHaveUrl(searchedPhraseUrl);
    });
    it("Should check Search results page Title number of results", async ()=>{
        const title:string = await SearchResultsPage.getPageTitle()
        await expect(title).toBe(searcheResultTitle);
        // await SearchResultsPage.checkSearchedTitleValue(searcheResultTitle)
        await SearchResultsPage.checkNumberOfSuggestedBooks(25);
    });
    it("Should clear  input value", async ()=>{
        await SearchBarPage.clearSearchInput();
       const inputValue:string = await SearchBarPage.getInputValue();
       await expect(inputValue).toBe("");
    })
})