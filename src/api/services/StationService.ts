import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Station } from '../models/Station';

@Service()
export class StationService {

    constructor(
        @OrmRepository(Station) private stationRepository: Repository<Station>
    ) { }

    public findOne(id: string): Promise<Station> {
        return this.stationRepository.findOne(id, {relations: ['measurements']});
    }

    public getLatestMeasurement(id: string): Promise<Station> {
        return this.stationRepository.createQueryBuilder('station').leftJoinAndSelect('station.measurements', 'measurements').limit(1).getOne();
    }

    public getNearest(geo: {x: string, y: string}): Promise<Station> {
        return undefined;
    }

    public find(): Promise<Station[]> {
        return this.stationRepository.find();
    }

}
