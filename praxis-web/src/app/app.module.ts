import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BootstrapAlertModule } from 'ngx-bootstrap-alert-service';


import { AppComponent } from './app.component';
import { StudentinfoComponent } from './components/signUp/studentinfo/studentinfo.component';
import { RecordvideoComponent } from './components/signUp/recordvideo/recordvideo.component';
import { ValidatedataComponent } from './components/signUp/validatedata/validatedata.component';
import { LoginComponent } from './components/login/login.component';
import { InitialNavbarComponent } from './components/shared/initial-navbar/initial-navbar.component';
import { FinishSignUpComponent } from './components/signUp/finish-sign-up/finish-sign-up.component';
import { MainmenuNavbarComponent } from './components/shared/mainmenu-navbar/mainmenu-navbar.component';

//Routes.
import { ROUTES } from './app.routes';


//Services
import { helperService } from './services/helperService';
import { storageVideoService } from './services/storagevideoService';
import { httpService } from './services/httpService';
import { generalService } from './services/generalService';
import { MainmenuComponent } from './components/student/mainmenu/mainmenu.component';
import { GradesComponent } from './components/student/grades/grades.component';





@NgModule({
  declarations: [
    AppComponent,
    StudentinfoComponent,
    RecordvideoComponent,
    ValidatedataComponent,
    LoginComponent,
    InitialNavbarComponent,
    FinishSignUpComponent,
    MainmenuNavbarComponent,
    MainmenuComponent,
    GradesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BootstrapAlertModule,
   // HttpClient

  ],
  providers: [
    helperService,
    storageVideoService,
    httpService,
    generalService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
