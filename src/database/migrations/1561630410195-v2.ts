import {MigrationInterface, QueryRunner} from "typeorm";

export class v21561630410195 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `station` DROP COLUMN `placeGeoX`");
        await queryRunner.query("ALTER TABLE `station` DROP COLUMN `placeGeaY`");
        await queryRunner.query("ALTER TABLE `station` ADD `location` point NULL");
        await queryRunner.query("ALTER TABLE `station` CHANGE `description` `description` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `measurement` DROP FOREIGN KEY `FK_51817ef0b5b96b7d22345dcb630`");
        await queryRunner.query("ALTER TABLE `measurement` CHANGE `createdAt` `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `measurement` CHANGE `stationId` `stationId` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `measurement` ADD CONSTRAINT `FK_51817ef0b5b96b7d22345dcb630` FOREIGN KEY (`stationId`) REFERENCES `station`(`id`) ON DELETE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `measurement` DROP FOREIGN KEY `FK_51817ef0b5b96b7d22345dcb630`");
        await queryRunner.query("ALTER TABLE `measurement` CHANGE `stationId` `stationId` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `measurement` CHANGE `createdAt` `createdAt` datetime(6) NOT NULL DEFAULT 'current_timestamp(6)'");
        await queryRunner.query("ALTER TABLE `measurement` ADD CONSTRAINT `FK_51817ef0b5b96b7d22345dcb630` FOREIGN KEY (`stationId`) REFERENCES `station`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT");
        await queryRunner.query("ALTER TABLE `station` CHANGE `description` `description` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `station` DROP COLUMN `location`");
        await queryRunner.query("ALTER TABLE `station` ADD `placeGeaY` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `station` ADD `placeGeoX` varchar(255) NULL DEFAULT 'NULL'");
    }

}
