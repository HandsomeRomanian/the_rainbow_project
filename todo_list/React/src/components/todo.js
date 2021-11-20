function Todo(todo) {
  return (
    <div className="list-item">
      <div class="item-name">{todo.name}</div>
      <button class="button">⬆</button>
      <div class="button">⬇</div>
      <div class="button">❌</div>
    </div>
  );
}

export default Todo;
