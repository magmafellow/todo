import { useState } from 'react'
import styles from './CreateButton.module.css'

export default function CreateButton() {
  const pathToCreate = 'createButton.svg'
  const [value, setValue] = useState('')

  return (
    <form>
      {/* button for create */}
      <div
        className='h-20 mb-3 mt-4 w-[90%] cursor-pointer rounded-xl flex justify-center items-center mx-auto bg-black relative'
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
      <input className='mx-auto mb-4 block w-[80%] p-1 border border-gray-300 rounded-md'
        value={value}
        onChange={e => {
          setValue(e.target.value)
        }}
      />
    </form>
  )
}
