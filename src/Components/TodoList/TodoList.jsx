import "./TodoList.scss";

const TodoList = ({ todos, setTodos }) => {
  const clearCompleted = (todos) => {
    setTodos(todos.filter((item) => item.completed === false));
  };
  const clearAll = () => {
    var proceed = window.confirm("Are you sure want to clear all?");
    proceed && setTodos([]);
  };

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`my-2 ${todo.completed ? "completed" : ""}`}
          onClick={() => {
            setTodos(
              todos.map((item) =>
                item.id === todo.id
                  ? { ...item, completed: !item.completed }
                  : item
              )
            );
          }}
        >
          {todo.title}
        </div>
      ))}
      {todos.length > 0 && (
        <div className="mt-2">
          <button
            className="btn btn-info"
            onClick={() => {
              clearCompleted(todos);
            }}
          >
            Clear Completed
          </button>
          <button
            className="btn btn-danger ml-1"
            onClick={() => {
              clearAll();
            }}
          >
            Clear All
          </button>
        </div>
      )}
    </>
  );
};

export default TodoList;
