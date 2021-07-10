import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-detals',
  templateUrl: './detals.component.html',
  styleUrls: ['./detals.component.scss']
})
export class DetalsComponent implements OnInit {

  id = Number(this.route.snapshot.paramMap.get('id'));
  catid = this.route.snapshot.queryParams.catid;
  active = this.route.snapshot.queryParams.active;

   ifproduct:any ;

  Products :any = [
    {id:45, catid:4,   name:"მსხალი", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},
    {id:12, catid:7,   name:"ვაშლი", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},
    {id:23, catid:6,   name:"ატამი", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},
    {id:34, catid:8,   name:"ლეღვი", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},
    {id:45, catid:11,   name:"ყურძენი", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},
    {id:22, catid:22,   name:"ბალი", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},
    {id:65, catid:34,   name:"მარწყვი", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},
    {id:65, catid:54,   name:"კენკრა", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},

  ]


  activeclass = "bg-success";

  constructor( private route: ActivatedRoute,  private router: Router,) { }

  ngOnInit(): void {

    this.Products = this.Products.filter((arreel:any) => {
      return arreel.id == this.id && arreel.catid == this.catid
   })

   if(this.Products.length == 0){
     this.ifproduct = false;
     //this.router.navigate(['/Product']);
   }else{
    this.ifproduct = true;
   }
   
 if(this.active == "true"){
 
  this.activeclass = "bg-success"
 }else{
 
  this.activeclass = "bg-danger"
 }

 

  }

}
