import React from 'react'

export default function Work() {
  return (
    <div>
      
      <div className="flex-col pt-30 gap-7 flex mt-3.5 my-0 mx-auto w-3xl">
        <h1 className="text-black font-bold text-7xl">My Work</h1>

        <p>My work is driven by a passion for creativity and innovation.</p>

        <p>
          With a background in the entertainment industry, I specialise in
          crafting unique, impactful projects that tell compelling stories and
          connect people in meaningful ways. I thrive on exploring new ideas,
          pushing boundaries, and building solutions that not only engage but
          inspire.
        </p>

        <h2 className=" text-black font-bold text-4xl border-b p-5 border-amber-300">
          All Projects
        </h2>

        <div className=" grid grid-cols-2 gap-5">
          <div className="">
            <img
              className="rounded-lg h-50 w-100"
              src="https://framerusercontent.com/images/jXqWW8QCPD0aqE9dmyJQkRTI.jpg?width=1920&height=1275"
              alt=""
            />
            <h3 className="hover:text-amber-400 font-bold">TrailType</h3>
            <p> Modern design insprie by the greay outdoors.</p>
          </div>

          <div className="">
            <img
              className="rounded-lg w-100 h-50"
              src="https://framerusercontent.com/images/70epA0P7vCPrUNNzfno4oMeq70.jpg?width=640&height=424"
              alt=""
            />
            <h3 className="hover:text-amber-400 font-bold">
              The spark Sessions
            </h3>
            <p>A podcast for Creators cjasing meaningful work.</p>
          </div>

          <div className="">
            <img
              className="rounded-lg w-100 h-50"
              src="https://framerusercontent.com/images/iizk6LkELoUbbnIyvcDICbye6OE.jpg?width=640&height=427"
              alt=""
            />
            <h3 className="hover:text-amber-400 font-bold">Into the wild</h3>
            <p>A raw journey through nature's extremes.</p>
          </div>

          <div>
            <img
              className="rounded-lg w-100 h-50"
              src="https://framerusercontent.com/images/nchX9VIPEG8cMNYOYqW0D4PFis.jpg?width=1920&height=1272"
              alt=""
            />
            <h3 className="hover:text-amber-400 font-bold">
              Voices of the City
            </h3>
            <p>An audio-visual documentary of urban stories.</p>
          </div>

          <div className="">
            <img
              className="rounded-lg w-100 h-50"
              src="https://framerusercontent.com/images/1Gv2RzKwUQuBFypeylDpFHLHR48.jpg?width=1920&height=1080"
              alt=""
            />
            <h3 className="hover:text-amber-400 font-bold">Climb Club</h3>
            <p>Community through vertical movement.</p>
          </div>

          <div>
            <img
              className="rounded-lg w-100 h-50"
              src="https://framerusercontent.com/images/LU4K4sq9ecawedJXuZQaKLxSFG4.jpg?width=1920&height=1327"
              alt=""
            />
            <h3 className="hover:text-amber-400 font-bold">Frame by Frame</h3>
            <p>A vesual journal thourgh short-form storytelling.</p>
          </div>
        </div>

        <p className=" font-semibold">
          Whether it's in the world of media, production, or creative
          consulting, my focus is always on creating work that resonates -
          pushing the limits of what's possible while staying rooted in
          authenticity and purpose.
        </p>

        <p className=" font-semibold ">
          If you'd like to connect for work queries or collaborations, please do
          get in touch. I also write a weekly newsletter to share my
          experiences. Do join if you'd like to read more about my adventures.
        </p>
      </div>
    </div>
  )
}
