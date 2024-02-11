import { Component } from '@angular/core'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  name='Task 1'

  createUserModal = {
    firstName: '',
    lastName: ''
  }

  allUsers:any []= []

  addUserToTable() {
    console.log(this.createUserModal)
    this.allUsers.push(structuredClone(this.createUserModal))
    console.log(this.allUsers)
  }

  deleteUserToTable(index: number) {
    this.allUsers.splice(index, 1)
  }

}
