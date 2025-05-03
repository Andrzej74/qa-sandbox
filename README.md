# QA Sandbox Project – Full QA Flow Simulation (UI + API + DB + Performance)

![CI](https://github.com/andrzej74/qa-sandbox/actions/workflows/ci.yml/badge.svg)

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

### 4. Run UI tests (Cypress)
```bash
npm run cy:open
```
Select a test and run it via the GUI, or use headless mode:
```bash
npm run cy:run
```

## Reports

to do
