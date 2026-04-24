import React from 'react'

interface NavProps {
    className?: string
}

const Nav = ({ className }: NavProps) => {


  return (
    <header className={`bg-zinc-800/80 text-white p-4 ${className}`}>
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold"></div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav