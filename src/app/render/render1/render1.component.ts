import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import {
  TRANSLOCO_SCOPE,
  TranslocoModule,
  TranslocoService
} from '@ngneat/transloco';
import { Subject, takeUntil } from 'rxjs';
import { TEMP9 } from 'src/app/constants';
import { HelperPipe } from 'src/app/pipe/helper.pipe';
import { TranslocoHelperService } from 'src/app/transloco.service';

@Component({
  selector: 'app-render1',
  standalone: true,
  imports: [CommonModule, TranslocoModule, HelperPipe],
  templateUrl: './render1.component.html',
  styleUrls: ['./render1.component.scss'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'tempI',
      multi: true,
    },
  ],
})
export class Render1Component implements OnInit,OnDestroy {
  object = TEMP9;
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
          this._translocoHelperService.getTranslatedValue(TEMP9);
      });
    } else
      this.constValue = this._translocoHelperService.getTranslatedValue(TEMP9);
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
