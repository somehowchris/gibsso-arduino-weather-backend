import { Body } from 'routing-controllers';

import { Get, JsonController, Post } from '@mardari/routing-controllers';

import { Measurement } from '../models/Measurement';
import { MeasurementService } from '../services/MeasurementService';
import { MeasurementRequest } from './requests/MeasurementRequest';

@JsonController('/measurements')
export class MeasurementController {
    constructor(
        private measurementService: MeasurementService
        ) {}

    @Get('/latest')
    public getLatestMeasurement(): Promise<Measurement> {
        return this.measurementService.getLatest();
    }

    @Post('')
    public createMeasurement(@Body() body: MeasurementRequest): Promise<Measurement> {
        return this.measurementService.create(body);
    }
}
