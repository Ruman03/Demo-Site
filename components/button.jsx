import Link from 'next/link'
import React from 'react'

const Button = ({text}) => {
  return (
    <Link href='/contact'>
    <button type="button" className="flex justify-center items-center  text-white text-lg font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-3 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{text}</button>
    </Link>
  )
}

export default Button