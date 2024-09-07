import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Subscribe = () => {
  return (
    
    <section>

      

    
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
  <div class="grid md:grid-cols-2 gap-8">
    <div class="max-w-md">
      <h2 class="text-3xl text-center font-bold md:text-3xl md:leading-tight md:text-left">Subscribe</h2>
      <p class=" text-md text-center mt-3 md:text-left text-gray-600">
        Subscribe and start making the most of every engagement.
      </p>
    </div>

    <form>
      <div class="w-full sm:max-w-lg md:ms-auto">
        <div class="flex flex-col  items-center gap-2 sm:flex-row sm:gap-3">
          <div class="w-full">
            <label for="hero-input" class="sr-only">Search</label>
            <input type="text" id="hero-input" name="hero-input" class="py-3 px-4 block w-full border border-black rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 " placeholder="Enter your email"/>
          </div>
          <Link class="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Subscribe
          </Link>
        </div>
        <p class="mt-3 text-sm text-gray-500">
          No spam, unsubscribe at any time
        </p>
      </div>
    </form>
  </div>
</div>

    </section>
  )
}

export default Subscribe