/* eslint-disable react/prop-types */

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
          <span 
            className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
          >{ todo.description }</span>
          <div>
            {
              todo.done
              ? <button
                  className="btn btn-success"
                  onClick={ () => onToggleTodo(todo.id) }
                >Reset</button>
              : <button
                className="btn btn-outline-success"
                onClick={ () => onToggleTodo(todo.id) }
              >Complete</button>
            }
              <button
              className="btn btn-danger"
              onClick={ () => onDeleteTodo(todo.id) }
            >Delete</button>
          </div>
      </li>
    </>
  )
}
