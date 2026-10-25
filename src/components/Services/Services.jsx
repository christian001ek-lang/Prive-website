import React from 'react'

export default function Services() {
  return (
    <div>
      
      <div className="border-b-1 p-3 border-amber-200 gap-7 flex justify-between mt-3.5 my-0 mx-auto w-3xl">
        <h2 className="font-bold text-3xl">Latest Posts</h2>
        <p className="text-gray-800  font-semibold hover:text-amber-400">
          View all
        </p>
      </div>

      <div className="p-5 border-b-1 border-b-gray-200 flex gap-6 w-3xl my-0 mx-auto">
        <p className='font-light'>Jul 2025 </p>
        <p className="hover:text-amber-400">
          How I built my Framer template empire
        </p>
      </div>

      <div className="p-5 border-b-1 border-b-gray-200 flex gap-6 w-3xl my-0 mx-auto">
        <p className='font-light'>Jun 2025 </p>
        <p className="hover:text-amber-400">My journey from $0 to $10k MRR</p>
      </div>

      <div className="p-5 border-b-1 border-b-gray-200 flex gap-6 w-3xl my-0 mx-auto">
        <p className='font-light'>Jun 2025 </p>
        <p className="hover:text-amber-400">Is vibe coding here to stay?</p>
      </div>

      <div className="p-5 border-b-1 border-b-gray-200 flex gap-6 w-3xl my-0 mx-auto">
        <p className='font-light'>May 2025 </p>
        <p className="hover:text-amber-400">Don't complian,create!</p>
      </div>
    </div>
  )
}
