import { test, expect } from "@playwright/test";
import { ADDRGETNETWORKPARAMS } from "node:dns";

test("Locators Strategies Test", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // await page.getByRole("textbox").fill("Admin") // 1st way
    // await page.getByRole("textbox").first().fill("Admin") // 2nd way (1st textbox)
    // await page.getByRole("textbox").last().fill("admin123") // 3rd way (last textbox)
    // await page.getByRole("textbox").nth(0).fill("Admin") // 4th way (0 selects the 1st textbox)
    // await page.getByRole("textbox").nth(1).fill("admin123") // 5th way (1 selects the 2nd textbox)
    await page.getByRole("textbox", { name: "Username" }).fill("Admin") // 6th way (getByRole by providing the string value)
    await page.getByPlaceholder("Password", { exact: true }).fill("admin123") // 7th way (getByPlaceholder)
    // await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click() // 8th way (By Selectors - xpath)
    await page.locator(".oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button").click() // 9th way (By Selectors css selector) 
    const dashboardTextValue_getByText = await page.getByText("Dashboard").last().textContent()
    console.log("dashboardTextValue_getByText = ", dashboardTextValue_getByText);
    const dashboardTextValue_getValueUsingLocatorSelector = await page.locator("//h6[text()='Dashboard']").textContent()
    console.log("dashboardTextValue_getValueUsingLocatorSelector = ", dashboardTextValue_getValueUsingLocatorSelector);
    if (dashboardTextValue_getByText != dashboardTextValue_getValueUsingLocatorSelector) {
        console.log("The text retrieved from 2 different locator/selectors are different");
        page.close()
    } else {
        console.log("The text retrieved from 2 different locator/selectors are same");
        const timeAtWorkTextExtract = await page.locator("//div[@class='orangehrm-dashboard-widget-name']").locator(".oxd-text.oxd-text--p").first().textContent()
        console.log("timeAtWorkTextExtract = ", timeAtWorkTextExtract);
    }
    await page.waitForTimeout(5_000)
})
