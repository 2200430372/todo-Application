import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title  (title: any) {
    throw new Error('Method not implemented');
 }
 value='';
 todoList: Array<string> = [];
 
 buttonClicked() {
  console.log(this.value)
  if(this.value.trim()) {
    this.todoList.push(this.value);
    this.value='';
  }
 }

 deleteItem(index: number) {
  this.todoList.splice(index, 1)
 }
  
}
