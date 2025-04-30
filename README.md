# QA Sandbox Project – Full QA Flow Simulation (UI + API + DB + Performance)
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


## Reports

to do
