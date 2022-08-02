import { HomeComponent } from './home/home.component';



import { NgModule } from '@angular/core';



import { RouterModule, Routes } from '@angular/router';






import { LoginComponent } from './login/login.component';



import { RegisterComponent } from './register/register.component';



import { AddtaskComponent } from './addtask/addtask.component';



import { ListtaskComponent } from './listtask/listtask.component';



import { EdittaskComponent } from './edittask/edittask.component';







const routes: Routes = [





  {path:'home', component:HomeComponent},





  {path:'register', component:RegisterComponent},





  {path:'login', component:LoginComponent},





  {path:'listuser', component:RegisterComponent},



  {path:'listtask',component:ListtaskComponent},



  {path:'addtask', component:AddtaskComponent},



  {path:'edittask', component:EdittaskComponent},
 



  {path:'', redirectTo:'home' ,pathMatch:'full'}

];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})



export class AppRoutingModule{ }