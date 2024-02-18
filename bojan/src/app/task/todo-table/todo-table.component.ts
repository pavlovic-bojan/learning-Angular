import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent {
  @Input() allUsers: any = [];

  deleteUserToTable(index: number) {
    this.allUsers.splice(index, 1)
    localStorage.setItem('users', JSON.stringify(this.allUsers))
  }

  ngOnInit(): void {
    this.retrieveDataFromLocalStorage();
  }

  retrieveDataFromLocalStorage(): void {
    const storedData = localStorage.getItem('users');
    if (storedData) {
      try {
        this.allUsers = JSON.parse(storedData);
      } catch (error) {
        console.error('Error parsing data from local storage:', error);
      }
    } else {
      console.warn('No data found in local storage.');
    }
  }
}
