import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"


export const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount } = useTodo();

  return (
    <>
        <h1>Todo App</h1>
        <h3>Todos: { todosCount }</h3>
        <h4>Pending: { pendingTodosCount }</h4>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={ todos }
                    onDeleteTodo={ handleDeleteTodo }
                    onToggleTodo={ handleToggleTodo }
                />
            </div>

            <div className="col-5">
                <h4>Add TODO</h4>
                <hr />
                <TodoAdd onNewTodo={ handleNewTodo } />
            </div>
        </div>

    </>
  )
}
