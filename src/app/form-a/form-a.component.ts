import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent {
  fName: string = '';
  lName : string = '';
  Option: string = '';
  phoneNumber: string = '';
  emailId: string = '';
  myControlForm: FormGroup;

  constructor() {
    this.myControlForm = new FormGroup({
      selectedOption: new FormControl('')
    });
  }

  onOPtionChange(){
    if (this.Option !== 'phone'){
      this.phoneNumber = '';
    }
    if (this.Option !== 'email'){
      this.emailId = '';
    }
  }


}
