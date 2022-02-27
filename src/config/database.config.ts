import { Vars, dbConfigVars } from './vars';

export const getDbConfig = {
  host: 'localhost',
  port: 5432,
  username: 'codelitt',
  password: 'codelitt',
  database: 'antarctica',
  synchronize: true,
  logging: false,
  entities: dbConfigVars[Vars.env].entities,
  migrations: dbConfigVars[Vars.env].migrations,
  subscribers: dbConfigVars[Vars.env].subscribers,
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
