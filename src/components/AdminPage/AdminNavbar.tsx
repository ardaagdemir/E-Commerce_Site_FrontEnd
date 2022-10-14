import React from 'react'
import { NavLink } from 'react-router-dom'
import LogOut from '../LogOut'
import UserLogOut from '../LogOut'

function AdminNavbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm" style={{backgroundColor: "#BECFDE"}}>
      <div className="container-fluid">
        <NavLink to="/dashboard" className="btn btn-outline-dark btn-sm"><i className="fa fa-home me-2" ></i>Home</NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/adminProduct">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/adminCategory">Categories</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/adminOrder">Orders</NavLink>
            </li>
          </ul>
              <a className="btn btn-outline-dark ms-2 btn-sm me-2"  href="https://github.com/ardaagdemir" role="button"><i className="bi bi-github"></i></a>
              <LogOut />
        </div>
      </div>
    </nav>
    

  )
}

export default AdminNavbar

