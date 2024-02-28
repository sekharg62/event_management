import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/find-events">Find Events</Link>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
