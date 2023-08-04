// script for generating ormconfig.ts which get used by typeorm to make our migration files
import { configService } from '../config/config.service';
import fs = require('fs');
const ormConfigText = `
import { DataSource } from 'typeorm';
export const AppDataSource = new DataSource(
${JSON.stringify(configService.getTypeOrmConfig())}
);
`;
fs.writeFileSync('ormconfig.ts', ormConfigText);
