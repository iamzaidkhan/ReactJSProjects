import React from 'react'
import Link from 'next/link'

function Header() {
  return (

    <>
      <div>
        <Link href='/Home'>Home</Link>
        <Link href='/Courses'>Courses</Link>
        <Link href='/About'>About</Link>
      </div>
    </>
  )
}

export default Header