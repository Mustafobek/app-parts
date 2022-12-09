import { Module } from '@nestjs/common';
import { TelegramBotService } from './services/telegram-bot.service';
import { MailService } from './services/mail.service';
import { SecurityService } from './services/security.service';
import { LoggerService } from './services/logger.service';
import { HelperService } from './services/helper.service';

@Module({
  providers: [TelegramBotService, MailService, SecurityService, LoggerService, HelperService]
})
export class SharedModule {}
