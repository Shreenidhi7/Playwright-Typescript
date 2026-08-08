import { Page } from "@playwright/test";

export class LeftMenuComponents {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectLeftMenuItem(leftMenuItemName: string){
        // await page.getByRole('link', { name: 'PIM' }).click();
        await this.page.getByRole("link", { name: leftMenuItemName }).click()
    }

}