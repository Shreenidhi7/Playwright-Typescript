import { Page } from "@playwright/test";

export class TopMenuComponents {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectTopMenuItem(topMenuItemName: string){
        // await this.page.getByRole('listitem').filter({ hasText: 'Add Employee' }).click();
        await this.page.getByRole("listitem").filter({
            hasText: topMenuItemName
        }).click()

    }

    
}