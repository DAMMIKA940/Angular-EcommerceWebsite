import { Component, OnInit } from '@angular/core';
import {  ProductService} from 'src/app/services/product.service';
import { TodoListService } from 'src/app/services/todo-list.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  myTaskList = [];
  taskId: string;
  taskName: string;
  name1: string;
  taskStatus: string;
  editMode: boolean = false;

  constructor(
    private todoListService: TodoListService,
    private ProductService: ProductService
  ) { }

  ngOnInit(): void {
    this.getMyTaskLists();
  }

  getMyTaskLists() {
    this.todoListService.getTasks().subscribe((res: any) => {
      // console.log('My response');
      // console.log(res);

      this.myTaskList = res.data;
      // console.log(this.myTaskList);
    });
  }

  /*addTask() {
    let newTask = {
      name: this.taskName,
      name1: this.name1,
      status: this.taskStatus
    }*/

    // console.log(newTask);

    /*this.todoListService.addTask(newTask).subscribe((res: any) => {
      this.getMyTaskLists();
      this.taskId = "";
      this.taskName = "";
      this.name1 = "";
      this.taskStatus = "";
    });
  }

  editTask(editTask: any) {
    this.editMode = true;
    this.taskId = editTask._id;
    this.taskName = editTask.name;
    this.taskStatus = editTask.status;
  }

  udpateTask() {
    let updatedTask = {
      _id: this.taskId,
      name: this.taskName,
      status: this.taskStatus
    }*/

    /*this.todoListService.updateTask(updatedTask).subscribe((res: any) => {
      this.getMyTaskLists();
      this.taskId = "";
      this.taskName = "";
      this.taskStatus = "";
      this.editMode = false;
    });
  }

  deleteTask(taskId: String) {
    this.todoListService.deleteTask(taskId).subscribe((res: any) => {
      this.getMyTaskLists();
    });
  }*/


  addToCart(product) {
    this.todoListService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
