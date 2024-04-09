import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import {
  TRANSLOCO_SCOPE,
  TranslocoModule,
  TranslocoService
} from '@ngneat/transloco';
import { Subject, filter, pluck, takeUntil } from 'rxjs';
import { TEMP4 } from 'src/app/constants';
import { HelperPipe } from 'src/app/pipe/helper.pipe';
import { TranslocoHelperService } from 'src/app/transloco.service';

@Component({
  selector: 'app-render6',
  standalone: true,
  imports: [CommonModule,HelperPipe, TranslocoModule],
  templateUrl: './render6.component.html',
  styleUrls: ['./render6.component.scss'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'tempD',
      multi: true,
    },
  ],
})
export class Render6Component implements OnInit,OnDestroy {
  object = TEMP4;
  @Input() helperType=false;

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
        this._translocoHelperService.getTranslatedValue(TEMP4);
      });
    } else
    this.constValue = this._translocoHelperService.getTranslatedValue(TEMP4);
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
