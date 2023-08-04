import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1691126895475 implements MigrationInterface {
  name = 'Migrations1691126895475';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tasks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "parentId" uuid, "title" character varying, "description" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "tasks" ADD CONSTRAINT "FK_1cbec65196d4cf86dd8ab464085" FOREIGN KEY ("parentId") REFERENCES "tasks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tasks" DROP CONSTRAINT "FK_1cbec65196d4cf86dd8ab464085"`,
    );
    await queryRunner.query(`DROP TABLE "tasks"`);
  }
}
