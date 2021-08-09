import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCoin'
})
export class FormatCoinPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    return args[0]+" : "+Number(value).toFixed(2);
  }

}
