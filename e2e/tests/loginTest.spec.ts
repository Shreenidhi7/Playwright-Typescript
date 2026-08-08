import { expect, test } from "@playwright/test"
import { LoginPage } from "../tests/pages/loginPage";

test("User Login Test", async ({ page }) => {
   
    const loginPage = new LoginPage(page)
    await loginPage.visit()
    await loginPage.loginUser("Admin", "admin123")
    // Inorder to do an assertion, we need to import "expect" module form playwright/test
    await expect(loginPage.dashboardText).toHaveText("Dashboard")


})
