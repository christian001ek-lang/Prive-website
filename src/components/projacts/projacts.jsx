import React from 'react'

export default function Projects() {
  return (
    <div>
  

      <section className="flex gap-5 justify-center w-4xl p-4 border border-gray-100 rounded-lg mt-20 my-7 mx-auto bg-gray-100">
        <div> 
          
            <img
              className="rounded-lg w-75 h-[200px]"
              src="https://framerusercontent.com/images/ov8RtiB4RSLvQjvdO37b38eRBo.jpg?scale-down-to=512&width=640&height=427"
              alt=""
            />
          </div>
          <div  >
            <h2 className="text-2xl md:text-5xl font-bold text-black mb-8">
              Subscribe to my Newsletter
            </h2>
          <form class="flex flex-col sm:flex-row gap-4 mb-5">
            <input
              type="email"
              placeholder="name@email.com"
              class="flex-1 px-4 py-4 text-xl border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
            />

            <button
              type="submit"
              class="px-6 py-4 bg-gray-800 text-white text-xl font-medium rounded-lg hover:bg-gray-700 transition"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xl text-gray-700 leading-relaxed">
            Sign up to stay updated about my latest work and adventures.{" "}
          </p>
          <em>No Spam, No BS. Promise!</em>
        </div>
      </section>
    </div>
  )
}
