import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          vindev<span>.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={active === link.label ? 'active' : ''}
                onClick={() => setActive(link.label)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" style={{ transform: isOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
          <span className="hamburger-line" style={{ opacity: isOpen ? 0 : 1 }} />
          <span className="hamburger-line" style={{ transform: isOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
        </button>
      </header>

      {/* Mobile Menu — outside header so it doesn't affect layout */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => { setIsOpen(false); setActive(link.label); }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}