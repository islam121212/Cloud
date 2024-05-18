'use client';
import React from 'react'
import Link from 'next/link';

interface ErrorPageProps{
    error: Error;
    reset:() => void;
}

function ErrorPage({error , reset}: ErrorPageProps) {
  return (

    <div  className='fix-height pt-7 text-center'>
 <div className='text-3x1 text-red-600 font-semibold'>
      Something went wrong 
    </div>

    <h2 className='text-gray-700 my-3 text-xl'>
        Error Message: {error.message}
    </h2>

    <button onClick={()=>reset()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
        Try again
    </button>
    <Link href='/' className='text-xl underline text-blue-700 block mt-6'>
        Go to home page
    </Link>
    </div>
   
  )
}

export default ErrorPage
