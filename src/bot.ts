import { Client, Events, IntentsBitField, Partials } from "discord.js";
import { configure, error, info, transports } from "winston";
import auth from "../auth/auth.json";
import { BetCommand } from "./commands/funCommands/BetCommand";
import { GameCommand } from "./commands/funCommands/GameCommand";
import { MainGoalCommand } from "./commands/funCommands/MainGoalCommand";
import { ManualCommand } from "./commands/funCommands/ManualCommand";
import { LogCommand } from "./commands/LogCommand.js";
import { DanceCommand } from "./commands/funCommands/DanceCommand.js";
import { TeamCommand } from "./commands/frcCommands/TeamCommand.js";
import { ImagineCommand } from "./commands/funCommands/ImagineCommand.js";
import { RespectsCommand } from "./commands/funCommands/RespectsCommand";
import { DoubtCommand } from "./commands/funCommands/DoubtCommand";
import { AtMeCommand } from "./commands/funCommands/AtMeCommand";
import { TsimfdCommand } from "./commands/funCommands/TsimfdCommand";
import { BonkCommand } from "./commands/funCommands/BonkCommand";

// Configure default logger settings
configure({
  level: "info",
  transports: [new transports.Console()],
});

// Initialize Discord Bot commands
const myIntents = new IntentsBitField();
myIntents.add(
  IntentsBitField.Flags.MessageContent, 
  IntentsBitField.Flags.Guilds, 
  IntentsBitField.Flags.GuildMessages,
  IntentsBitField.Flags.DirectMessages
);

const bot = new Client({ 
  intents: myIntents,
  partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

const commands = [
  new TsimfdCommand(),
  // TODO: Fix and re-enable
  // new AtMeCommand(),
  new BetCommand(),
  new RespectsCommand(),
  new DoubtCommand(),
  new MainGoalCommand(),
  new GameCommand(),
  new ManualCommand(),
  new LogCommand(),
  new DanceCommand(),
  new TeamCommand(),
  new ImagineCommand(),
  new BonkCommand()
];

// Connect
bot.once(Events.ClientReady, readyClient => {
	info(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Handle message
bot.addListener(Events.MessageCreate, async (message) => {
  // Ignore bot messages
  if (message.author.bot) {
    return;
  }

  // Parse the message into words
  const args = message.content
    .toLowerCase()
    .slice()
    .split(/ +/);

  // Execute triggered commands.
  for (const command of commands) {
    if (command != null && command.trigger(message)) {
      try {
        await command.execute(message, args);
      } catch (e) {
        error(e.message);
      }
    }
  }
});

// Start bot.
bot.login(auth.token);
