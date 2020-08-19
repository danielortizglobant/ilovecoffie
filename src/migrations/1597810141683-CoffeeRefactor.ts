import { MigrationInterface, QueryRunner } from "typeorm";

export class CoffeeRefactor1597810141683 implements MigrationInterface {

    /* src/migrations/... file */
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`,
        );
    }


}
/**
 *
 * // Run migration(s)
npx typeorm migration:run

// REVERT migration(s)
npx typeorm migration:revert
npx typeorm migration:generate -n SchemaSync
 */