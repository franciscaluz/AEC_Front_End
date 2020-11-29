import { Pipe, PipeTransform } from '@angular/core';
import { Forfaits } from './forfaits';
@Pipe({
  name: 'ratings'
})
export class RatingsPipe implements PipeTransform {

  transform(forfaits: Forfaits[]): Forfaits[] {
    return null;
  }

}
