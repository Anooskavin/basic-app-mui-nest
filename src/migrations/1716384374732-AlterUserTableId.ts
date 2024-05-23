import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserTableId1716380794583 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`ALTER TABLE "user" RENAME COLUMN id to userid`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`ALTER TABLE "user" RENAME COLUMN userid to id`);
    }

}
