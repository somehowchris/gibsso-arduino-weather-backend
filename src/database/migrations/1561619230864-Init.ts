/* tslint:disable */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1561619230864 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `station` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NULL, `placeGeoX` varchar(255) NULL, `placeGeaY` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `measurement` (`id` varchar(255) NOT NULL, `sensorType` enum ('HUMIDITY', 'TEMPERATURE', 'LIGHT_INTENSITY') NOT NULL, `value` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `stationId` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `measurement` ADD CONSTRAINT `FK_51817ef0b5b96b7d22345dcb630` FOREIGN KEY (`stationId`) REFERENCES `station`(`id`) ON DELETE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `measurement` DROP FOREIGN KEY `FK_51817ef0b5b96b7d22345dcb630`");
        await queryRunner.query("DROP TABLE `measurement`");
        await queryRunner.query("DROP TABLE `station`");
    }

}
