import {  expect } from '@playwright/test';
export class CheckoutPage{
    constructor(page) {
    this.page = page;
    this.productcount='div.product-image'
    this.addToCart='button:has-text("ADD TO CART")'
    this.addedToCart='button:has-text("ADDED")'
    this.cart='img[alt="Cart"]'
    this.checkout='PROCEED TO CHECKOUT'
  }
    async addItemsToCart(){
         await expect(this.page.locator(this.productcount)).toHaveCount(1);
          await this.page.locator(this.addToCart).click()
          await expect(await this.page.locator(this.addedToCart)).toBeVisible();
         
    }
    async proceedToCheckout(){
          await this.page.locator(this.cart).click()
          await this.page.getByText(this.checkout).click()
         
    }

}