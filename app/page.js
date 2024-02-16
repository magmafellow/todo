'use client'

import CreateButton from '@/app/ui/CreateButton'
import Todo from '@/app/ui/Todo'
import { useState } from 'react'
import TodoConstructor from './lib/TodoConstructor'


export default function Page() {
  const [todos, setTodos] = useState([])

  function addTodoHandler(todo) {
    const lastTodos = todos.slice()
    lastTodos.push(todo)
    setTodos(lastTodos)
  }

  return (
    <div>
      <CreateButton />
      <Todo />
    </div>
  )
}
