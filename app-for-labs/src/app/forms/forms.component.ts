import { Component } from '@angular/core';
import { FormBuilder, FormGroup,   Validators,  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  // submitted = false;
  // formData: any = {};

  // onSubmit(form: any) {
  //   this.submitted = true;
  //   this.formData = form.value;
  // }
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.submitted = true;
  }
}
