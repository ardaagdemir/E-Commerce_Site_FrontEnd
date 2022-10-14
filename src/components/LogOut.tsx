
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


function UserLogOut() {
  const navigate = useNavigate()
  const fncLogout = () => {
    sessionStorage.removeItem('user')
    localStorage.removeItem('user')
    navigate('/')
  }
  const clearRole = (title: string) => {
    title = title.substring(5)
    return title
  }
  function capitalizeFirstLetter(str: string) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  }

  return (
    <>
     
      <NavLink to="/" className="btn btn-outline-dark btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" role='button'>Logout</NavLink>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="navbar-brand fw-bold fs-5 modal-title" id="exampleModalLabel">User Logout</h5>
            </div>
            <div className="navbar-brand fw-bold fs-5 modal-body">
              Are you sure logout?
            </div>
            <div className="modal-footer">
              <button data-bs-dismiss="modal" onClick={fncLogout} type="button" className="btn btn-danger btn-sm">Logout</button>
              <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default UserLogOut