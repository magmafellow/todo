'use client'

import { v4 as uuidv4 } from 'uuid'
import CreateButton from '@/app/ui/CreateButton'
import Todo from '@/app/ui/Todo'
import { useState } from 'react'
import TodoConstructor from './lib/TodoConstructor'

export default function Page() {
  const [todos, setTodos] = useState([])
  const [dark, setDark] = useState(true)
  const allCounts = todos.length
  const doneCounts = todos.reduce(
    (accum, todo) => (todo.statusDone ? 1 : 0) + accum,
    0,
  )
  const activeCounts = allCounts - doneCounts
  const counts = {
    allCounts,
    doneCounts,
    activeCounts,
  }

  function addTodoHandler(id, title, text, time) {
    if (text === '') {
      return false
    }
    const todo = new TodoConstructor(id, title, text, time)
    const lastTodos = todos.slice()
    lastTodos.push(todo)
    setTodos(lastTodos)
    return true
  }

  function toggleTodoStatusHandler(uuid) {
    const todo = todos.find(todo => todo.id === uuid)
    todo.statusDone = !todo.statusDone
    setTodos([...todos])
  }

  function deleteTodoHandler(uuid) {
    const todoIndex = todos.findIndex(todo => todo.id === uuid)
    todos.splice(todoIndex, 1)
    setTodos(todos.slice())
  }

  function toggleDark() {
    setDark(!dark)
  }

  return (
    <div className={`${dark ? 'dark' : ''}`}>
      <div className='min-h-screen transition dark:bg-teal-800 bg-teal-100'>
        <div
          className={`w-7 h-7 lg:w-4 lg:h-4 rounded-lg cursor-pointer dark:bg-sky-300 bg-sky-800 fixed bottom-1 right-1`}
          onClick={toggleDark}
        ></div>
        <CreateButton onCreateTodo={addTodoHandler} counts={counts} />
        {todos.map(todo => (
          <Todo
            onToggleTodo={toggleTodoStatusHandler}
            onDeleteTodo={deleteTodoHandler}
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
    </div>
  )
}
