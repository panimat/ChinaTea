import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModuleModule } from './modules/material-module/material-module.module';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BannerComponent } from './banner/banner.component';
import { BootstrapModule } from './modules/bootstrap-module';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TeaCardComponent } from './tea-card/tea-card.component';
import { PagerComponent } from './pager/pager.component';

//mport {NestedMenuExample} from './app/nested-menu-example';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ShowcaseComponent,
    ProductListComponent,
    TeaCardComponent,
    PagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    BootstrapModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
