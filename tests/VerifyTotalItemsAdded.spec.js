// @ts-check
import { test, expect } from '@playwright/test';
import {SearchPage} from '../pageObjects/SearchPage';
import {CheckoutPage} from '../pageObjects/CheckoutPage';
import {OrderPage} from '../pageObjects/OrderPage';

test('@web Verify total items added', async ({ page }) => {
    const searchp=new SearchPage(page)
    const check=new CheckoutPage(page)
    const order=new OrderPage()
    await searchp.navigateTosearchPage()
    await searchp.searchProduct();
    await check.addItemsToCart()
    const added_quan=await page.locator('input.quantity').getAttribute('value')
    const total_quant=await page.locator('tr:has(td:has-text("Items"))>td>strong').textContent()
    await expect(added_quan).toEqual(total_quant)
   
  
});
