import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillsComponent } from './skills/skills.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    SkillsComponent,
    TopNavigationComponent,
    AboutComponent,
    PortfolioComponent,
    FooterComponent,
    ContactsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
