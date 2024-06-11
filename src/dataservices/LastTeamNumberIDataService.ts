import { IFirstProgram } from '../models/IFirstProgram.js';
import { ILastTeamNumber } from '../models/ILastTeamNumber.js';
import { ProgramUtilities } from '../utility/ProgramUtilities.js';
import { ILastTeamNumberDataService } from './interfaces/ILastTeamNumberDataService.js';
import { Database } from 'sqlite';
import sqlite3 from 'sqlite3';

export class LastTeamNumberDataService implements ILastTeamNumberDataService {
  private readonly _database: Database<sqlite3.Database, sqlite3.Statement>;

  constructor(database: Database<sqlite3.Database, sqlite3.Statement>) {
    this._database = database;
  }

  async get(id: number): Promise<ILastTeamNumber> {
    const sql = 'SELECT * FROM LastTeamNumbers WHERE id = ?';
    const row = await this._database.get(sql, [id]);
    return row as ILastTeamNumber;
  }

  async getAll(): Promise<ILastTeamNumber[]> {
    const sql = 'SELECT * FROM LastTeamNumbers';
    const results = await this._database.all(sql);
    if (results == null) return [] as ILastTeamNumber[];
    return results as ILastTeamNumber[];
  }

  async getByProgram(program: IFirstProgram): Promise<ILastTeamNumber> {
    const programCode = ProgramUtilities.mapProgramToCode(program);
    if (program == null) return null;
    const sql = 'SELECT * FROM LastTeamNumbers WHERE programCode = ?';
    const row = await this._database.get(sql, [programCode]);
    return row as ILastTeamNumber;
  }

  async update(id: number, updatedRecord: ILastTeamNumber): Promise<ILastTeamNumber> {
    const sql = 'UPDATE LastTeamNumbers SET programCode = ?, lastTeamNumber = ? WHERE id = ?';
    const result = await this._database.run(sql, [updatedRecord.programCode, updatedRecord.lastTeamNumber, id]);
    if (result.changes == 0) return await this.get(id);
    return updatedRecord;
  }

  async upsert(record: ILastTeamNumber): Promise<ILastTeamNumber> {
    if (record == null) return null;
    if (record.id > 0) return await this.update(record.id, record);
    return await this.insert(record);
  }

  async insert(record: ILastTeamNumber): Promise<ILastTeamNumber> {
    const matching = (await this.getAll()).filter(c => c.programCode == record.programCode);
    if (matching.length > 0) return matching[0];

    const sql = 'INSERT INTO LastTeamNumbers (programCode, lastTeamNumber) VALUES (?,?)';
    const result = await this._database.run(sql, [record.programCode, record.lastTeamNumber]);
    if (!result.lastID) return null;
    return await this.get(result.lastID);
  }
}