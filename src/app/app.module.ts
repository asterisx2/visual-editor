import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditorComponent } from './modules/default/pages/editor/editor.component';
import { SharedModule } from './shared/shared.module';
import {
  DfAccordionModule
} from '@devfactory/ngx-df';
import { DfSplitViewModule } from '@devfactory/ngx-df/split-view';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    DfAccordionModule.forRoot(),
    DfSplitViewModule.forRoot(),
  ],
  exports: [
    DfAccordionModule,
    DfSplitViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
