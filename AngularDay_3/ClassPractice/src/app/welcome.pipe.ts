import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome',
  standalone: true 
})
export class WelcomePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return `${value} welcome to the workshop on Angular Application Development`;
  }

}
