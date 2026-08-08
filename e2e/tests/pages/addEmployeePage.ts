import { Page } from "@playwright/test";

export class AddEmployee {

    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async addEmployee() {
        await this.page.getByRole('textbox', { name: 'First Name' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).fill('Shreenidhi');
        await this.page.getByRole('textbox', { name: 'First Name' }).press('Tab');
        await this.page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill('Sharma');
        await this.page.getByRole('textbox').nth(4).click();
        await this.page.getByRole('textbox').nth(4).fill('206873');
        await this.page.getByRole('button', { name: 'Save' }).click();
    }

    public get getToastMessage(){
        return this.page.getByText('Successfully Saved')

    }

}