import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ITodo {
  id: number;
  name: string;
  description: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  todos: ITodo[] = [
    {
      id: 1,
      name: 'Eat',
      description: 'Need to eat for living',
      status: 'active',
    },
    {
      id: 2,
      name: 'Sleep',
      description: 'Sleep is mandatory',
      status: 'pending',
    },
  ];

  getTodos() {
    return of(this.todos);
  }
  addTodo(data: any) {
    this.todos.push(data);
    return of(this.todos);
  }
  editTodo(id: number) {
    return of(this.todos.find((todo) => todo.id == id));
  }
  updateTodo(findId: any, data: any) {
    let updateTodo = this.todos.map((todo: ITodo) => {
      if (todo.id === findId) {
        return { ...todo, ...data };
      } else {
        return todo;
      }
    });

    return of(updateTodo);
  }

  deleteTodo(id: number) {
    return of(this.todos.filter((todo) => todo.id != id));
  }
}
