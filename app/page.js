'use client'

import { v4 as uuidv4 } from 'uuid'
import CreateButton from '@/app/ui/CreateButton'
import Todo from '@/app/ui/Todo'
import { useState } from 'react'
import TodoConstructor from './lib/TodoConstructor'



export default function Page() {
  const [todos, setTodos] = useState([])

  function addTodoHandler(id, title, text, time) {
    if(text === '') {
      return false;
    }
    const todo = new TodoConstructor(id, title, text, time)
    const lastTodos = todos.slice()
    lastTodos.push(todo)
    setTodos(lastTodos)
    return true;
  }

  return (
    <div>
      <CreateButton onCreateTodo={addTodoHandler} />
      {todos.map((todo) => <Todo key={todo.id} id={todo.id} title={todo.title} text={todo.text} time={todo.time} />)}
    </div>
  )
}
