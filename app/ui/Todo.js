import styles from './Todo.module.css'

export default function Todo({ id, title, text, time }) {
  return (
    <div className={`min-h-20 w-[90%] mb-4 mx-auto rounded-xl ${styles[`todo-container`]}`}>
      <div className={`bg-[#D9D9D9] text-lg font-bold text-center p-1 ${styles['todo-text-top']}`}>{title}</div>
      <div className={`bg-[#D9D9D9] px-2 pb-1 ${styles['todo-text-bottom']}`}>
        {text}
      </div>
      {/* under text slide */}
      <div className={`bg-gray-700 flex cursor-pointer ${styles.slide}`}>
        <div className='hover:bg-green-700 bg-green-800 grow flex justify-center items-center'><img src='/checkMark.svg' /></div>
        <div className='hover:bg-gray-700 bg-gray-800 grow flex justify-center items-center'><img className='text-white' src='/bin.svg' /></div>
      </div>
    </div>
  )
}
