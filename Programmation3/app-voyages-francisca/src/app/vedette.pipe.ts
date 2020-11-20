import { Pipe, PipeTransform } from '@angular/core';
import { Forfaits } from './forfaits';
@Pipe({
  name: 'vedette'
})
export class VedettePipe implements PipeTransform {

  transform(forfaits: Forfaits[]): Forfaits[] {
    return forfaits.filter(forfait => forfait.vedette === true);
  }
}
