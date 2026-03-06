import { test, expect } from '@playwright/test';
import testdata from '../testdata/data.json'
export class SearchPage{
    constructor(page) {
    this.page = page;
    this.search='input.search-keyword'
  }
   async navigateTosearchPage(){
        await this.page.goto('/seleniumPractise/#/');
        await expect(this.page).toHaveTitle(testdata.validations.searchTitle);
   }
    async searchProduct(){
        
        await this.page.locator(this.search).fill(testdata.data.Product)
        await this.page.waitForLoadState('domcontentloaded')
        const prod='h4:has-text("{text}")'.replace("{text}","Carrot")
        await expect(await this.page.locator(prod)).toBeVisible();
         
    }
    
    async topDeals(context){

         //await this.page.getByText('Top Deals').click()
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),   // wait for new tab
           this.page.getByText('Top Deals').click()      // action that opens it
            ]);

        await newPage.waitForLoadState();
        console.log(await newPage.title());
        console.log(await newPage.locator('[id="page-menu"]').textContent())
         await newPage.locator('[id="page-menu"]').selectOption('10')
         return newPage;
    }
}