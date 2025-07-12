import { useState } from "react"
import ToDoItem from "./ToDoItem"

function ToDoList({ todos, addTodo, toggleComplete, deleteTodo, editTodo }) {
  const [newTask, setNewTask] = useState("")

  const handleAdd = () => {
    if (newTask.trim()) {
      addTodo(newTask)
      setNewTask("")
    }
  }

  return (
    <div className="w-full max-w-xl bg-gray-200 p-4 rounded shadow ">
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="New task..."
          className=" flex-1 border p-2 rounded text-xl"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-600 text-white text-xl px-2 py-1 rounded"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">No tasks yet</p>
      ) : (
        todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      )}
    </div>
  )
}

export default ToDoList
