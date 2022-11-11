import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PERSISTENCE } from '@angular/fire/compat/auth';

//Firebase
import { AngularFireModule } from '@angular/fire/compat';

//Environment
import { environment } from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//Material
import {MatTooltipModule} from '@angular/material/tooltip';
import { WebComponent } from './components/web/web.component';
import { FooterComponent } from './components/web/footer/footer.component';
import { HeaderComponent } from './components/web/header/header.component';
import { NavbarComponent } from './components/web/navbar/navbar.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    WebComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    MatTooltipModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: PERSISTENCE, useValue: 'session' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
