import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
// import { BoardUserComponent } from './board-user/board-user.component';
// import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
// import { BoardAdminComponent } from './board-admin/board-admin.component';
//import {AuthGuard} from './../../shared/guards/auth.guard'

const routes: Routes = [
	{
		path: '',
		//component: AuthComponent,
		//canActivate:[AuthGuard],
		children: [
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full'
			},
			{
				path: 'login',
				component: LoginComponent,
				data: { returnUrl: window.location.pathname }
			}
		]
	}
	// { path: 'login', component: LoginComponent }
	//   { path: 'home', component: HomeComponent },
	//   { path: 'register', component: RegisterComponent },
	//   { path: 'profile', component: ProfileComponent },
	//   { path: 'user', component: BoardUserComponent },
	//   { path: 'mod', component: BoardModeratorComponent },
	//   { path: 'admin', component: BoardAdminComponent },
	//   { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AuthRoutingModule {}