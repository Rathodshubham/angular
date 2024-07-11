import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, RouterLink } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';import { appConfig } from './app/app.config';
 

const routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});