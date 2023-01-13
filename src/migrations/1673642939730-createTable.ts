import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1673642939730 implements MigrationInterface {
    name = 'createTable1673642939730'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "category" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'ACTIVE', "quantity" integer NOT NULL DEFAULT '0', "created_at" TIME NOT NULL, "updated_at" TIME NOT NULL, "deleted_at" TIME NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
