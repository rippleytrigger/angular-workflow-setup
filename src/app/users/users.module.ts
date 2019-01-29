import { NgModule } from "@angular/core";
import { UsersRoutingModule } from "./users-routing.module";
import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [ UsersModule ],
    imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule
{

}