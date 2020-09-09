import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from '@app/shared/guard/auth.guard';
import {LoginComponent} from './login/login.component';
import {ContentComponent} from './content/content.component';
import {MaterialModule} from '@app/shared/module/material.module';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: ContentComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [LoginComponent , ContentComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    RouterModule,
    LoginComponent,
    ContentComponent,
    MaterialModule
  ]
})
export class AppRoutingModule {
}
