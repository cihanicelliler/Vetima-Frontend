import { Pipe, PipeTransform } from '@angular/core';
import { ProductDetail } from '../models/productDetail';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: ProductDetail[], filterText: string): ProductDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() :""
    return filterText
      ? value.filter(
          (c: ProductDetail) =>
            c.productName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }

}
