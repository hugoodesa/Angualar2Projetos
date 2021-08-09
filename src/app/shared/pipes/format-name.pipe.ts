import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName'
})
export class FormatNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    //value = value.toLocaleUpperCase()
    return value.substring(0,1).toUpperCase()+value.substring(1).toLowerCase()
  }

}
