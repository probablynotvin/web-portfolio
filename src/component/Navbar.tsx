import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // You can install: npm i react-icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black/50 backdrop-blur-lg shadow-md border-b border-white/10">
      <nav className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        {/* <h1
          className="font-normal"
          style={{
            fontFamily: "'VT323', 'Fira Mono', 'Consolas', monospace",
            color: 'white',
            fontSize: '1.8rem',
          }}
        >
          arvin <span style={{ color: '#FF4F0F' }}>charls</span>
        </h1> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-9 text-white/80 text-xl justify-center items-center mx-auto">
        <li><a href="#home" className="hover:text-white">Home</a></li>
        <li><a href="#about" className="hover:text-white">About</a></li>
        <li><a href="#projects" className="hover:text-white">Projects</a></li>
        <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>


        {/* Hamburger Icon */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 text-white/90 text-lg bg-black/90 py-6 backdrop-blur-md border-t border-white/10">
          <li><a href="#home" className="hover:text-white" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" className="hover:text-white" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" className="hover:text-white" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="hover:text-white" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </header>
  );
}
