import React from 'react'
import CardGrid from '@/components/CardGrid'


const Blog = () => {
  return (
    <section className='w-full p-6' >
 <div className='container flex flex-col justify-center items-center p-6'>
      <h1 className='text-4xl font-bold text-center'>Your Blog</h1>
      <CardGrid />
    </div>
    </section>
  )
}

export default Blog