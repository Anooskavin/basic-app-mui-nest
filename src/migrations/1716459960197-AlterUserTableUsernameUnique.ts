import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserTableUsernameUnique1716459347337 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT user_table_username UNIQUE ("username")`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT user_table_username`)
    }

}
