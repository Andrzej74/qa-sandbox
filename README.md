# QA Sandbox Project – Full QA Flow Simulation (UI + API + DB + Performance)

![CI](https://github.com/andrzej74/qa-sandbox/actions/workflows/ci.yml/badge.svg)
[![Allure (Cypress)](https://img.shields.io/badge/Allure-Cypress-green)](https://github.com/andrzej74/qa-sandbox/actions)

## Educational project simulating a full end-to-end QA process including **manual testing**, **test automation**, **API validation**, **SQL checks**, and **performance monitoring**. Built as a sandbox to demonstrate testing skills.

## Tech stack

| Layer           | Tools & Tech                               |
|-----------------|--------------------------------------------|
| **UI Testing**  | Cypress 15                                 |
| **API Testing** | Postman, Newman, REST                      |
| **Database**    | PostgreSQL (Docker), SQL                   |
| **Performance** | Apache JMeter                              |
| **CI/CD**       | GitHub Actions                             |
| **Other**       |                                            |


## Quick Start

1. `git clone …`
2. `cp .env.example .env && echo \"REQRES_API_KEY=reqres-free-v1\" >> .env`
3. `npm i`
4. `npm run db:up`
5. `npm run cy:open`

## Reqres API Key

As of 2025, Reqres requires an API key to access all endpoints.

1. Go to [https://reqres.in/signup].
2. Use the default key: `reqres-free-v1`
3. Create a `.env` file in the project root with the following:
REQRES_API_KEY=reqres-free-v1
4. This key is automatically used in the UI and Cypress tests.

### 1. Requirements

The following tools are required to run the core test suites:

- Node.js (v18 or higher)
- Docker Desktop with WSL2 backend (for PostgreSQL)
- Git (required for cloning the repo and using GitHub Actions)
- Java 11+ _(required **only** if you want to run JMeter performance tests)_

Optional:

- Apache JMeter 

### 2. Clone the repo & install dependencies

```bash
git clone https://github.com/andrzej74/qa-sandbox.git
cd qa-sandbox
npm install
```

### 3. Launch the PostgreSQL container

```bash
npm run db:up
```
To verify it's running:
```bash
docker ps
# should show: qa-sandbox-postgres
```

### 4. Run the UI:
```bash
npm run ui
```

### 5. Run UI tests (Cypress)
```bash
npm run cy:open
```
Select a test and run it via the GUI, or use headless mode:
```bash
npm run cy:run
```

### 6. Run API tests (Newman)
```bash
npm run api:test
``` 
## Reports

### Cypress + API (Allure)

To generate and view an Allure report for Cypress tests:
### 1. Install Allure CLI (once per machine):
```bash
npm i -g allure-commandline
```
### 2. Run tests and generate results:
```bash
npx cypress run --env allure=true
```
### 3. Generate and open the report:
```bash
allure generate allure-results -o _allure-report --clean
allure open _allure-report
```

Test results are uploaded automatically as artifacts in GitHub Actions:

|Source         |Artifact name   | Format          |
|---------------|----------------|-----------------|
|Cypress (UI)	|cypress-results | raw test data   |
|---------------|----------------|-----------------|
|Newman (API)	|newman-report	 | HTML            |

You can also run the API tests manually and open the HTML report locally:

```bash
newman run api/Reqres.postman_collection.json ^
  -e api/sandbox-local.postman_environment.json ^
  -r cli,html ^
  --reporter-html-export newman/report.html

start newman\report.html
```