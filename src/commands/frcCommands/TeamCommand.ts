import { ILastTeamNumberDataService } from '../../dataservices/interfaces/ILastTeamNumberDataService.js';
import { IFirstProgram } from '../../models/IFirstProgram.js';
import { IFirstPublicApiWebService } from '../../webservices/interfaces/IFirstPublicApiWebService.js';
import { ICommand } from '../ICommand.js';
import { Message } from 'discord.js';

export class TeamCommand implements ICommand {
  name: string = 'team';
  description: string = 'Gets the URL of a team\'s Blue Alliance page for the current year.';

  private readonly _firstPublicApi: IFirstPublicApiWebService;
  private readonly _teamNumbers: ILastTeamNumberDataService;

  constructor(firstPublicApi: IFirstPublicApiWebService, teamNumbers: ILastTeamNumberDataService) {
    this._firstPublicApi = firstPublicApi;
    this._teamNumbers = teamNumbers;
  }

  public trigger(message: Message): boolean {
    if (message.content.includes('.')) return false;
    if (message.content.includes(',')) return false;
    const team = Number(message.content.trim());
    return Number.isInteger(team) && team > 0;
  }

  public async execute(message: Message): Promise<void> {
    const team = Number(message.content.trim());
    const lastNumber = await this._teamNumbers.getByProgram(IFirstProgram.FRC);
    if (lastNumber == null) return;
    if (lastNumber.lastTeamNumber < team) return;
    
    const year = await this._firstPublicApi.getCurrentSeason(IFirstProgram.FRC, false);

    const reply =
      `Check out Team ${team} this season (${year}) on`
      + '\n'
      + `- The Blue Alliance: <https://www.thebluealliance.com/team/${team}/${year}>`
      + '\n'
      + `- FRC Events: <https://frc-events.firstinspires.org/${year}/team/${team}>`
      + '\n'
      + `- Statbotics: <https://www.statbotics.io/team/${team}/${year}>`
      + '\n\n'
      + `If data for the current season is not yet available, you can also try last season (${year - 1}) on`
      + '\n'
      + `- The Blue Alliance: <https://www.thebluealliance.com/team/${team}/${year - 1}>`
      + '\n'
      + `- FRC Events: <https://frc-events.firstinspires.org/${year - 1}/team/${team}>`
      + '\n'
      + `- Statbotics: <https://www.statbotics.io/team/${team}/${year - 1}>`;

    await message.reply(reply);
  }
}