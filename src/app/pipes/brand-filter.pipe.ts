import { Brand } from './../models/BrandModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: Brand[], filterTextt: string): Brand[] {
    filterTextt = filterTextt?filterTextt.toLocaleLowerCase():null
    return filterTextt?value.filter((b:Brand)=>b.name.toLocaleLowerCase().indexOf(filterTextt)!==-1):value
  }

}
