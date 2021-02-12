import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListService } from './services/todo-list.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from 'src/app/components/product/product/product.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { CartComponent } from 'src/app/components/cart/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { BackgroundComponent } from './components/background/background.component';
import { AuthService } from 'src/app/auth.service';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ProductComponent,
    CartComponent,
    HomeComponent,
    BackgroundComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoListService,AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
