import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import { ProductComponent } from 'src/app/components/product/product/product.component';

import { CartComponent } from 'src/app/components/cart/cart/cart.component';
import{HomeComponent} from 'src/app/components/home/home.component'
import { RegisterComponent } from 'src/app/components/register/register.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import {BackgroundComponent} from 'src/app/components/background/background.component'
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'app-todo-list', component: TodoListComponent},
  {path: 'tasks', component: TodoListComponent},
  { path :'app-cart',component:CartComponent},
  { path: 'app-product/:_id', component: ProductComponent },
  { path: 'app-product', component: ProductComponent },
  { path : 'app-register' , component : RegisterComponent},
  { path : 'app-login', component : LoginComponent },
  { path: 'app-background ', component: BackgroundComponent },
  {path:'app-contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


