import { Injectable, NgModule } from "@angular/core";
import { TranslocoModule, provideTransloco } from "@ngneat/transloco";
import { TranslocoHttpLoader } from "./transloco-loader";

@Injectable({ providedIn: "root" })
@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideTransloco({
        config: {
          prodMode: false,
          availableLangs: ['en', 'es', 'pt','fr'],
          reRenderOnLangChange: true,
          fallbackLang: 'es',
          defaultLang: 'en',
          missingHandler: {
            useFallbackTranslation: false,
          },
        },
        loader: TranslocoHttpLoader,
      }),
  ],
})
export class TranslocoRootModule { }
