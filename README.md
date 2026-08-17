# Playwright + TypeScript Starter 🚀

This repository is a starter template for building automated tests using **Playwright** with **TypeScript**.  
It provides a clean foundation for writing, organizing, and running browser-based end-to-end tests, making it easier to set up a modern testing workflow.

---

## 📖 Overview
- **Framework:** Playwright  
- **Language:** TypeScript  
- **License:** MIT (open-source, free to use and modify)  
- **Purpose:** Demonstrates how to integrate Playwright with TypeScript for automated web testing.  

---

## 🚀 Features
- ✅ **Playwright Integration** – Fast, reliable browser automation across Chromium, Firefox, and WebKit.  
- ✅ **TypeScript Support** – Strong typing, autocompletion, and compile-time error checking.  
- ✅ **Cross-Browser Testing** – Write once, run tests across multiple browsers.  
- ✅ **Scalable Test Setup** – Easily extendable for larger projects with multiple test suites.  
- ✅ **Open Source** – Licensed under MIT, so you can freely adapt it to your needs.  

---

## 📂 Project Structure
A typical Playwright + TypeScript setup looks like this:
- Playwright-Typescript/
- │── tests/                # Test files (e.g., login.spec.ts, checkout.spec.ts)
- │── pages/                # Page Object Models for reusable selectors & actions
- │── playwright.config.ts  # Playwright configuration (browsers, reporters, etc.)
- │── package.json          # Dependencies & scripts
- │── tsconfig.json         # TypeScript configuration
- │── README.md             # Documentation
- │── LICENSE               # MIT License

---

## 🛠️ Getting Started

1. Clone the Repository
```bash
git clone https://github.com/Shreenidhi7/Playwright-Typescript.git
cd Playwright-Typescript
```

2. Install Dependencies
```
bash
npm install
```

3. Run Tests
```
bash
npx playwright test
```

4. Generate Reports
Playwright can generate HTML reports:
bash
```
npx playwright show-report
```

---
## 📖 Example Test (Login Flow)

Here’s a simple example of how a test might look in this repo:
- import { test, expect } from '@playwright/test';

- test('Login with valid credentials', async ({ page }) => {
  - await page.goto('https://example.com/login');
  - await page.fill('#username', 'Admin');
  - await page.fill('#password', 'admin123');
  - await page.click('button[type="submit"]');
  - await expect(page).toHaveURL('https://example.com/dashboard');
- });

---

## ✅ Use Cases
- Web App Testing: Automate login, form submissions, navigation, and UI validation.
- CI/CD Integration: Run tests automatically in pipelines (GitHub Actions, Azure DevOps, etc.).
- Cross-Browser Validation: Ensure consistent behavior across Chrome, Firefox, and Safari.

---

## 📜 License
This project is licensed under the MIT License, meaning you can freely use, modify, and distribute it.

---

## 🙌 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---
