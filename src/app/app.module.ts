import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioContainerComponent } from './portfolio-container/portfolio-container.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioItemComponent } from './portfolio-container/portfolio-item/portfolio-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioModalComponent } from './portfolio-container/portfolio-modal/portfolio-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutMeComponent,
    PortfolioContainerComponent,
    ContactComponent,
    PortfolioItemComponent,
    PortfolioModalComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PortfolioModalComponent]
})
export class AppModule { }
