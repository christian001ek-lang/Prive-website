import React from 'react'

export default function Footer() {
  return (
    <div>
      
      <footer className="w-full  border-t max-w-3xl mx-auto ">
        <div className="max-w-7xl mx-auto py-5">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className=" text-gray-900 ">© Luke Williams | 2026</p>

            <nav className=" flex items-center gap-6 ">
              <a href="#" className=" hover:text-amber-400 ">
                Home
              </a>
              <a href="#" className=" hover:text-amber-400">
                About
              </a>
              <a href="#" className=" hover:text-amber-400">
                Work
              </a>
              <a href="#" className=" hover:text-amber-400">
                Blog
              </a>
              <a href="#" className=" hover:text-amber-400">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>

    </div>
  )
}
