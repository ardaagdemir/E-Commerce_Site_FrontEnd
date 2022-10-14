import { UserInfo } from 'os'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { CategoryInfo } from '../../models/ICategory'
import { getCategories } from '../../services/CategoryService'
import { control } from '../../utils/util'
import LogOut from '../LogOut'
import UserLogOut from '../LogOut'

function UserNavBar() {

    const user = control()
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm" style={{ backgroundColor: "#BECFDE" }}>
            <div className="container-fluid">
                <NavLink to="/dashboard" className="btn btn-outline-dark btn-sm"><i className="fa fa-home me-2" ></i>Home</NavLink>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <div className="btn-group me-2">
                        <a className="btn btn-outline-dark btn-sm dropdown-toggle" data-bs-toggle="dropdown">{user?.userName}</a>
                        <ul className="dropdown-menu text-center">
                            <li><NavLink to={'/homePage'}><button className=" btn btn-light" >Home</button></NavLink></li>
                            <li><NavLink to={'/account'}><button className=" btn btn-light">Account</button></NavLink></li>
                            <li> <NavLink to={'/userOrders/' + user!.userId}><button className=" btn btn-light" >Orders</button></NavLink> </li>
                        </ul>
                    </div>
                    <LogOut />
                </div>
            </div>
        </nav>
    )
}

export default UserNavBar