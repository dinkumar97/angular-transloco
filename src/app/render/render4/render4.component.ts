import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEMP6 } from 'src/app/constants';
import {
  TRANSLOCO_SCOPE,
  TranslocoModule,
  TranslocoService,
  provideTranslocoScope,
} from '@ngneat/transloco';
import { TranslocoHelperService } from 'src/app/transloco.service';
import { Subject, filter, pluck, takeUntil } from 'rxjs';
import { HelperPipe } from 'src/app/pipe/helper.pipe';

@Component({
  selector: 'app-render4',
  standalone: true,
  imports: [CommonModule, HelperPipe, TranslocoModule],
  templateUrl: './render4.component.html',
  styleUrls: ['./render4.component.scss'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'tempF',
      multi: true,
    },
  ],
})
export class Render4Component implements OnInit,OnDestroy {
  object = TEMP6;
  @Input() helperType = false;

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
        this._translocoHelperService.getTranslatedValue(TEMP6);
      });
    } else
      this.constValue = this._translocoHelperService.getTranslatedValue(TEMP6);
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
