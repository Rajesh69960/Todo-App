import { useState } from "react"
import { MdEdit } from "react-icons/md"
import { RiResetRightLine } from "react-icons/ri"
import { MdDelete } from "react-icons/md"

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const { id, text, completed } = todo
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(text)

  const handleEdit = () => {
    if (editText.trim()) {
      editTodo(id, editText)
      setIsEditing(false)
    }
  }

  return (
    <div className="flex items-center text-xl justify-between p-2 border-b">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
        />
        {isEditing ? (
          <input
            className="border p-1 rounded"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <span
            className={`ml-2 ${completed ? "line-through " : ""}`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button
            className="bg-green-500 text-white px-2 py-1 rounded text-xl"
            onClick={handleEdit}
          >
            <RiResetRightLine />
          </button>
        ) : (
          <button
            className="bg-orange-500 text-white px-2 py-1 rounded text-xl"
            onClick={() => setIsEditing(true)}
          >
            <MdEdit />
          </button>
        )}
        <button
          className="bg-red-600 text-white px-2 py-1 rounded text-xl"
          onClick={() => deleteTodo(id)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  )
}

export default ToDoItem
