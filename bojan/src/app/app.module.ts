import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './task/todo-form/todo-form.component';
import { TodoTableComponent } from './task/todo-table/todo-table.component';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponentComponent } from './note-component/note-component.component';

const routes : Routes=[
  {
    path: '',
    component: NoteComponentComponent
  },
  {
    path: 'task',
    component: TaskComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TodoFormComponent,
    TodoTableComponent,
    NoteComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
