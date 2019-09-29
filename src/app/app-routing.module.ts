import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('../app/pages/pages.module')
			.then( m => m.PagesModule ),
	},
	{ path: '', redirectTo: 'pages', pathMatch: 'full' },
	{ path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
	useHash: false,
};

@NgModule( {
	imports: [ RouterModule.forRoot( routes, config ) ],
	exports: [ RouterModule ],
} )
export class AppRoutingModule {
}
