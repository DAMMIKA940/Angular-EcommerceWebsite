import { Component, OnInit } from '@angular/core';

import { TodoListService} from "src/app/services/todo-list.service";



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  quantity:any;
  totalAmount;

  total:number = 0;
  name;
  constructor( private cartService: TodoListService) { }

  ngOnInit(): void {

    this.items = this.cartService.getItems();

   // this.totalPrice();
  }






}
