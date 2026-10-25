import React from 'react'

export default function Blog() {
  return (
    <div>
      


      <div className="flex-col pt-30 gap-7 flex mt-3.5 my-0 mx-auto w-3xl">
        <h1 className="text-black font-bold text-7xl">My Blog</h1>

        <p>Welcome to my favourite little corner on this website.</p>

        <p>
          Here’s where I share stories from the road, reflections on creativity,
          and insights from the ever-evolving adventure of building, exploring,
          and growing. Whether it's lessons from the wild or thoughts sparked by
          late-night brainstorming sessions, this space captures the journey in
          motion.
        </p>

        <img
          className="rounded-lg  "
          src="https://framerusercontent.com/images/aEkMYso9fdCfqkH7wJ20Pe3lVA.jpg"
          alt=""
        />

        <div className="border-b p-3 border-amber-200 gap-7 flex justify-between mt-3.5 my-0 mx-auto w-3xl">
          <h2 className="font-bold text-3xl">All Posts</h2>
        </div>

        <div className="p-3 border-b border-b-gray-200 flex gap-6 w-3xl my-0 mx-auto">
          <p className="font-light">Jul 2025 </p>
          <p className="hover:text-amber-600">
            How I built my Framer template empire
          </p>
        </div>

        <div className="p-3 border-b-1 border-b-gray-200 flex gap-6 w-3xl my-0 mx-auto">
          <p className="font-light">Jun 2025 </p>
          <p className="hover:text-amber-600">My journey from $0 to $10k MRR</p>
        </div>

        <div className="p-3 border-b-1 border-b-gray-200 flex gap-6 w-3xl my-0 mx-auto">
          <p className="font-light">Jun 2025 </p>
          <p className="hover:text-amber-600">Is vibe coding here to stay?</p>
        </div>

        <div className="p-3 border-b-1 border-b-gray-200 flex gap-6 w-3xl my-0 mx-auto">
          <p className="font-light">May 2025 </p>
          <p className="hover:text-amber-600">Don't complian,create!</p>
        </div>
      </div>
    </div>
  )
}
