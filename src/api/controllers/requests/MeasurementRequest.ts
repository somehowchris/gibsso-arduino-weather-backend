import { IsDefined, IsEnum, IsString } from '@mardari/class-validator';

import { SensorType } from '../../models/enums/SensorType';

export class MeasurementRequest {

    @IsString()
    @IsDefined()
    public stationName: string;

    @IsDefined()
    public value: any;

    @IsEnum(SensorType)
    @IsDefined()
    public type: SensorType;
}
