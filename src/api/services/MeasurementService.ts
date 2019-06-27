import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { MeasurementRequest } from '../controllers/requests/MeasurementRequest';
import { Measurement } from '../models/Measurement';
import { Station } from '../models/Station';

@Service()
export class MeasurementService {

    constructor(
        @OrmRepository(Measurement) private measurementRepository: Repository<Measurement>,
        @OrmRepository(Station) private stationRepository: Repository<Station>
    ) { }

    public getLatest(): Promise<Measurement> {
        return this.measurementRepository.createQueryBuilder('measurement').orderBy('measurement.createdAt').getOne();
    }

    public async create(req: MeasurementRequest): Promise<Measurement> {

        let station = await this.stationRepository.findOne({name: req.stationName});

        if (!station) {
            station = new Station();
            station.name = req.stationName;
            station = await this.stationRepository.save(station);
        }

        const measurement = new Measurement();
        measurement.sensorType = req.type;
        measurement.value = req.value;
        measurement.station = station;
        return this.measurementRepository.save(measurement);
    }

}
