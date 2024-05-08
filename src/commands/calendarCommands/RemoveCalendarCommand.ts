import { Message, PermissionFlagsBits } from 'discord.js';
import { ICommand } from '../ICommand.js';
import { IGoogleCalendarDataService } from '../../dataservices/interfaces/IGoogleCalendarDataServce.js';

export class RemoveCalendarCommand implements ICommand {
    name: string = 'Remove calendar';
    description: string = 'Removes a calendar from the collection';

    private readonly _service: IGoogleCalendarDataService;

    constructor(service: IGoogleCalendarDataService) {
        this._service = service;
    }

    trigger(message: Message<boolean>): boolean {
        const content = message.content.trim().toLowerCase();
        if (content.split(' ').length !== 2) return false;
        return content.startsWith('remove-calendar ') || content.startsWith('/remove-calendar ');
    }

    async execute(message: Message<boolean>): Promise<void> {
        const url = message.content.trim().split(' ')[1];
        const member = message.member;
        if (member == null) {
            message.reply('Sorry, this action is not supported in this context.');
            return;
        }

        const isAdmin = member.permissions.has(PermissionFlagsBits.Administrator);
        const isMentor = member.roles.cache.some(r => r.name === 'Mentor');
        if (!isAdmin && !isMentor) {
            message.reply('Sorry, this action is restricted to certain users.');
            return;
        }

        const matchingCalendar = (await this._service.getAll()).filter(c => c.url === url);
        if (matchingCalendar.length == 0) {
            message.reply('The requested calendar was not being tracked.');
            return;
        }

        let success = true;
        for (let i = 0 ; i < matchingCalendar.length ; i++) {
            success = success && await this._service.delete(matchingCalendar[i].id);
        }

        if (!success) {
            message.reply('Unable to stop tracking the calendar at this time');
            return;
        }

        message.reply(`No longer tracking calendar at: ${url}`);
    }
}