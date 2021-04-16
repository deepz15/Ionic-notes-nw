import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.page.html',
  styleUrls: ['./notes-list.page.scss'],
})

export class NotesListPage {

  constructor(public alertCtrl: AlertController) {
    this.displayNotesFromArray();
  }
  notesListArray = [];
  revNotesListArray = [];
  message: string;
  editBx: any;
  editTitle: string;
  editContent: string;
  ind: number;

  displayNotesFromArray = () => {
    const localData = localStorage.getItem('notesData');
    if (localData) {
      this.notesListArray = JSON.parse(localData);
    }
  }

  deleteNotes = (index) => {
    this.notesListArray.splice(index, 1);
    localStorage.setItem('notesData', JSON.stringify(this.notesListArray));
    this.message = 'Notes deleted';
    setTimeout(() => {
      this.message = ' ';
    }, 1000);
  }
  updateNotes() {
    this.editBx = {
      display: 'none'
    };
    // const editedData = {
    //   title: this.editTitle,
    //   content: this.editContent
    // };
    // console.log(this.notesListArray);
    // console.log(this.notesListArray[this.ind].title);
    let s = this.ind;
    this.notesListArray[s].title = this.editTitle;
    this.notesListArray[s].content = this.editContent;
  }
  editNotes(i) {
    this.editBx = {
      display: 'block'
    };
    const arr = this.notesListArray[i];
    this.editTitle = arr.title;
    this.editContent = arr.content;
    this.ind = i;
    console.log(this.ind);

  }
}

