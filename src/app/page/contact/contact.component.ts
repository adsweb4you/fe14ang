import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 

  Contact : any = {
    subject:'',
    email:'',
    phone:'',
    text:''
  }

  constructor() { }

  ngOnInit(): void {
  }


  getDate(){

     let Formdata  = JSON.stringify(this.Contact);

   console.log(Formdata);

  }

  setvaleu(){
    this.Contact.subject =  'safsdfsfsd' ;
  }

}
