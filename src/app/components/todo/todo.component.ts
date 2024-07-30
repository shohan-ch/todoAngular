import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ITodo } from '../../services/todo.service';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    NzTableModule,
    NzDividerModule,
    JsonPipe,
    CommonModule,
    NzButtonComponent,
    NzButtonModule,
    NzModalModule,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  isVisible = false;
  todos: ITodo[] = [
    {
      name: 'Eat',
      description: 'Need to eat for living',
      status: 'active',
    },
    {
      name: 'Sleep',
      description: 'Sleep is mandatory',
      status: 'pending',
    },
  ];

  handleModal() {
    this.isVisible = !this.isVisible;
  }
}
