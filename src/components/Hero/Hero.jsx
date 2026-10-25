import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Post from "../Post/post";
import Services from "../Services/Services";
import Projects from "../projacts/projacts";

export default function Hero() {
  return (
  <div>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col pt-30 gap-7 mt-3.5 my-0 mx-auto w-3xl"
    > 
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="text-black font-bold text-7xl"
      >
        Luke Williams
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex justify-between"
      >
        <p className="text-gray-800 font-semibold">
          Founder - Matrix Designs
        </p>
        <p className="text-gray-800 font-semibold">
          📍 New York
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Hi there! I’m an adventurer based in New York, with a background in
        the entertainment industry. These days, I’m driven by a love for
        creativity and innovation, constantly exploring new ways to connect
        ideas and build something meaningful.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        When I’m not immersed in my projects, you’ll find me outdoors -
        scaling rock faces, hiking scenic trails, and embracing the energy of
        nature. Life is all about climbing to new heights, both literally and
        figuratively!
      </motion.p>

       
    </motion.div>

<Post/>
<Services />
     {/* <Post />
      <Services />
      <Projacts /> */}
</div>

  );
}