import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { Menu1AboutUsComponent } from './aboutus/components/menu1/menu1.aboutus.component';
import { Menu2AboutUsComponent } from './aboutus/components/menu2/menu2.aboutus.component';
//import { GamesComponent } from './games/games.component';

import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'home', component: HomeComponent },
 { path: 'aboutus', component: AboutUsComponent,
  children: [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about-us-menu-1', component: Menu1AboutUsComponent },
  { path: 'about-us-menu-2', component: Menu2AboutUsComponent }
  ]
 },
 { path: 'posts', component: PostsComponent },
 { path: 'post-list', component: PostListComponent },
 //{ path: 'games', component: GamesComponent},
 { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
 { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
 { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
 { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}

// export const routing = RouterModule.forRoot(routes);
