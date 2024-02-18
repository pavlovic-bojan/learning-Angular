import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  @Output() onFormSubmit = new EventEmitter<any>();

  createUserModal = {
    firstName: '',
    lastName: '',
    birthdaytime: ''
  }

  addUserToTable() {
    this.onFormSubmit.emit(this.createUserModal)
  }

}
