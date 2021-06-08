import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRoutines1619742779991 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "routines",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "routine_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "routine_name",
                        type: "varchar",
                    },
                    {
                        name: "date",
                        type: "timestamp with time zone",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("routines");
    }

}
