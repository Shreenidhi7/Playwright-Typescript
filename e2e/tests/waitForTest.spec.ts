import { test, expect } from "@playwright/test";

test("Testing Wait Strategies in Playwright", async ({ page }) => {
    // Load = untill the loading/reloading stops on the application, the "load" event will pause the execution of playwright command
    // DOMCONTENTLOADED = even though the page the loaded, and if the DOM is available, then untill the DOM is available the "DOM" event will pause the execution of the playwright command
    // NETWORKIDLE = even the page and dom is loaded, and if the network(API) calls are still executiing, then untill all the API calls are responsed, the "NETWORK" event will pause the execution of the playwright command
    // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {
    //     waitUntil: "load"
    // })
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForLoadState("load") // another way to use the above mentioned wait mechanism

    const response = await page.waitForResponse("https://opensource-demo.orangehrmlive.com/web/images/ohrm_logo.png")
    console.log("response status code", response.status());
    console.log("response headers: ", response.headers());

    await page.getByRole("textbox", { name: "Username" }).fill("Admin")
    await page.waitForTimeout(1_000)
    await page.getByRole("textbox", { name: "Password" }).fill("admin123")
    await page.getByRole("button", { name: /Login/ }).click()
    await page.waitForURL(/dashboard/)
    // https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index



})