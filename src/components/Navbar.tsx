import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className='relative mt-5 px-5'>
        <ul className='flex flex-row gap-x-3'>
          <li>
          <Link href='/'>
            Home
          </Link>
          </li>
          <li className='text-white'>
            
          <Link href='/tasks'>
            <span>
              Task
            </span>
          </Link>
            
          </li>
          <Link href='/listado'>
            Listado
          </Link>
        </ul>
      </nav>
    </>
  )
}
