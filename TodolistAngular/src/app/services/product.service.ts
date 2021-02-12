import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiEndPoint  = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getTasks() {
    return this.http.get(this.apiEndPoint+'/tasks1');
  }

  addTask1(newTask1: any) {
    return this.http.post(this.apiEndPoint+'/tasks1', newTask1);
  }

  updateTask1(updatedTask: any) {
    return this.http.put(this.apiEndPoint+'/tasks1/'+updatedTask._id, updatedTask);
  }

  deleteTask(taskId: any) {
    return this.http.delete(this.apiEndPoint+'/tasks1/'+taskId);
  }
  items = [];
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
}
