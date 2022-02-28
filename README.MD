# URL SHORTENER
A microservice for shortening urls.
### Dependencies

- Node js
- Postgres
Steps to run this project:

1. Run `npm i` command
2. Create an environment file (.env) and add the environment variables from .env.example
3. Run `npm start` command

## Database
 Postgres database is used. Typeorm is used to design our models and query the database. Postgres extensions used are
 - uuid-ossip (auto-generated uuid in place of SQL auto-incremented int for primary column).

 ### Migrations
 Instead of writing migrations, Typorm help us create migrations using our Entities. syncronise is set to true. In production it should be false to avoid data lose.

 ## Tests
 Testing is implemented using Jest and suppertest. setup for both unit tests and integration tests are implemented. To improve the coverage more tests should be added.

For unit tests use the following command

 ``` npm run test ```

For Integration (E2E) test use the command

 ``` npm run test:e2e ```

For coverage report, use the command

 ``` npm run test:cov ```

## Conventions

### Naming
To follow clean naming conventions, we'll use

- kebab-case: For file names
- PascalCase: for classes and object names

### Modules

In this project, we are using the module system. This means that each feature has its own module.
For creating new modules you can use the following script:

### Security

## Device logging
A device logger is added to the system to log devices that visits urls. the data collected includes
- ip address
- country
- device

when checking the url statistic route, it returns the last 10 devices that were used to visit the url.

## Improvements
- The device logger can be improved by using a faster cache storage like Redis.
