import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './task/todo-form/todo-form.component';
import { TodoTableComponent } from './task/todo-table/todo-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TodoFormComponent,
    TodoTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
