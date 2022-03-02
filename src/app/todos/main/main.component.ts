import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';
import { from } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { Filter } from '../model/filter';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  visibleTodos$!: Observable<Todo[]>;
  noTodoClass$: Observable<boolean> | undefined;
  isTodoSelected$!: Observable<boolean>;

  constructor(private todoService:TodoService) {
    this.isTodoSelected$=this.todoService.todo$.pipe(map((todos)=> todos.every((todo)=> todo.isCompleted)))

     this.noTodoClass$=this.todoService.todo$.pipe(
       map((todos) =>todos.length==0))
    this.visibleTodos$ = combineLatest(
      this.todoService.todo$,
      this.todoService.filter$).pipe(map(([todos, filter]: [Todo[], Filter])=>{
        

        if (filter==Filter.active) {
        
          return todos.filter(todo=> !todo.isCompleted)
        
        } else if (filter==Filter.completed) {
        
          return todos.filter((todo)=> todo.isCompleted)
        
        }
        console.log(todos);
        return todos;
    
        
        
      }));
 
   }

  ngOnInit(): void {
  }

}
