import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserTable1716375842697 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: "id",
                        type: "int4",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE user`);
    }

}
