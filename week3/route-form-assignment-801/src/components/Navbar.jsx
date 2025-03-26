import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkClass = ({ isActive }) =>
    `pl-6 mr-16 hover:underline underline-offset-1 font-semibold ${
      isActive ? 'text-blue-400' : 'text-white'
    }`;

  return (
    <nav className="bg-zinc-800 py-5">
      <NavLink to="/" className={linkClass}>Home</NavLink>
      <NavLink to="/login" className={linkClass}>Login</NavLink>
      <NavLink to="/favorite" className={linkClass}>Favorites</NavLink>
    </nav>
  );
}

export default Navbar;
