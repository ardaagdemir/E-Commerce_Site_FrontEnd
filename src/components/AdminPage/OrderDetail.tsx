import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

function OrderDetail() {
  return (
    <>
    
    <AdminNavbar/>
    <NavLink to={'/adminOrder'} className='btn btn-outline-danger d-flex justify-content-center' >Back To Page</NavLink></>
    
  )
}

export default OrderDetail