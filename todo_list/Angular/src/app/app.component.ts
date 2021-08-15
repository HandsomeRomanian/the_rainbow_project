import {
  Component,
  OnInit,
  ɵCompiler_compileModuleSync__POST_R3__,
} from '@angular/core';
import { Direction } from './models/direction';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public todos: Todo[] = [];
  public todoInput: string = '';
  public errors: any;
  public direction = Direction;

  ngOnInit() {
    this.todos = JSON.parse(localStorage.getItem('todos') || '') || [];
  }

  public createTodo() {
    if (
      this.todos.find((x) => x.name === this.todoInput) ||
      this.todoInput === ''
    ) {
      this.errors = true;
      alert('error');
      return;
    }
    this.todos.push({ name: this.todoInput });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  public move(todo: Todo, direction: Direction) {
    const indexA = this.todos.indexOf(todo);
    if (
      (indexA === this.todos.length - 1 && Direction.DOWN === direction) ||
      (Direction.UP === direction && indexA === 0)
    ) {
      return;
    }
    const otherTodo = this.todos[indexA + direction];
    this.todos[indexA + direction] = todo;
    this.todos[indexA] = otherTodo;
  }
  public deleteTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
