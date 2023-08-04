import {
  Entity,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BaseEntity } from '../../model/base.entity';

@Entity({ name: 'tasks' })
export class TaskEntity extends BaseEntity {
  @Column({ nullable: true })
  parentId: string;

  @ManyToOne(() => TaskEntity, (entity) => entity.parentId)
  parent: TaskEntity;

  @Column({
    type: 'varchar',
    name: 'title',
    nullable: true,
  })
  title: string;

  @Column({
    type: 'text',
    name: 'description',
    nullable: true,
  })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
