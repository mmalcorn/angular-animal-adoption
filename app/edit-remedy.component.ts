import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NaturalRemedy } from './remedy.model';

@Component({
  selector: 'edit-remedy',
  template: `
    <div *ngIf="childSelectedRemedy">
      <h2>Edit Remedy</h2>
      <div class="form-group">
        <label>Name:
        <input class="form-control" [(ngModel)]="childSelectedRemedy.name">
        </label>
      </div>
      <div class="form-group">
        <label>Source:
        <input class="form-control" [(ngModel)]="childSelectedRemedy.source">
        </label>
      </div>
      <div class="form-group">
        <label>Price:
        <input class="form-control" [(ngModel)]="childSelectedRemedy.price">
        </label>
      </div>
      <div class="form-group">
        <label>Ailment(s):</label>
        <input class="form-control" [(ngModel)]="childSelectedRemedy.ailment">
        <button class="btn btn-success" (click)="finishedEditing()">Done</button>
      </div>
    </div>
  `
})

export class EditRemedyComponent {
  @Input() childSelectedRemedy: NaturalRemedy;
}
