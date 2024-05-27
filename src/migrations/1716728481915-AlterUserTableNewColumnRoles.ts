import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserTableNewColumnRole1716548479426 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`ALTER TABLE "user" ADD COLUMN role varchar DEFAULT 'users' `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`ALTER TABLE "user"  DROP COLUMN role`)
    }

}
