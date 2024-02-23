import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent {
  @Input() allTask: any = [];

  deleteTaskToTable(index: number) {
    this.allTask.splice(index, 1)
    localStorage.setItem('task', JSON.stringify(this.allTask))
  }

  ngOnInit(): void {
    this.retrieveDataFromLocalStorage();
  }

  retrieveDataFromLocalStorage(): void {
    const storedData = localStorage.getItem('task');
    if (storedData) {
      try {
        this.allTask = JSON.parse(storedData);
      } catch (error) {
        console.error('Error parsing data from local storage:', error);
      }
    } else {
      console.warn('No data found in local storage.');
    }
  }
}
