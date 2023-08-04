import { PrimaryGeneratedColumn } from 'typeorm';

// the one field that every tables should have
export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
