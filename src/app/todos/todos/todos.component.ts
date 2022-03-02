import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  isTodoSelected$: any;
  @Input('todos') todoProps!: Todo;

  

  constructor() { }

  ngOnInit(): void {
  }

}
