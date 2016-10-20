import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NaturalRemedy } from './remedy.model';

@Component({
  selector: 'remedy-list',
  template: `
    <div *ngFor="let remedy of childNaturalRemedyList">
      <h3>{{ remedy.name }}</h3>
      <button class="btn btn-warning" (click)="editButtonHasBeenClicked(remedy)">Edit</button>
    </div>
  `
})

export class RemedyListComponent {
  @Input() childNaturalRemedyList: NaturalRemedy[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(remedyToEdit: NaturalRemedy) {
    this.clickSender.emit(remedyToEdit);
  }
}
