# Todo App Automation with Playwright
This project automates the testing of a Todo application using Playwright.
It follows Page Object Model (POM) with reusable helpers and fixtures for maintainability and readability.

The test flow includes:
- 0pen the app
- Add a new task
- Verify it appears in the list
- Mark the task as completed (check .completed class)
- Delete the task and verify it’s removed

## Project Structure

```MiniTodoApp-TestAutomation/
├── env/ # Environment configuration files
│ └── .env.local
├── fixtures/ # Base fixtures for custom test setup
│ └── basePage.ts
├── helpers/ # Utility and helper functions
│ └── DataHelpers.ts
├── pages/ # Page Object Models
│ └── todoPage.ts
├── testdata/ # Test data in JSON format
│ └── tasks.json
├── tests/ # Test specifications
│ └── todoTest.spec.ts
├── playwright-report/ # Playwright HTML reports
├── test-results/ # Traces, videos, screenshots
├── playwright.config.ts # Playwright configuration file
├── package.json # Project metadata and dependencies
└── README.md # Project documentation
```

## Setup & Installation
Clone this repository: 
```git clone https://github.com/HuongTu/MiniTodoApp-TestAutomation.git ```

Install dependencies: 
```npm install```

Install Playwright browsers: 
```npx playwright install```

## Run Tests
Run all tests: 
```npx playwright test```

## Reports
After a test run, generate and open the HTML report:
```npx playwright show-report```