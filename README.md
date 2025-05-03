# QA Sandbox Project – Full QA Flow Simulation (UI + API + DB + Performance)

![CI](https://github.com/andrzej74/qa-sandbox/actions/workflows/ci.yml/badge.svg)
[![Allure](https://img.shields.io/badge/Allure-available-blue)](https://github.com/andrzej74/qa-sandbox/actions)

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
## 📊 Reports

### Cypress + API (Allure)

Cypress and Newman are integrated with [Allure](https://docs.qameta.io/allure/) for rich test reporting.

To generate and open the report locally:

```bash
# for Cypress
allure generate cypress/results --clean -o allure-report
allure open allure-report

# for Newman (API)
allure generate newman/allure-results --clean -o newman/allure-report
allure open newman/allure-report
```

To use Allure, install:
```bash
npm i -D @shelex/cypress-allure-plugin
npm i -g allure-commandline
```