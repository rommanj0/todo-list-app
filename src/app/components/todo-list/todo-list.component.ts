import { Component } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  addTodo(): void {
    if (this.newTodoTitle.trim() !== '') {
      const newTodo: Todo = {
        id: this.todos.length + 1,
        title: this.newTodoTitle,
        completed: false,
        editing: false,
      };
      this.todos.unshift(newTodo);
      this.newTodoTitle = '';
    }
  }

  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
  }

  toggleCompletion(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo): void {
    todo.editing = true;
  }

  finishEditing(todo: Todo): void {
    todo.editing = false;
  }
}
