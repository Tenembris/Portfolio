import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { GithubSectionComponent } from './github-section/github-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MainComponent } from './main/main.component';
import { ExpComponent } from './exp/exp.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    routingComponents,
    GithubSectionComponent,
    MainComponent,
    ExpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
