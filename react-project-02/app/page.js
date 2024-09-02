"use client"
import React, { useState } from 'react'

function page() {

  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask);
  }

  let renderTask = <h2>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {

      return <li key={i} className='flex items-center justify-between mb-5'>
        <div className='flex items-center justify-between w-2/3'>
          <h5 key={i} className='text-xl font-semibold'>{t.title}</h5>
          <h6 key={i} className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button className='bg-red-400 text-white px-4 py-2 rounded font-bold' onClick={() => {
          deleteHandler(i)
        }}>Delete</button>
      </li>
    })
  }

  const submitHandler = (e) => {

    e.preventDefault()
    setMainTask([...mainTask, { title, desc }]);

    setTitle("")
    setDesc("")
    console.log(mainTask)
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My To Do List</h1>

      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Enter Title Here' className='border-zinc-800 border-4 m-8 px-4 py-2' value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
        <input type='text' placeholder='Enter Description Here' value={desc} onChange={(e) => { setDesc(e.target.value) }} className='border-zinc-800 border-4 m-8 px-4 py-2'></input>
        <button className='bg-zinc-800 text-white px-4 py-2 text-2xl font-bold rounded m-8'>Add Task</button>

      </form>

      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page