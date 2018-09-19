import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentinfoComponent } from './components/signUp/studentinfo/studentinfo.component';
import { RecordvideoComponent } from './components/signUp/recordvideo/recordvideo.component';
import { ValidatedataComponent } from './components/signUp/validatedata/validatedata.component';
import { LoginComponent } from './components/login/login.component';
import { InitialNavbarComponent } from './components/shared/initial-navbar/initial-navbar.component';

//Routes.

import { ROUTES } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    StudentinfoComponent,
    RecordvideoComponent,
    ValidatedataComponent,
    LoginComponent,
    InitialNavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
