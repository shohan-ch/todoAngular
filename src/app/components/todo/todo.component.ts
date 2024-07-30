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
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { StatusDirective } from '../../directives/status.directive';

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
    NzAlertModule,
    NzMessageModule,
    StatusDirective,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private antMessage: NzMessageService
  ) {}
  isVisible = false;
  isSubmitted = false;
  isUpdate = false;
  statusMessage = '';
  todos!: ITodo[];
  id = 2;

  formData = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    description: ['', Validators.required],
    status: ['', Validators.required],
  });

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((val) => {
      this.todos = val;
    });
  }

  showSuccessMessage(message: string): void {
    this.antMessage.success(message);
  }

  handleModal(id: number | null = null) {
    this.isVisible = !this.isVisible;
    if (id) {
      this.todoService.editTodo(id).subscribe((val: any) => {
        this.formData = this.formBuilder.group({
          id: [val?.id],
          name: [val?.name, Validators.required],
          description: [val?.description, Validators.required],
          status: [val?.status, Validators.required],
        });
      });
      this.isUpdate = true;
    }
  }

  handleSubmit() {
    this.isSubmitted = true;
    if (this.formData.valid) {
      this.id++;
      let data = { ...this.formData.value, id: this.id };
      this.todoService.addTodo(data).subscribe((val) => {
        this.todos = val;
        this.formData.reset();
      });
      this.isVisible = false;
      this.isSubmitted = false;
      this.showSuccessMessage('Added successfully');
    }
  }

  handleUpdate() {
    if (this.formData.valid) {
      this.todoService
        .updateTodo(this.formData.value.id, this.formData.value)
        .subscribe((val) => {
          this.todos = val;
          this.showSuccessMessage('Update successfully');
        });
      this.isVisible = false;
      this.isUpdate = false;
      this.formData.reset();
    }
  }

  handleDelete(id: number) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this todo?'
    );
    if (confirmed) {
      this.todoService.deleteTodo(id).subscribe((val) => (this.todos = val));
      this.showSuccessMessage('Delete successfully!');
    }
  }
}
