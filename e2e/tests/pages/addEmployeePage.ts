import { Page } from "@playwright/test";
import { EmployeeDetails } from "../../testData/dataInterface";

export class AddEmployee {

    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async addEmployee(EmployeeDetails:EmployeeDetails) {
        await this.page.getByRole('textbox', { name: 'First Name' }).click();
        await this.page.getByRole('textbox', { name: 'First Name' }).fill(EmployeeDetails.firstName);
        await this.page.getByRole('textbox', { name: 'First Name' }).press('Tab');
        await this.page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill(EmployeeDetails.lastName);
        await this.page.getByRole('textbox').nth(4).click();
        await this.page.getByRole('textbox').nth(4).fill(EmployeeDetails.employeeId);
        await this.page.getByRole('button', { name: 'Save' }).click();
    }

    public get getToastMessage(){
        return this.page.getByText('Successfully Saved')

    }

}