import { Pipe, PipeTransform } from "@angular/core";
import { ColorModel } from "./../models/ColorModel";

@Pipe({
  name: "colorFilter",
})
export class ColorFilterPipe implements PipeTransform {
  transform(value: ColorModel[], filterTexttt: string): ColorModel[] {
    filterTexttt = filterTexttt ? filterTexttt.toLocaleLowerCase() : null;
    return filterTexttt
      ? value.filter(
          (c: ColorModel) =>
            c.name.toLocaleLowerCase().indexOf(filterTexttt) !== -1
        )
      : value;
  }
}
