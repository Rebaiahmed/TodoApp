import { Injectable } from '@angular/core';

import {Todo} from './todo' ;

@Injectable()
export class TodoService {

  lastid : number =0;

//list of todo
todos : Todo[] =[];

  constructor() {}

//**********Defien ur methods********************//

addTodo(todo:Todo){
if(!todo.id){
  todo.id =++ this.lastid;
}
this.todos.push(todo);
}

//**********************************//
deleteTodoById(id:number) 
{
this.todos = this.todos.filter(todo =>todo.id !== id); // very helpful
}


//*****************************************

updateTodoById(id:number, values :Object={}): Todo {
  let todo = this.getTodoById(id);
  if(!todo){
    return null ;
  }

  Object.assign(todo,values);
  return todo ;
}


//*********************************************//

getAllTodos() : Todo[]{
  return this.todos;
}

//*******************
getTodoById(id:number): Todo{
return this.todos.filter(todo => todo.id === id)
      .pop();
}


//**************************************************************************//
 toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
