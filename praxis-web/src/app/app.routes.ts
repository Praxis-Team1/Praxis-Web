import { RouterModule, Routes } from '@angular/router'
import { StudentinfoComponent } from './components/signUp/studentinfo/studentinfo.component';
import { RecordvideoComponent } from './components/signUp/recordvideo/recordvideo.component';
import { ValidatedataComponent } from './components/signUp/validatedata/validatedata.component';
import { LoginComponent } from './components/login/login.component';
import { FinishSignUpComponent } from './components/signUp/finish-sign-up/finish-sign-up.component';
import {SurveyComponent} from './components/students/survey/survey.component';

export const ROUTES: Routes = [

    /*Faltaria login */
    { path: 'student/login', component: LoginComponent },
    { path: 'student/signUp/step1', component: StudentinfoComponent },
    { path: 'student/signUp/step2', component: RecordvideoComponent },
    { path: 'student/signUp/step3', component:  ValidatedataComponent },
    { path: 'student/signUp/step4', component:  FinishSignUpComponent },
    { path: 'student/students/survey', component:  SurveyComponent },
    { path: '', pathMatch: 'full', redirectTo: 'student/login' },
    { path: '**', pathMatch: 'full', redirectTo: 'student/login' }
];
