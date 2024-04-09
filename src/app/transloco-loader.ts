import { Injectable } from '@angular/core';
import { TranslocoLoader } from '@ngneat/transloco';



@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  getTranslation(lang: string) {
    return import(`../assets/i18n/${lang}.json`).then((res) => res.default);
  }
}