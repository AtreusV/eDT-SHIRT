import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
        <a href="/" className='logo'>eDT-SHIRT</a>

        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/">Hombre</a>
            <a href="/">Mujer</a>
            <a href="/">Ropa</a>
            <a href="/">Contacto</a>
        </nav>
        
    </header>
  ) 
}

export default Navbar