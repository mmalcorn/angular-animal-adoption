import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Natural Remedies</h1>
  `
})

export class AppComponent {
  public naturalremedy: NaturalRemedy[] = [
    new NaturalRemedy("Nux Vomica", "Tree seed", 9.99, ["asthma", "rheumatism", "hemorrhoids"]),
    new NaturalRemedy("Rosehip Seed Oil", "Fruit", 19.99, ["reduces wrinkles", "eczema", "minimize appearance of scars"]),

  ];
}

export class NaturalRemedy {
  public selected: boolean = false;
  constructor(public name: string, public source: string, public price: number, public ailment: string[]) {   }
}
