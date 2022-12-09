import { Injectable, Logger, LoggerService } from '@nestjs/common';
import * as chalk from 'chalk';
import { HelperService } from './helper.service';

@Injectable()
export class CustomLoggerService implements LoggerService {
  constructor(private helperService: HelperService) {}

  log(message: any): any {
    console.log(
      chalk.blue(
        `[INFO] :: ${this.helperService.formatDate().date} - ${this.helperService.formatDate().time} - ${message}`,
      ),
    );
  }

  error(message: any, serviceOrController: string, errorLevel: string): any {
    console.log(
      chalk.red(
        `[ERROR] :: ${this.helperService.formatDate().date} - ${this.helperService.formatDate().time} [${serviceOrController} - ${errorLevel}] - ${message}`,
      ),
    );
  }

  warn(message: any, ...optionalParams): any {}
}
