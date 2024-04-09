import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TRANSLOCO_SCOPE,
  TranslocoModule,
  TranslocoService,
  provideTranslocoScope,
} from '@ngneat/transloco';
import { TEMP2 } from 'src/app/constants';
import { TranslocoHelperService } from 'src/app/transloco.service';
import { Subject, filter, pluck, takeUntil } from 'rxjs';
import { HelperPipe } from 'src/app/pipe/helper.pipe';

@Component({
  selector: 'app-render8',
  standalone: true,
  imports: [CommonModule, HelperPipe, TranslocoModule],
  templateUrl: './render8.component.html',
  styleUrls: ['./render8.component.scss'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'tempB',
      multi: true,
    },
  ],
})
export class Render8Component implements OnInit,OnDestroy {
  @Input() helperType = false;
  object = TEMP2;
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
      this._transloco.langChanges$.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.onTranslationLoadSuccess();
      })
    }
  }

  onTranslationLoadSuccess() {
    const scopeValue = this.scope?.toString() ?? '';
    if (!this.isScopeTranslated(scopeValue)) {
      const scopeWithLang = scopeValue + '/' + this._transloco.getActiveLang();
      this._transloco.selectTranslation(scopeWithLang).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.constValue =
          this._translocoHelperService.getTranslatedValue(TEMP2);
      });
    } else
      this.constValue = this._translocoHelperService.getTranslatedValue(TEMP2);
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
