import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './products/list/list.component';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { DetalsComponent } from './products/detals/detals.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CommentsComponent } from './comments/comments.component';

import { UserComponent } from './user/user.component';
const routes: Routes = [
  {path: 'user/:name/:id', component: UserComponent},
  { path: 'Product', component: ListComponent },
  { path: 'Product/Detals/:id', component: DetalsComponent ,

  children: [{
    path: 'comment',
    component: CommentsComponent
  }]

},
  { path: '', component: HomeComponent },
  { path: 'Contact', component: ContactComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
