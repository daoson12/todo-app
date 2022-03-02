import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from 'src/app/todos/todo/todo.component';
import { HeaderComponent } from 'src/app/todos/header/header.component';
import { TodoService } from '../service/todo.service';
import { MainComponent } from 'src/app/todos/main/main.component';
import { TodosComponent } from 'src/app/todos/todos/todos.component';



@NgModule({
  declarations: [TodoComponent,HeaderComponent, MainComponent, TodosComponent],
  imports: [
    CommonModule
  ],
  providers:[TodoService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]

})
export class TodoModule { }
