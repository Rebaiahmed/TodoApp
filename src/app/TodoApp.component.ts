import { Component } from '@angular/core';
import { TodoService } from './todo.service'
import { Todo }  from './todo' ;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'TodoApp.component.html',
  styleUrls: ['TodoApp.component.css'],
  providers :[TodoService]
})
export class TodoComponent {
 

newTodo : Todo = new Todo();


//inject the TodoService into the componnent
constructor(private todoService : TodoService){

}


//****Define our methods******************//

//******Add Todo****

addTodo()
{
  this.todoService.addTodo(this.newTodo);
  this.newTodo = new Todo();
}

//****Delete Todo********//


removeTodo(todo)
{
  this.todoService.deleteTodoById(todo.id);
}


get todos()
{
return this.todoService.getAllTodos();
}






toggleTodoComplete(todo)
{
  this.todoService.toggleTodoComplete(todo);
}




}
