import { IsString } from 'class-validator';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { SensorType } from './enums/SensorType';
import { Station } from './Station';

@Entity()
export class Measurement {

    @PrimaryGeneratedColumn('uuid')
    @IsString()
    public id: string;

    @Column({type: 'enum', enum: SensorType})
    public sensorType: SensorType;

    @Column()
    public value: string;

    @CreateDateColumn()
    public createdAt: Date;

    @ManyToOne(type => Station, station => station.measurements, {
        onDelete: 'CASCADE',
    })
    public station: Station;

}
