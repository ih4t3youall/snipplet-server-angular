import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SnippletComponent } from './snipplet/snipplet.component';
import { CategoryComponent } from './category/category.component';
import { SnippletListComponent } from './snipplet/snipplet-list/snipplet-list.component';
import { SnippletItemComponent } from './snipplet/snipplet-list/snipplet-item/snipplet-item.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryItemComponent } from './category/category-list/category-item/category-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SnippletComponent,
    CategoryComponent,
    SnippletListComponent,
    SnippletItemComponent,
    CategoryListComponent,
    CategoryItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
