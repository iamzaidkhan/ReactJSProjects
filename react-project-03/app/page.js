"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {

  const [users, setusers] = useState([])

  const getUser = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    setusers(data);
  }

  useEffect(() => {
    getUser()

  }, [])

  return (
    <>
      <button onClick={getUser} className='bg-green-400 text-white px-4 py-2 rounded font-bold'>Get Data</button>
      <div className='p-8 bg-slate-100 mt-5'>{users.map((e, i) => {
        return <li key={i}>{e.username} --- <a href={`/${e.id}`}>Explore</a></li>
      })}</div>
    </>
  )
}

export default page


