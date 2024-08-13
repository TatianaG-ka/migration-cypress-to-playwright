<h1 align="center">Migration from Cypress to Playwright 👋</h1>

This repository contains test cases for both Cypress and Playwright, enabling you to run tests within the same project.

With my prior experience in Playwright, migrating a simple project from Cypress was a straightforward process. The transition involved adapting tests, but the challenges were minimal. The migration enhanced test performance and reaffirmed Playwright's strengths, making it a clear choice for future projects.


## Usage

Two tools are available that can automatically convert Cypress code to its Playwright equivalent.
The first of these tools is https://demo.playwright.dev/cy2pw/, and the second one GPT4.

> **Warning**
> 
> Migration is not perfect, therefore you will have to make modifications in the new code

Side note: if you have a GitHub Copilot license you can also prompt your Copilot to migrate a test or file for you. 
Using Copilot can make the migration process faster and smoother, reducing manual effort and minimizing errors. Copilot’s AI-driven suggestions help bridge the gap between the two testing frameworks efficiently.

## Running Tests

### Cypress Tests

- To run Cypress tests in headless mode, execute: 
```
npm run cypress-test-headless
```

- To run Cypress tests in UI mode, execute:
```
npm run cypress-test-ui
```

### Playwright Tests

- To run Playwright tests in headless mode, execute:
```
npm run playwright-test-headless
```

- To run Playwright tests in UI mode, execute:
```
npm run playwright-test-ui
```

## Cypress and Playwright Folder Locations:

- Cypress test cases are located in the folder `cypress/e2e`.
- Playwright test cases are located in the folder `src/ and tests/`.

## Local Setup

To run tests on your local machine:

1. Clone the repository.
2. Run the following command after cloning:
```
npm install
```

## From Cypress to Playwright - cost, migration steps, timeline and AI tools 


Rewriting the "tests infrastructure": 
- Custom commands, shared utilities like authentication, and generation of test data
- Updating CI/CD pipelines
- Updating custom integrations and reporting
- Rewriting the existing tests
- Training the team on the new framework and concepts

The exact cost of migration depends on the size of the test suite, the complexity of the application, the team's experience, and the available resources.

> When migrating from Cypress to Playwright, it's crucial to carefully consider the key steps and decisions to ensure a successful transition.

## Migration Steps 
![image](levels)


> Cutoff - all new tests are written in Playwright

### Step 1: Set Up the testing infrastructure

Key tasks during this phase include:

- Developing fixtures for frequently used components such as authentication, session management, and test data setup.
Refactoring custom commands and integrations to align with Playwright.
- Migrating a selection of critical path tests to Playwright.
- Configuring the CI pipeline to execute the newly created Playwright tests.

### Step 2: Write new tests in Playwright, migrate high-value tests

**Approach 1: Single team handling migration and New Tests**

 This team is responsible for both gradually migrating existing tests to Playwright (**migrate high value tests first**) and writing new tests, including integrating them into the CI pipeline. The team should focus on improving the testing infrastructure to make the transition smoother.

**Approach 2: Two teams with separate responsibilities**

Divide the effort between two teams: one team focuses on migrating existing tests to Playwright, while the other concentrates on writing new tests in Playwright. This dual-team approach enables parallel progress, with the migration team handling legacy tests and the new tests team ensuring the CI pipeline and infrastructure effectively support Playwright.

While maintaining two testing suites in different frameworks can be cumbersome, it's important to remember that this is a temporary state.

### Step 3: Update CI/CD pipeline

As your Playwright test suite grows, it's crucial to optimize your CI/CD pipeline to handle the increased load effectively. Begin by fine-tuning the CI setup to accommodate Playwright's capabilities, such as built-in parallelization through [sharding](https://playwright.dev/docs/test-sharding#sharding-tests-between-multiple-machines), which allows for faster test execution. Additionally, Playwright offers robust solutions for [reporting](https://playwright.dev/docs/test-reporters) and analytics, enabling detailed insights into test performance and coverage.

 During this phase, ensure that the CI/CD pipeline is configured to run both the existing Cypress tests and the new Playwright tests. This dual setup might temporarily increase the complexity of your pipeline, but it's necessary for a smooth transition. Gradually, as more tests are migrated, you can phase out Cypress, simplifying the CI/CD process. This step is vital for maintaining continuous integration and delivery efficiency during the migration process, ensuring that the testing process remains reliable and scalable as your Playwright test suite evolves.

## Conclusion
Migrating from Cypress to Playwright is a significant decision that requires careful planning and execution. While the transition may seem daunting, especially for established projects with extensive Cypress test suites, the benefits of Playwright’s robust features and improved performance can be well worth the effort. By following a structured approach—starting with setting up the infrastructure, strategically migrating high-value tests, and gradually phasing out Cypress—you can ensure a smooth and efficient transition. Leveraging tools like GitHub Copilot and utilizing automated conversion tools can further streamline the process. Remember, the key to a successful migration lies in thorough preparation, continuous learning, and a willingness to adapt to the new framework. With the right strategy in place, your team can confidently embrace Playwright and unlock new possibilities in automated testing.

## Resources
- https://timdeschryver.dev/bits/cypress-to-playwright-converters
- https://medium.com/lingvano/how-we-reduced-testing-time-by-70-by-moving-from-cypress-to-playwright-32a731d468ba
- https://currents.dev/posts/cypress-to-playwright-migration
- https://playwright.dev/docs/test-sharding#sharding-tests-between-multiple-machines
- https://playwright.dev/docs/test-reporters