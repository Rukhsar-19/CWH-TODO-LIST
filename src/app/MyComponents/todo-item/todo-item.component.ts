import { Component ,OnInit,Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../../Todo';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-todo-item',
  imports: [NgClass], 
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent  implements OnInit{
nostrike: any;
  
onCheckboxClick(todo: Todo | undefined ) {
  this.todoCheckbox.emit(todo);


}
OnClick(todo:Todo) {

  this.todoDelete.emit(todo);
  console.log("onclick has been triged") ;
}
  @Input()
  todo!: Todo;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheckbox:EventEmitter<Todo>=new EventEmitter();
  constructor(){}

  ngOnInit(): void {
    
  }
  

}
