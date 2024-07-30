import { Injectable } from '@angular/core';

export interface ITodo {
  name: string;
  description: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
}
