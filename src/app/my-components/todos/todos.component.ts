import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent{

  //Two way data binding , give just nom of field in front [(ngModel)]="description"
  description!: any;
  completed= false;


  todosList!: Todo[];
  constructor(){};

  ngOnInit(): void{
    this.todosList = [
      {description: 'learn angular', completed :true},
      {description: 'learn node', completed :true},
      {description: 'learn nginix', completed :false},
      {description: 'learn docker', completed :false}
    ]
  }

  taskDone(index: number){
      this.todosList.map((v, i) => {
        if(index == i){
          v.completed = !v.completed;
        }
      })
  }

  remove(i:number){
    this.todosList = this.todosList.filter((v,k)=>k !== i);
  }
  

  addTodo(){
    this.todosList.push({description: this.description, completed: this.completed})
  }
}
