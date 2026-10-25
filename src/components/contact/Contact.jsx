import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="flex-col pt-30 gap-7 flex mt-3.5 my-0 mx-auto w-3xl">
        <h1 className="text-black font-bold text-7xl">Get in touch</h1>

        <p className="font-medium">
          Have a project in mind, a collaboration to pitch, or just a story from
          the trail to share? Fill out the form below and I’ll get back to you
          as soon as I can.
        </p>
      </div>
      <section class="max-w-6xl mx-auto py-10  my-0 px-50">
        <form>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-7">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg mb-3 text-gray-900">
                Name
              </label>

              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="h-[60px] w-full rounded-lg border bg-gray-100 border-gray-300 px-4 text-lg outline-none focus:border-gray-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg mb-3 text-gray-900">
                Email
              </label>

              <input
                type="email"
                id="email"
                placeholder="name@email.com"
                className="h-[60px] w-full rounded-lg border bg-gray-100 border-gray-300 px-4 text-lg outline-none focus:border-gray-500"
              />
            </div>
          </div>

          <div class="mt-8 flex flex-col">
            <label for="message" class="text-lg mb-3 text-gray-900">
              Message
            </label>

            <textarea
              id="message"
              placeholder="Tell me about your project or idea..."
              class="h-[200px] w-full resize-none rounded-lg border bg-gray-100 border-gray-300 px-4 py-4 text-lg outline-none focus:border-gray-500"
            ></textarea>
          </div>

          <button
            type="submit"
            class="mt-7 rounded-lg bg-black px-8 py-4 text-lg  text-white hover:bg-orange-500"
          >
            Send Message
          </button>

          <p class="mt-20 text-lg text-gray-900">
            Prefer email? Reach me directly at
            <a
              href="mailto:luke@framer.com"
              class="text-orange-500 hover:underline"
            >
              luke@framer.com
            </a>
            .
          </p>
        </form>
      </section>
    </div>
  );
}
