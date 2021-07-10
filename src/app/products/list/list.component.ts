import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  Discount : any =  this.route.snapshot.queryParams.discount;

  findedProducts : any; 

  Products :any = [
    {id:45, catid:4, discount:"true",   name:"მსხალი", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},
    {id:12, catid:7, discount:"true",   name:"ვაშლი", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},
    {id:23, catid:6, discount:"true",   name:"ატამი", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},
    {id:34, catid:8, discount:"true",   name:"ლეღვი", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},
    {id:45, catid:11, discount:"false",   name:"ყურძენი", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},
    {id:22, catid:22,  discount:"true",  name:"ბალი", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},
    {id:65, catid:34,  discount:"false",  name:"მარწყვი", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},
    {id:65, catid:54,  discount:"true",  name:"კენკრა", img:"https://agronews.ge/wp-content/uploads/2020/03/4444444444444444444444.jpg"},

  ]

  constructor( 
    private route: ActivatedRoute,  
    private router: Router
  ) { }

  ngOnInit(): void {
 
    this.findedProducts = this.Products.filter((els:any)=>{
      return  els.discount ==  this.Discount ;
    })

 
 
  }


  disc(types : any){
    this.findedProducts = this.Products.filter((els:any)=>{
      return  els.discount == types;
    })
 
    this.router.navigate(['/Product'], { queryParams: { discount: types } }); 
  
  }

}
