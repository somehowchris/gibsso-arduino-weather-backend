// TODO nearest
// TODO get latest

import { JsonController } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';

import { Authorized, Body, Get, Param } from '@mardari/routing-controllers';

import { Measurement } from '../models/Measurement';
import { Station } from '../models/Station';
import { StationService } from '../services/StationService';

@Authorized()
@JsonController('/station')
export class StationController {
    constructor(
        private stationService: StationService
    ) { }

    @Get('/:id/measurement/latest')
    @ResponseSchema(Station, {
        isArray: false,
    })
    @OpenAPI({
        summary: 'Get the latest measurement',
        description: '',
    })
    public getLatestMeasurement(@Param('id') stationId: string): Promise<Station> {
        return this.stationService.getLatestMeasurement(stationId);
    }

    @Get('')
    @ResponseSchema(Station, {
        isArray: false,
    })
    @OpenAPI({
        summary: 'Get the all stations',
        description: '',
    })
    public getStations(): Promise<Station[]> {
        return this.stationService.find();
    }

    @Get('/nearest')
    @ResponseSchema(Station, {
        isArray: false,
    })
    @OpenAPI({
        summary: 'Get a station',
        description: '',
    })
    public getStationByGeo(@Body() geo: {x: string, y: string}): Promise<Station> {
        return this.stationService.getNearest(geo);
    }

    @Get('/:id')
    @ResponseSchema(Measurement, {
        isArray: false,
    })
    @OpenAPI({
        summary: 'Get a station',
        description: '',
    })
    public getStationById(@Param('id') id: string): Promise<Station> {
        return this.stationService.findOne(id);
    }
}
