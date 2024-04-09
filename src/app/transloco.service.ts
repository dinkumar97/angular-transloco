import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
interface MyObject {
  [key: string]: any;
}
@Injectable({
  providedIn: 'root',
})
export class TranslocoHelperService {
  // Mention the commonly used keys here and use it across the application.
  // Individual keys can be translated at the component level
  generalKeys: Map<string, string> = new Map();
  buttonKeys: Map<string, string> = new Map();

  constructor(private _translocoService: TranslocoService) {}

  getTranslatedValue(constants: any) {
    const flattendObject: MyObject = {};
    let initialMapValue: Map<string, string> = new Map();
    this.getFlattenedObject(constants, flattendObject);
    if (flattendObject) {
      let initialMapValue = new Map<string, string | null>(
        Object.keys(flattendObject).map((k) => [flattendObject[k], null])
      );
      const translatedValues =
        this._translocoService.translateObject(initialMapValue);
      const allKeys = Object.keys(flattendObject).map((k) => flattendObject[k]);
      for (let index = 0; index < Array.from(initialMapValue).length; index++) {
        initialMapValue.set(allKeys[index], translatedValues[index]);
      }
      return initialMapValue;
    }
    return initialMapValue;
  }

  private getFlattenedObject(constants: any, flattendObject: any) {
    Object.keys(constants).forEach((key) => {
      if (typeof constants[key] === 'object') {
        this.getFlattenedObject(constants[key], flattendObject);
      } else {
        flattendObject[key] = constants[key];
      }
    });
  }
}
