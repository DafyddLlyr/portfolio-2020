import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioContainerComponent } from './portfolio-container/portfolio-container.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioItemComponent } from './portfolio-container/portfolio-item/portfolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutMeComponent,
    PortfolioContainerComponent,
    ContactComponent,
    PortfolioItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
