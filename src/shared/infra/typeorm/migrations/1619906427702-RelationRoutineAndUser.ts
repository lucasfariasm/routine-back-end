import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class RelationRoutineAndUser1619906427702 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "routines", 
            new TableForeignKey({
                name: "FKRoutineUser",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames: ["routine_id"],
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("routines", "FKRoutineUser")
    }

}
