# Roadmap: QA Lead → QA Automation Engineer

Target stack: **JavaScript/TypeScript + Playwright**, with API testing and CI/CD.
Current status: JS basics underway (functions, conditionals, arrays — day01-day03).

Pace assumed: ~1 hr/day, 5 days/week. Adjust freely — the milestones matter more than the dates.

## Phase 1 — JavaScript Fundamentals (Weeks 1-3)

Continue the `javascript/dayXX` structure already started.

- Variables, types, operators (done — day01)
- Functions, conditionals (done — day01)
- Arrays & array methods: `map`, `filter`, `reduce`, `forEach`, `find` (started — day01, deepen)
- Objects, destructuring, spread/rest
- Template literals, ternary, optional chaining (`?.`), nullish coalescing (`??`)
- ES6+ modules (`import`/`export`)
- Loops & iteration patterns used in test data generation
- **Async JavaScript**: callbacks → Promises → `async`/`await` (critical for Playwright)
- Classes & `this` (needed for Page Object Model later)
- Error handling: `try/catch`, custom errors
- Milestone: small script that fetches data from a public API and processes it with `async/await` + array methods

## Phase 2 — TypeScript Basics (Week 4)

Most Playwright job postings expect TS, not just JS.

- Types, interfaces, generics (light touch)
- Converting a few JS exercises to `.ts`
- `tsconfig.json` basics

## Phase 3 — Git & Tooling (ongoing, start Week 1)

- Already using Git (this repo). Add: branches, PRs, `.gitignore`, commit conventions
- VS Code: debugging JS/TS, extensions (ESLint, Prettier)
- npm/package.json basics

## Phase 4 — Playwright Fundamentals (Weeks 5-7)

- Install & project setup (`npm init playwright@latest`)
- Locators: role-based, text, CSS, `data-testid` — and why role-based is preferred
- Actions: click, fill, select, upload, keyboard/mouse
- Assertions: `expect(locator)` web-first assertions, auto-waiting
- Test structure: `test.describe`, `beforeEach`/`afterEach`, fixtures basics
- Debugging: Playwright Inspector, trace viewer, `--headed`, `--debug`
- Codegen (`playwright codegen`) to accelerate locator discovery
- Milestone: automate login + one workflow (e.g., add-to-cart) on a demo site (saucedemo.com, practicetestautomation.com)

## Phase 5 — Page Object Model & Framework Design (Weeks 8-9)

- Page Object Model pattern (ties back to Classes from Phase 1)
- Test data management (fixtures, JSON/CSV, factories)
- Environment config (`.env`, multiple base URLs: dev/staging/prod)
- Reusable custom fixtures (auth state via `storageState`)
- Reporting: HTML reporter, Allure
- Milestone: rebuild Phase 4 tests as a small structured framework with POM

## Phase 6 — API Testing (Weeks 10-11)

- Playwright's built-in `request` context for REST API testing
- Postman for exploratory API testing/collections
- Combining UI + API tests (e.g., seed data via API, verify via UI)
- Status codes, schema validation, auth headers/tokens
- Milestone: API test suite for a public REST API (e.g., reqres.in, jsonplaceholder)

## Phase 7 — CI/CD (Week 12)

- GitHub Actions: workflow YAML, running Playwright on push/PR
- Parallelization & sharding to cut CI time
- Publishing HTML/Allure reports as CI artifacts
- Milestone: this repo's tests run automatically in GitHub Actions on every push

## Phase 8 — Advanced & Differentiators (Weeks 13-15)

- Visual regression testing (`toHaveScreenshot`)
- Network interception/mocking (`page.route`)
- Cross-browser & mobile emulation
- Accessibility checks (`@axe-core/playwright`)
- Basic performance/network assertions
- AI-assisted testing tools (Playwright MCP, codegen agents) — increasingly common in 2026 postings

## Phase 9 — Job Readiness (Week 16+)

- Polish this GitHub repo as a portfolio piece: clean READMEs, meaningful commit history, one flagship framework project
- Resume: reframe QA Lead experience as an asset (test strategy, mentoring, process ownership) + new automation skills
- Practice explaining: why Playwright over Selenium, how you'd design a framework, how you handle flaky tests
- Mock technical interview: live-code a Playwright test + explain a POM design
- Target roles: "QA Automation Engineer," "SDET," "Automation Test Engineer" — your QA Lead background is a strong differentiator, lead with it

## Suggested folder structure (as this grows)

```
aqa-learning-journey/
  javascript/        # Phases 1-2 (existing)
  playwright/         # Phases 4-5 exercises
  api-testing/         # Phase 6
  framework/           # Phase 5-8 capstone project
  .github/workflows/   # Phase 7
  ROADMAP.md
  README.md
```

## Immediate next actions

1. Finish filling in day02/day03 (currently empty) — array methods + objects
2. Start day04: async/await
3. Once Phase 1 is solid, install Playwright and do the first locator/action exercises
