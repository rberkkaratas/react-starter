import React from 'react'
import { Link } from 'react-router-dom'

export default function AppNavbar() {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
    </>
  )
}
