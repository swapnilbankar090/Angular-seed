import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode'
})
export class CountrycodePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    // your logic here
    // that is user-defind pipes

    if (value == "India")
      return "IND";
    else if(value=="China")
      return "CHN";
    else if(value=="USA")
      return "USA";
    else
    return value.substring(0,3).toUpperCase();
  }

}
