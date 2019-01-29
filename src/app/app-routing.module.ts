import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home.component';

const routes: Routes =
[
    {path: '', component: HomeComponent},
    {path: 'users', loadChildren: './users/users-routing.module'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule
{

}