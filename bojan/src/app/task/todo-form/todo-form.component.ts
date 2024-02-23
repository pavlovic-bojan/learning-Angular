import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  @Output() onFormSubmit = new EventEmitter<any>();

  createTaskModal = {
    task: '',
    description: '',
    date: '',
    priority: ''
  }

  addTaskToTable() {
    this.onFormSubmit.emit(this.createTaskModal)
  }

}
