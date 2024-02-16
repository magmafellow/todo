import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './CreateButton.module.css'

export default function CreateButton({ onCreateTodo }) {
  const pathToCreate = 'createButton.svg'
  const [titleValue, setTitleValue] = useState('')
  const [textValue, setTextValue] = useState('')
  const [shownInputs, setShownInputs] = useState(false)

  return (
    <form>
      {/* button for create */}
      <div
        className='h-20 mb-3 mt-4 w-[90%] cursor-pointer rounded-xl flex justify-center items-center mx-auto bg-black relative'
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
          <span className=''>all: 7</span>
          <span className='text-sky-200'>done: 3</span>
          <span className='text-red-200'>to make: 4</span>
        </div>
      </div>
      {/* toggle for wrapper for inpurts */}
        <div
          className='cursor-pointer hover:bg-amber-200 hover:text-amber-800 mb-2 max-w-36 p-1 transition text-gray-800 shadow flex justify-center border border-gray-800 mx-auto toggle-for-wrapper'
          onClick={() => {
            setShownInputs(!shownInputs)
          }}
        >
          open input menu
        </div>
      {/* wrapper for inputs */}
      <div className={shownInputs ? '' : 'hidden'}>
        <label htmlFor='title' className='text-center block'>
          Title
        </label>
        <input
          id='title'
          className='mx-auto mb-2 block w-[80%] p-1 border border-gray-300 rounded-md'
          value={titleValue}
          onChange={e => {
            setTitleValue(e.target.value)
          }}
        />
        <label htmlFor='text' className='text-center block'>
          Text
        </label>
        <input
          id='text'
          className='mx-auto mb-4 block w-[80%] p-1 border border-gray-300 rounded-md'
          value={textValue}
          onChange={e => {
            setTextValue(e.target.value)
          }}
        />
      </div>
    </form>
  )
}
