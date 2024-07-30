import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ITodo, TodoService } from '../../services/todo.service';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {
  FormBuilder,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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
    ReactiveFormsModule,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {}
  isVisible = false;
  isSubmitted = false;
  todos!: ITodo[];

  formData = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    status: ['', Validators.required],
  });

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((val) => {
      this.todos = val;
    });
  }

  handleModal(id: number | null = null) {
    this.isVisible = !this.isVisible;
    if (id) {
      this.todoService.editTodo(id).subscribe((val: any) => {
        this.formData = this.formBuilder.group({
          name: [val?.name],
          description: [val?.description],
          status: [val?.status],
        });
      });

      this.formData.value.name = 'ssas';
    }
  }

  handleSubmit() {
    this.isSubmitted = true;
    if (this.formData.valid) {
      this.todoService
        .addTodo(this.formData.value)
        .subscribe((val) => (this.todos = val));
      this.isVisible = false;
    }
  }
}
