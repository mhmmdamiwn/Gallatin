
import { DataSource } from 'typeorm';
export const AppDataSource = new DataSource(
{"type":"postgres","host":"127.0.0.1","port":5432,"username":"postgres","password":"12345678","database":"sternx","entities":["**/**/*.entity{.ts,.js}"],"migrationsTableName":"migration","migrations":["src/migrations/*.ts"]}
);
