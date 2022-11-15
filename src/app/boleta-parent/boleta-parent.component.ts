import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-boleta-parent',
  templateUrl: './boleta-parent.component.html',
  styleUrls: ['./boleta-parent.component.css']
})
export class BoletaParentComponent implements OnInit {
  checkoutForm: FormGroup;
  showLoading = false;

  constructor(private fb: FormBuilder) { 
    this.showLoading = false;

    this.checkoutForm = this.fb.group({
      Num_Boleta: null
    });

  }

  ngOnInit(): void {
    this.showLoading = true;
  }

    /**
   * After a form is initialized, we link it to our main form
   */
    formInitialized(name: string, form: FormGroup) 
    {
      this.checkoutForm.setControl(name, form);
      this.showLoading = false;
    }

}
