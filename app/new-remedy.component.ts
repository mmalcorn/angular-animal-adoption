import { Component, Input, Output, EventEmitter } from '@angularcore';
import { NaturalRemedy } from '@angularcore';

@Component({
  selector: 'add-remedy',
  template: `
    <h1>Add a new remedy:</h1>

    <div>
      <label>Enter New Remedy Name</label>
      <input #newRemedyName>
    </div>

    <div>
      <label>Enter New Remedy Source</label>
      <input #newRemedySource>
    </div>

    <div>
      <label>Enter New Remedy Price</label>
      <input #newRemedyPrice>
    </div>

    <div>
      <label>Enter New Remedy Ailment</label>
      <input #newRemedyAilment>
      <button (click)="addClicked(newRemedyName.value, newRemedySource.value, newRemedyPrice.value, newRemedyAilment.value)">Add</button>
    </div>
  `

})

export class NewRemedyComponent {
  @Output() newRemedySender = new EventEmitter();
  addClicked(name: string, source: string, price: number, ailment: string[]) {
    var newRemedyToAdd: NaturalRemedy = new Remedy(name, source, price, ailment);
    this.newRemedySender.emit(newRemedyToAdd);
  }
}
