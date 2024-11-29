import { Component,NgModule,OnInit, TemplateRef } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor, NgIf, NgIfContext } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoItemComponent, AddTodoComponent,NgIf],

  // imports: [],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  todos: Todo[];
elseBlock: TemplateRef<NgIfContext<boolean>> | null | undefined;
  localItem: string | null;
// deleteTodo: any;
  constructor() {
    this.localItem=localStorage.getItem("todos");
    if (this.localItem==null){
      this.todos=[];
    }
    else{
      this.todos=JSON.parse(this.localItem);
    }
    // this.todos=[];
    //   {
    //   sno:1,
    //   title: "This is title2",
    //   desc: "Description",
    //   active: true
    // },
    // {
    //   sno: 2,
    //   title: "This is title2",
    //   desc: "Description",
    //   active: true
    // },
    // {
    //   sno: 3,
    //   title: "This is title3",
    //   desc: "Description",
    //   active: true
    // } ];

  }
  ngOnInit(): void {
    
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1)
   localStorage.setItem("todos",JSON.stringify(this.todos));
  //   means savethe todos in local storage
  }
  addTodo(todo:Todo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  toggleTodo(todo:Todo){
  
    const index=this.todos.indexOf(todo);
    this.todos[index].active= !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
    console.log(todo);

  }


}
