import { ICommand } from '../ICommand.js';
import { Message } from 'discord.js';

export class WompCommand implements ICommand {
  name: string = 'womp';
  description: string = 'Womp womp';

  trigger(message: Message): boolean {
    const content = message.content.toLowerCase().stripPunctuation().trim();
    const hasWomp = content.includes('womp');
    if (!hasWomp) return false;

    const hasNothingElse = content.replaceAll('womp', '').trim().length == 0;
    return hasNothingElse;
  }

  async execute(message: Message): Promise<void> {
    await message.reply({
      files: ['./img/womp-womp.gif']
    });
  }
}