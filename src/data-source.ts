import { DataSource, DataSourceOptions } from "typeorm";
export const dataSourceOptions: DataSourceOptions = {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "lenovo" ,
  "password": "postgres",
  "database": "lenovo",
  "entities": ["dist/**/*.entity{ .ts,.js}"],
  "synchronize": true,
  "migrations": ["dist/migrations/*{.ts,.js}"],
  "migrationsTableName": "migrations_typeorm",
  "migrationsRun": true
}
const dataSource = new DataSource(dataSourceOptions)
export default dataSource

