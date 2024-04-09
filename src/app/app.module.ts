import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelperPipe } from './pipe/helper.pipe';
import { RangeGeneratorPipe } from './pipe/range-generator.pipe';
import { RenderComponent } from './render/render.component';
import { TranslocoRootModule } from './transloco-root.module';
import { TranslocoHelperService } from './transloco.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RenderComponent,
    RangeGeneratorPipe,
    HelperPipe,
    TranslocoRootModule,
  ],
  providers: [TranslocoRootModule, TranslocoHelperService],

  bootstrap: [AppComponent],
})
export class AppModule {}
