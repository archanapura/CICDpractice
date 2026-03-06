import data from '../testdata/data.json'
import { expect } from '@playwright/test'

export class TopDeals {

    constructor() {
    }

    async searchdiscount(page) {

        await page.locator('#search-field').fill(data.data.Product)

        await expect(page.locator('tr>td').first())
            .toContainText(data.data.Product)

        const price = await page.locator('tr>td').nth(1).textContent()
        const disprice = await page.locator('tr>td').nth(2).textContent()

        const totalDiscount = parseFloat(price) - parseFloat(disprice)

        console.log("Total discount " + totalDiscount)
    }

    async selectDeliveryDate(npage){
        await npage.locator('button[class*="calendar-button"]').click()
    const current =await npage.locator('[class*="tile--active"]>abbr').getAttribute('aria-label')
    await npage.locator('[aria-label="March 26, 2026"]').click()
    await npage.locator('button[class*="calendar-button"]').click()
    const updated =await npage.locator('[class*="tile--active"]>abbr').getAttribute('aria-label')
    await expect(current).not.toEqual(updated)
    }

     }
