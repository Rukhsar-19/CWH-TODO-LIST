 import { Component } from '@angular/core';
import { TodosComponent } from "./MyComponents/todos/todos.component";
  // import { RouterOutlet } from '@angular/router';
 @Component({

  selector:'app-root',
  //  imports: [RouterOutlet],
  

   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
   imports: [TodosComponent],
  })
 export class AppComponent {
  title = 'cwh-todo-list';
  constructor(){
    // setTimeout(()=>{
    //   this.title="Changedtitle";
    //  },2000);
   }
}
