# URL SHORTENER

## Running the app

### Dependencies

- Node js
- Postgres
### Setup

3. run `npm install`
5. run `npm run dev`

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Conventions

### Naming
To follow clean naming conventions, we'll use

- kebab-case: For file names
- PascalCase: for classes and object names

### Modules

In this project, we are using the module system. This means that each feature has its own module.
For creating new modules you can use the following script:

### Database migrations
```bash
# Running the migrations
$ npm run db:migrate:schema

# Reverting the last migration
$ npm run db:migrate:schema:down

# Creating new migrations
$ npm run db:migrate:schema:create UsersTable
```
