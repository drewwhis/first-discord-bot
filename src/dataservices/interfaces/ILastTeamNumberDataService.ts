import { IFirstProgram } from '../../models/IFirstProgram.js';
import { ILastTeamNumber } from '../../models/ILastTeamNumber.js';

export interface ILastTeamNumberDataService {
    get(id: number): Promise<ILastTeamNumber>;
    getAll(): Promise<ILastTeamNumber[]>;
    getByProgram(program: IFirstProgram): Promise<ILastTeamNumber>;
    update(id: number, updatedRecord: ILastTeamNumber): Promise<ILastTeamNumber>;
    upsert(record: ILastTeamNumber): Promise<ILastTeamNumber>;
    insert(record: ILastTeamNumber): Promise<ILastTeamNumber>;
}