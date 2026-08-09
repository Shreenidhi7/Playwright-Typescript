import { expect } from "@playwright/test";
import { test } from "../fixtures/cutomeFixture";
import { LoginPage } from "../tests/pages/loginPage";
import { HomePage } from "./pages/homePage";
import { AddEmployee } from "./pages/addEmployeePage";
import { getRandomEmployeeDetails } from "../testData/randomFakerData";

test("Add Employee Test", async ({ page, loginPage, homePage, addEmployeePage }) => {

    // const loginPage = new LoginPage(page)
    // const homePage = new HomePage(page)
    // const addEmployeePage = new AddEmployee(page)
    await loginPage.visit()
    await loginPage.loginUser()
    await expect(loginPage.dashboardText).toHaveText("Dashboard")
    await homePage.getLeftMenuComponent.selectLeftMenuItem("PIM")
    await homePage.getTopMenuComponent.selectTopMenuItem("Add Employee")
    await addEmployeePage.addEmployee(getRandomEmployeeDetails())
    await expect(addEmployeePage.getToastMessage).toHaveText("Successfully Saved")

})