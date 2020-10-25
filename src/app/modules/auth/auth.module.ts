import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
// import { BoardAdminComponent } from './board-admin/board-admin.component';
// import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
// import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';

@NgModule({
	declarations: [
		LoginComponent
		// RegisterComponent,
		// HomeComponent,
		// ProfileComponent,
		// BoardAdminComponent,
		// BoardModeratorComponent,
		// BoardUserComponent
	],
	imports: [ CommonModule, AuthRoutingModule, FormsModule, HttpClientModule ],
	providers: [ authInterceptorProviders ]
})
export class AuthModule {}