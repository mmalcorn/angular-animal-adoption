import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Natural Remedies</h1>
    <div *ngFor="let remedy of naturalremedies">
      <h3>{{ remedy.name }}</h3>
      <button class="btn btn-warning" (click)="displayDetails(remedy)">Edit</button>
    </div>
    <div *ngIf="selectedRemedy">
      <h2>Edit Remedy</h2>
      <div class="form-group">
        <label>Name:
        <input class="form-control" [(ngModel)]="selectedRemedy.name">
        </label>
      </div>
      <div class="form-group">
        <label>Source:
        <input class="form-control" [(ngModel)]="selectedRemedy.source">
        </label>
      </div>
      <div class="form-group">
        <label>Price:
        <input class="form-control" [(ngModel)]="selectedRemedy.price">
        </label>
      </div>
      <div class="form-group">
        <label>Ailment(s):</label>
        <input class="form-control" [(ngModel)]="selectedRemedy.ailment">
        <button class="btn btn-success" (click)="finishedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public naturalremedies: NaturalRemedy[] = [
    new NaturalRemedy("Nux Vomica", "Tree seed", 9.99, ["asthma", " rheumatism", "hemorrhoids"]),
    new NaturalRemedy("Rosehip Seed Oil", "Fruit", 19.99, ["reduces wrinkles ", "eczema", "minimize appearance of scars "]),
  ];
  selectedRemedy: NaturalRemedy = null;
  displayDetails(clickedRemedy: NaturalRemedy) {
    this.selectedRemedy = clickedRemedy;
  }
  finishedEditing() {
    this.selectedRemedy = null;
  }
}

export class NaturalRemedy {
  constructor(public name: string, public source: string, public price: number, public ailment: string[]) {   }
}
