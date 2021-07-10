import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

import { FormGroup, FormControl , FormBuilder ,   Validators  } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  names = this.route.snapshot.paramMap.get('name');
  constructor(
    private route: ActivatedRoute,  
    private router: Router,
    private fb: FormBuilder
    ) { }

  Userform : any = this.fb.group({
      name  :  ['' , Validators.required],
      email :  ['',  [Validators.email,   Validators.required]],
  })




  ngOnInit(): void {
    console.log(this.id, this.names)
  }

checkdata(){
  let formdata = JSON.stringify(this.Userform.value);
  console.log(formdata)
}

updateName() {
  this.Userform.patchValue({
    name: 'ახალი მნიშვნელობა',
    email: 'infostep.ge'
  });
}

}
