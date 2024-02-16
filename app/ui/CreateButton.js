import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './CreateButton.module.css'

export default function CreateButton({ onCreateTodo, counts }) {
  const pathToCreate = 'createButton.svg'
  const [titleValue, setTitleValue] = useState('')
  const [textValue, setTextValue] = useState('')
  const [shownInputs, setShownInputs] = useState(true)

  return (
    <form>
      {/* button for create */}
      <div
        className='h-20 mb-3 w-[90%] cursor-pointer rounded-xl flex justify-center items-center mx-auto bg-slate-500 border-4 dark:bg-black dark:border-4 dark:border-black relative'
        onClick={() => {
          const success = onCreateTodo(uuidv4(), titleValue, textValue, new Date())
          if(success) {
            // clearing input fields
            [setTextValue, setTitleValue].map((func) => func(''))
          }
        }}
      >
        <img src={`/${pathToCreate}`} />
        <div
          className={`text-white text-sm flex flex-col ${
            styles[`container-info`]
          }`}
        >
          <span className={`${counts.activeCounts === 0 && counts.allCounts > 0 ? 'text-emerald-300 text-normal font-bold' : ''}`}>all: { counts.allCounts } { counts.activeCounts === 0 && counts.allCounts > 0 ? 'super!' : '' }</span>
          <span className='text-sky-200'>done: { counts.doneCounts }</span>
          <span className='text-red-200'>to make: { counts.activeCounts }</span>
        </div>
      </div>
      {/* toggle for wrapper for inpurts */}
        <div
          className='sm:tracking-wide cursor-pointer hover:bg-amber-200 hover:text-amber-800 mb-2 xl:mb-4 2xl:mb-6 max-w-44 p-1 transition text-gray-800 shadow flex justify-center border border-gray-800 mx-auto toggle-for-wrapper'
          onClick={() => {
            setShownInputs(!shownInputs)
          }}
        >
          { shownInputs ? 'Hide' : 'Show' } input menu
        </div>
      {/* wrapper for inputs */}
      <div className={shownInputs ? '' : 'hidden'}>
        <label htmlFor='title' className='2xl:text-xl 2xl:tracking-wide text-center block'>
          Title
        </label>
        <input
          id='title'
          className='mx-auto dark:bg-teal-600 dark:text-white mb-2 block w-[80%] p-1 border border-gray-300 rounded-md'
          value={titleValue}
          onChange={e => {
            setTitleValue(e.target.value)
          }}
        />
        <label htmlFor='text' className='2xl:text-xl 2xl:tracking-wide text-center block'>
          Text
        </label>
        <input
          id='text'
          className='mx-auto dark:bg-teal-600 dark:text-white mb-4 xl:mb-6 2xl:mb-8 block w-[80%] p-1 border border-gray-300 rounded-md'
          value={textValue}
          onChange={e => {
            setTextValue(e.target.value)
          }}
        />
      </div>
    </form>
  )
}
