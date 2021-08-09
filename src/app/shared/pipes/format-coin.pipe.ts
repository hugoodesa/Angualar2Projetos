import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCoin'
})
export class FormatCoinPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return args[0]+" : "+value.toFixed(2);
  }

}
