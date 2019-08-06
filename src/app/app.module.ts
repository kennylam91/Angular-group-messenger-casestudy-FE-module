import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMessageComponent } from './component/all-message/all-message.component';
import { NewMessageComponent } from './component/new-message/new-message.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './component/user/user.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { UserListComponent } from './component/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AllMessageComponent,
    NewMessageComponent,
    UserComponent,
    LogInComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
