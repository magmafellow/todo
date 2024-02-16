import styles from './Todo.module.css'

export default function Todo({ todo, onToggleTodo, onDeleteTodo }) {
  return (
    <div
      className={`min-h-20 w-[90%] mb-4 mx-auto shadow-inner rounded-xl ${
        styles[`todo-container`]
      }`}
    >
      <div
        className={`${
          todo.statusDone ? `bg-teal-500 dark:bg-teal-950 dark:text-teal-200 text-teal-50` : `bg-white dark:bg-stone-400 dark:text-white`
        } 2xl:text-2xl text-lg font-bold text-center p-1 md:tracking-wide ${
          styles['todo-text-top']
        }`}
      >
        {todo.title} <span>{todo.getPrettyTime()}</span> {todo.statusDone ? `*` : ``}
      </div>
      <div
        className={`${
          todo.statusDone ? `bg-teal-500 dark:bg-teal-950 dark:text-teal-200 text-teal-50` : `bg-white dark:bg-stone-400 dark:text-white`
        } 2xl:text-xl md:tracking-wide px-2 pb-1 ${styles['todo-text-bottom']}`}
      >
        {todo.text}
      </div>
      {/* under text slide */}
      <div className={`bg-gray-700 flex cursor-pointer ${styles.slide}`}>
        <div
          onClick={() => onToggleTodo(todo.id)}
          className='hover:bg-green-700 2xl:scale-125 bg-green-800 grow flex justify-center items-center'
        >
          <img src='/checkMark.svg' />
        </div>
        <div
          onClick={() => onDeleteTodo(todo.id)}
          className='hover:bg-gray-700 2xl:scale-125 bg-gray-800 grow flex justify-center items-center'
        >
          <img className='text-white' src='/bin.svg' />
        </div>
      </div>
    </div>
  )
}
