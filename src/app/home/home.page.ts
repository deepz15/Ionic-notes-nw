import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notesTitleNg: string;
  notesContentNg: string;
  notesImageUrl: any;
  notesSavingArray = [];
  reader = new FileReader();
  constructor() { }

  saveNotesData = () => {
    const dataFromNgModels = {
      title: this.notesTitleNg,
      content: this.notesContentNg,
      image: this.notesImageUrl
    };
    if (!localStorage.getItem('notesData')) {
      this.notesSavingArray.unshift(dataFromNgModels);

      localStorage.setItem('notesData', JSON.stringify(this.notesSavingArray));
    } else {
      const existingData = JSON.parse(localStorage.getItem('notesData'));
      existingData.unshift(dataFromNgModels);
      localStorage.setItem('notesData', JSON.stringify(existingData));
      console.log(localStorage.getItem('notesData'));
    }
    this.notesTitleNg = '';
    this.notesContentNg = '';
    this.notesImageUrl = '';
  }

  imageOnChange(event) {
    const targ = event.target.files[0];
    this.notesImageUrl = targ;
    this.reader.readAsDataURL(targ);
    console.log(this.reader);
    this.notesImageUrl =  this.reader.result;
    console.log( this.notesImageUrl);
  }
}
