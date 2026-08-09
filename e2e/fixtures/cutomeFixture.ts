import { test as base } from "@playwright/test";
import { LoginPage } from "../tests/pages/loginPage";
import { HomePage } from "../tests/pages/homePage";
import { AddEmployee } from "../tests/pages/addEmployeePage";

type page = {
    loginPage: LoginPage,
    homePage: HomePage,
    addEmployeePage: AddEmployee
}

export const test = base.extend<page>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    addEmployeePage: async ({ page }, use) => {
        await use(new AddEmployee(page))
    }
})
