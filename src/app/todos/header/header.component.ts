import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Todo-app';

  text:string = '';
  constructor( private todoService:TodoService) {
   }

  ngOnInit(): void {
 
    this.addToTodo
  }

  changeText( e:Event){
    const target=e.target as HTMLInputElement
    this.text=target.value;
  }


  addToTodo(){
    this.todoService.addTodo(this.text)
    console.log(this.text);
    this.text=''

   
    
  }
}
