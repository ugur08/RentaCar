import { CarModel } from './../models/CarModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: CarModel[], filterText: string): CarModel[] {
    filterText = filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((c:CarModel)=>c.carName.toLocaleLowerCase().indexOf(filterText)!==-1):value
  }

}
