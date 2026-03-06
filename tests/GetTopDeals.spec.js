import { test, expect } from '@playwright/test';
import {SearchPage} from '../pageObjects/SearchPage';
import {TopDeals} from '../pageObjects/TopDeals';
import {OrderPage} from '../pageObjects/OrderPage';

test('@web Get top deals details for given product', async ({ browser }) => {
    const context=await browser.newContext()
    const page=await context.newPage()
    const searchp=new SearchPage(page)
    const deal=new TopDeals(page)
    const order=new OrderPage()
    await searchp.navigateTosearchPage()
    const npage=await searchp.topDeals(context)
    await deal.searchdiscount(npage)
    
});

