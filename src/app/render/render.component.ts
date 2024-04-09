import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  TRANSLOCO_SCOPE,
  TranslocoModule,
  TranslocoService
} from '@ngneat/transloco';
import { Subject, takeUntil } from 'rxjs';
import { TEMP } from '../constants';
import { HelperPipe } from '../pipe/helper.pipe';
import { TranslocoHelperService } from './../transloco.service';
import { Render1Component } from './render1/render1.component';
import { Render2Component } from './render2/render2.component';
import { Render3Component } from './render3/render3.component';
import { Render4Component } from './render4/render4.component';
import { Render5Component } from './render5/render5.component';
import { Render6Component } from './render6/render6.component';
import { Render7Component } from './render7/render7.component';
import { Render8Component } from './render8/render8.component';
import { Render9Component } from './render9/render9.component';

@Component({
  selector: 'app-render',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoModule,
    HelperPipe,
    Render1Component,
    Render2Component,
    Render3Component,
    Render4Component,
    Render5Component,
    Render6Component,
    Render7Component,
    Render8Component,
    Render9Component,
  ],
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'temp',
      multi: true,
    },
  ],
})
export class RenderComponent implements OnInit, OnDestroy {
  helperType = false;
  object = TEMP;
  constValue: Map<string, string | null> = new Map();
  constructor(
    private _transloco: TranslocoService,
    private _translocoHelperService: TranslocoHelperService
  ) {}
  destroy$ = new Subject();
  private scope = inject(TRANSLOCO_SCOPE);
  ngOnInit(): void {
    if (this.helperType) {
      this.onTranslationLoadSuccess();
      this._transloco.langChanges$
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.onTranslationLoadSuccess();
        });
    }
  }

  onTranslationLoadSuccess() {
    const scopeValue = this.scope?.toString() ?? '';
    if (!this.isScopeTranslated(scopeValue)) {
      const scopeWithLang = scopeValue + '/' + this._transloco.getActiveLang();
      this._transloco
        .selectTranslation(scopeWithLang)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.constValue =
            this._translocoHelperService.getTranslatedValue(TEMP);
        });
    } else
      this.constValue = this._translocoHelperService.getTranslatedValue(TEMP);
  }
  isScopeTranslated(scope: string): boolean {
    const data = this._transloco.translate(scope + '.apitokens');
    return data !== scope + '.apitokens';
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
