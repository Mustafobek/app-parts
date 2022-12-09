import { Injectable } from '@nestjs/common';
import { Telegraf, Context } from 'telegraf';
import { TELEGRAM_BOT_TOKEN } from '../../constants';
import { CustomLoggerService } from './logger.service';

const BotCommands = {
  help: 'help',
  status: 'status',
  // [...]
};

@Injectable()
export class TelegramBotService {
  bot = new Telegraf(TELEGRAM_BOT_TOKEN);

  constructor(private loggerService: CustomLoggerService) {
    this.launchBot();
  }

  private async launchBot() {
    try {
      await this.bot.launch({});
    } catch (e) {
      this.loggerService.error(e, 'Telegram bot', 'launch bot');
    }
  }

  private onBotStart() {
    this.bot.start(async (ctx) => {});

    this.bot.command(BotCommands.help, async (ctx) => {});

    this.bot.command(BotCommands.status, async (ctx) => {});
  }

  async sendMessage(ctx: Context, message: string) {
    try {
      await ctx.sendMessage(message);
    } catch (e) {
      this.loggerService.error(e, 'Telegram bot', 'send message');
    }
  }
}
