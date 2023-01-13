import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1673643330871 implements MigrationInterface {
    name = 'createTable1673643330871'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updated_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "deleted_at" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "deleted_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updated_at" SET NOT NULL`);
    }

}
