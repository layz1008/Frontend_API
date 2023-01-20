import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">League of Legends</NavLink>
      <NavLink to="/champions">Champions</NavLink>
      <NavLink to="/add-champion">New Champion!</NavLink>
    </nav>
  )
}
