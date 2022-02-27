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
  },
  development: {
    migrations: ['dist/modules/**/entities/*.entity.{ts,js}'],
    entities: ['dist/modules/**/entities/*.entity.{ts,js}'],
    subscribers: ['dist/modules/**/entities/*.entity.{ts,js}'],
  },
  production: {
    migrations: ['src/modules/**/entities/*.entity.{ts,js}'],
    entities: ['src/modules/**/entities/*.entity.{ts,js}'],
    subscribers: ['src/modules/**/entities/*.entity.{ts,js}'],
  },
};
