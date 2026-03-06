// @ts-check
import { test, expect } from '@playwright/test';
import {SearchPage} from '../pageObjects/SearchPage';
import {CheckoutPage} from '../pageObjects/CheckoutPage';
import {OrderPage} from '../pageObjects/OrderPage';

test('@webapp Place order successfully', async ({ page }) => {
    const searchp=new SearchPage(page)
    const check=new CheckoutPage(page)
    const order=new OrderPage()
    await searchp.navigateTosearchPage()
    await searchp.searchProduct();
    await check.addItemsToCart()
    await check.proceedToCheckout();
    await order.placeOrder(page)
});


