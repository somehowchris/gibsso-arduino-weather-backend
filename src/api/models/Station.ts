import { IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Measurement } from './Measurement';

@Entity()
export class Station {

    @PrimaryGeneratedColumn('uuid')
    @IsString()
    public id: string;

    @Column({unique: true})
    public name: string;

    @Column({nullable: true})
    public description: string;

    @Column({nullable: true, type: 'point', select: false})
    public location: string;

    @OneToMany(type => Measurement, measurement => measurement.station, {
        cascade: true, onDelete: 'SET NULL',
    })
    public measurements: Measurement[];

}
