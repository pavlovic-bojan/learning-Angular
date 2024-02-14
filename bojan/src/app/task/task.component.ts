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
    localStorage.setItem('users', JSON.stringify(this.allUsers))
  }

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
