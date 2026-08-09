import { test as base } from "@playwright/test";
import { LoginPage } from "@pages/loginPage";
import { HomePage } from "@pages/homePage";
import { AddEmployee } from "@pages/addEmployeePage";

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
