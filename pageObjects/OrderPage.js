import {  expect } from '@playwright/test';
import data from '../testdata/data.json'
export class OrderPage{
    constructor(){
        this.placeorder='Place Order'
        this.country='div.products>div>div>select'
        this.agree='[type="checkbox"]'
        this.proceed='Proceed'
        this.success='placed successfully'
    }

    async placeOrder(page){
         await page.getByText(this.placeorder).click()
          await page.locator(this.country).selectOption(data.data.Country)
          await page.locator(this.agree).check()
          await page.getByText(this.proceed).click()
          await expect(page.getByText(this.success)).toBeVisible()
    }
    
}