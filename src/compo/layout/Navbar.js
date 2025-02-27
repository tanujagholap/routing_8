import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/add">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/add">ADD</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/show">SHOW</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/update">UPDATE</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/delete">DELETE</NavLink>
                </li>
                
                
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
  )
}

export default Navbar