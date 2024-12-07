import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { ViewComponent } from './post/view/view.component';

export const routes: Routes = [
    {path:'post',redirectTo:'post/index',pathMatch:'full'},
    {path:'post/index',component:IndexComponent},
    {path:'post/postId/view',component:ViewComponent},
];
