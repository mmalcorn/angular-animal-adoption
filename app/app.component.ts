import { Component } from '@angular/core';
import { NaturalRemedy } from './remedy.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Natural Remedies</h1>
    <remedy-list
      [childRemedyList]="masterRemedyList"
      (clickSender)="showDetails($event)"
    ></remedy-list>
    <edit-remedy
      [childSelectedRemedy]="selectedRemedy"
    ></edit-remedy>
  </div>
  `
})

export class AppComponent {
  public masterRemedyList: NaturalRemedy[] = [
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
