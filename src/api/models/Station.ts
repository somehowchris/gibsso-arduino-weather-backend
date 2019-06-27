import { IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Measurement } from './Measurement';

@Entity()
export class Station {

    @PrimaryGeneratedColumn('uuid')
    @IsString()
    public id: string;

    @Column()
    public name: string;

    @Column({nullable: true})
    public description: string;

    @Column({nullable: true})
    public placeGeoX: string;

    @Column({nullable: true})
    public placeGeaY: string;

    @OneToMany(type => Measurement, measurement => measurement.station, {
        cascade: true, onDelete: 'SET NULL',
    })
    public measurements: Measurement[];

}
