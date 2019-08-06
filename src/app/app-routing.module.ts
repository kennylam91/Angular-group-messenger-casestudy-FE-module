import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LogInComponent} from './component/log-in/log-in.component';
import {GroupviewComponent} from './component/groupview/groupview.component';


const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'chat', component: GroupviewComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
