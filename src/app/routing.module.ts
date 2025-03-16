import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PopularComponent } from './home/popular/popular.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { canActivated, resolved } from './auth.gaurd';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent, canDeactivate: [(comp: ContactComponent) => { return comp.canExit() }] }, //confirm
  { path: 'courses', component: CoursesComponent, resolve:{courses: resolved} },
  {
    path: 'courses', canActivateChild: [canActivated], children: [ //if login then see the child pages
      { path: 'course/:id', component: CourseDetailComponent }, 
      { path: 'popular', component: PopularComponent },
      { path: 'checkout', component: CheckoutComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
