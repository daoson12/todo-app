import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter } from '../model/filter';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo$= new BehaviorSubject<Todo[]>([]);
  filter$= new BehaviorSubject<Filter>(Filter.all)

  constructor() { }

  addTodo(text: string):void {
    const newTodo: Todo={
      id:  Math.random().toString(36).substr(2, 9),
      text,
      isCompleted: false 
    }
   const updatedTodos=[...this.todo$.getValue(), newTodo]
   this.todo$.next(updatedTodos);
  }

}
