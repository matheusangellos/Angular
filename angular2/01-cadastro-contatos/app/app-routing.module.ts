import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/contato',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {}