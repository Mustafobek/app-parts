import { Injectable } from '@nestjs/common';

@Injectable()
export class HelperService {
  constructor() {}

  // 2022-12-09T20:56:12.331Z
  formatDate() {
    const nd = new Date();
    const date = nd.toString().split('T')[0].split('-').reverse().join('-');
    const time = nd.toString().split('T')[1].split('.')[0];

    return {
      date,
      time,
    };
  }

  parse(str: string): any {
    return JSON.parse(str);
  }

  stringify(data: any): string {
    return JSON.stringify(data);
  }

  deepCopy<T>(data: T): T {
    return this.parse(this.stringify(data));
  }
}
