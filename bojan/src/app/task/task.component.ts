import { Component } from '@angular/core'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  name='Task 1'

  allTask:any []= []

  addTaskToTable(event: any) {
    console.log("in parent component",event)
    this.allTask.push(structuredClone(event))
    localStorage.setItem('task', JSON.stringify(this.allTask))
  }

}
