import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangeGenerator',
  standalone: true,
})
export class RangeGeneratorPipe implements PipeTransform {
  transform(n: number): number[] {
    return [...Array(n)].map((_, i) => i);
  }
}
