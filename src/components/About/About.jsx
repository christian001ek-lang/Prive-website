import React from 'react'

export default function About() {
  return (
    <div>
        <div className="flex-col pt-30 gap-7 flex mt-3.5 my-0 mx-auto w-3xl">
        <h1 className="text-black font-bold text-7xl">About me</h1>

        <p>An adventurer and creative explorer currently based in New York.</p>

        <p>
          With a rich background in the entertainment industry, I’ve spent years
          honing my skills in storytelling, production, and innovation. But
          today, my passion lies in blending creativity with purpose - finding
          new, impactful ways to connect ideas, spark conversation, and build
          meaningful projects that leave a lasting impression.
        </p>

        <div>
          <img
            className="rounded-lg"
            src="https://framerusercontent.com/images/DQrdPN5mJd8iKZkgRDrSEfRCFE.jpg?width=1920&height=1280"
            alt=""
          />
        </div>

        <p>
          Throughout my career, I’ve always been driven by a desire to break
          boundaries, whether that means pushing the limits of what’s possible
          in media or venturing into the unknown in my personal life. I’m a firm
          believer that creativity isn’t just about thinking outside the box;
          it’s about reinventing the box itself.
        </p>

        <p>
          In my work, I focus on combining fresh ideas with practical solutions
          to create something unique that resonates on both an emotional and
          intellectual level. When I'm not immersed in creative projects, you’ll
          likely find me in the great outdoors. Whether I'm scaling rock faces,
          hiking through remote landscapes, or simply soaking in the energy of
          nature, I thrive in environments that challenge both my body and mind.
          To me, life is all about climbing to new heights—both literally and
          figuratively. Every hike, every ascent, is a reminder that growth
          comes from embracing challenges and stepping outside your comfort
          zone.
        </p>

        <div>
          <img
            className="rounded-lg "
            src="https://framerusercontent.com/images/x77zdZ2XgDHCpLHwqN2Qhsiehk.jpg?width=1920&height=1280"
            alt=""
          />
        </div>

        <p>
          I'm always looking for new ways to merge my passions for creativity,
          exploration, and innovation. If <br />
          you're interested in collaborating, or just want to share stories
          about the latest adventure, I’d love to <br /> connect!
        </p>

        <p className="flex gap-1">
          You can also read more about my work
          <ul>
            <p className="text-amber-500 hover:border-b-orange-600 hover:border-b">
              here.
            </p>
          </ul>
        </p>
      </div>
    </div>
  )
}
