import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private transloco: TranslocoService) {}
  showData = false;
  getLang(array: string[]): string {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  switchLang() {
    const lang = this.transloco.getActiveLang();
    const langList = this.transloco.getAvailableLangs() as string[];
    const availableLangList = langList.filter((item) => item != lang);
    const activeLang = this.getLang(availableLangList);
    this.transloco.setActiveLang(activeLang);
  }
}
