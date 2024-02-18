import { Component } from '@angular/core'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  name='Task 1'

  allUsers:any []= []

  addUserToTable(event: any) {
    console.log("in parent component",event)
    this.allUsers.push(structuredClone(event))
    localStorage.setItem('users', JSON.stringify(this.allUsers))
  }

}
