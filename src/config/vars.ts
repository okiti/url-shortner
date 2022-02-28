import dotenv from 'dotenv';
dotenv.config();

type varsDto = {
  port?: string;
  secret: string;
  env: string;
};

export const Vars: varsDto = {
  port: process.env.PORT,
  secret: process.env.SECRET,
  env: process.env.NODE_ENV,
};

export const isTestEnv = () => process.env.NODE_ENV === 'test';
export const isDevEnv = () => process.env.NODE_ENV === 'development';
export const isProduction = () => process.env.NODE_ENV === 'development';

export const dbConfigVars = {
  test: {
    migrations: ['src/modules/**/entities/*.entity.{ts,js}'],
    entities: ['src/modules/**/entities/*.entity.{ts,js}'],
    subscribers: ['src/modules/**/entities/*.entity.{ts,js}'],
    username: process.env.DB_TEST_USERNAME,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST_DATABASE,
  },
  development: {
    migrations: ['dist/modules/**/entities/*.entity.{ts,js}'],
    entities: ['dist/modules/**/entities/*.entity.{ts,js}'],
    subscribers: ['dist/modules/**/entities/*.entity.{ts,js}'],
    username: process.env.DB_DEV_USERNAME,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_DATABASE,
  },
  production: {
    migrations: ['src/modules/**/entities/*.entity.{ts,js}'],
    entities: ['src/modules/**/entities/*.entity.{ts,js}'],
    subscribers: ['src/modules/**/entities/*.entity.{ts,js}'],
    username: process.env.DB_PROD_USERNAME,
    password: process.env.DB_PROD_PASSWORD,
    database: process.env.DB_PROD_DATABASE,
  },
};
