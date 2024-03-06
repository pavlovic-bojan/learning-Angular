import { Component } from '@angular/core';

@Component({
  selector: 'app-note-component',
  templateUrl: './note-component.component.html',
  styleUrls: ['./note-component.component.css']
})
export class NoteComponentComponent {
  isPopupVisible: boolean = false;

  addNote() {
    console.log('Note added');
    this.isPopupVisible = true;
  }

  closePopup() {
    console.log('Popup closed');
    this.isPopupVisible = false;
  }
}
