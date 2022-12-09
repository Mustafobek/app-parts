import { Module } from '@nestjs/common';
import { TelegramBotService } from './services/telegram-bot.service';
import { MailService } from './services/mail.service';
import { SecurityService } from './services/security.service';
import { CustomLoggerService } from './services/logger.service';
import { HelperService } from './services/helper.service';

@Module({
  providers: [
    TelegramBotService,
    MailService,
    SecurityService,
    CustomLoggerService,
    HelperService,
  ],
})
export class SharedModule {}
