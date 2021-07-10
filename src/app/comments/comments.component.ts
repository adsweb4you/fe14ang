import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  id = window.location.pathname.split("/")[3]
  constructor( private route: ActivatedRoute,  private router: Router,) { }

  ngOnInit(): void {
    
  }

}
