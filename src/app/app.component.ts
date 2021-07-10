import { Component  , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 


  values: any = ""

  title  = "asdas";
  test = true;
  img = "assets/img/test.png";
  imgs = "assets/img/test2.png";
  bg = "bg-danger"
  round2 = "reounded-lg";

   ngOnInit(){
    setTimeout( ()=> {
    this.bg = "bg-success";
    }, 1000)
  }


  Users : any = [
    {name:"ლაშა",  img : "assets/img/test.png", email:"info@gmail.com", age:25, role:"გამყოდველი"},
    {name:"ზურა ",  img : "assets/img/test.png", email:"info@gmail.com", age:25, role:"გამყოდველი"},
    {name:"თაკო 1",  img : "assets/img/test.png", email:"info@gmail.com", age:25, role:"გამყოდველი"},
    {name:"გიო",  img : "assets/img/test.png", email:"info@gmail.com", age:25, role:"გამყოდველი"},
    {name:"შალვა",  img : "assets/img/test.png", email:"info@gmail.com", age:25, role:"გამყოდველი"},
    {name:"აჩი",  img : "assets/img/test.png", email:"info@gmail.com", age:25, role:"გამყოდველი"},
    {name:"ნინო",  img : "assets/img/test.png", email:"info@gmail.com", age:25, role:"გამყოდველი"},
  ]
 findarr : any = this.Users;
  styles = 'font-size:25px; color:red';


 

  finds(e:any){
 
    // this.findarr = this.Users.filter((arr: any) => {

    //   return arr.name == this.values
    // })
 
  }

}
