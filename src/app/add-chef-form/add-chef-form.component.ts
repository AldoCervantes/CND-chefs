import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChefsService } from '../chefs.service';
@Component({
  selector: 'app-add-chef-form',
  templateUrl: './add-chef-form.component.html',
  styleUrls: ['./add-chef-form.component.css']
})
export class AddChefFormComponent implements OnInit {
  firstName: FormControl = new FormControl('');

  addChefFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private chefsService: ChefsService) { }

  ngOnInit() {
  }

  addChef() {
    const chef = {
      name: this.addChefFormGroup.controls.name.value,
      email: this.addChefFormGroup.controls.email.value
    };

    this.chefsService.add(chef);
  }

}
