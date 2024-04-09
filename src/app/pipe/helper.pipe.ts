import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'helper',
  standalone: true,
})
export class HelperPipe implements PipeTransform {
  transform(
    value: string,
    translatedValues: Map<string, string | null>
  ): string {
    return translatedValues?.get(value) ?? '';
  }
}
