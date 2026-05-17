import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav
      className="flex fixed justify-between items-center p-8  backdrop-blur-xs   z-50 font-bold text-lg w-full"
      style={{
        maskImage: "linear-gradient(to bottom, black 45%, transparent)",
      }}
    >
      <div className="">
        <h1>Destello_Recreated</h1>
      </div>
      <div>
        <ul className="flex gap-10 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/expertise">Expertise</Link>
          </li>
          <li>
            <Link to="/journals">Journals</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <button>Contact Us</button>
      </div>
    </nav>
  );
}

export default Nav
