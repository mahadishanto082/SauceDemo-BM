# SauceDemo Playwright Automation Project

This repository contains **Playwright automation tests** for the public demo website [Sauce Demo](https://www.saucedemo.com/).  
The tests are written in **JavaScript** and demonstrate **End-to-End (E2E) scenarios** such as login, add product to cart, verify cart, and logout.  

---

## Project Features

- Login with valid credentials
- Add a product to the shopping cart
- Verify the product name in the cart
- Logout from the application
- Runs on **Google Chrome** or **Chromium**
- Headed mode with optional delays to visualize test steps
- Playwright test runner with assertions

---

## Prerequisites

Make sure you have installed:

- Node.js >= 20.17.0 (or compatible)
- npm
- Google Chrome (optional, for running tests on actual Chrome)

---

#project structure
├── tests/                 # Playwright test files
├── test-saucedemo/        # Specific test scripts for Sauce Demo
├── e2e/                   # Optional E2E folder
├── package.json           # Node.js project config
├── playwright.config.js   # Playwright configuration
└── .gitignore

## Setup Instructions

1. **Clone the repository**

```bash
npm install
npx playwright install

## Setup Instructions

npx playwright test --headed
├── tests/                 # Playwright test files
├── test-saucedemo/        # Specific test scripts for Sauce Demo
├── e2e/                   # Optional E2E folder
├── package.json           # Node.js project config
├── playwright.config.js   # Playwright configuration
└── .gitignore

git clone https://github.com/mahadishanto082/SauceDemo-BM.git
cd SauceDemo-BM
