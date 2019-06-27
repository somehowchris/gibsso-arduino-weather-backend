import { IsNumber } from 'class-validator';

export class Point {
    @IsNumber()
    public x: number;

    @IsNumber()
    public y: number;
}
