import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { OrderInfo } from '../../models/IOrder'
import { orderList } from '../../services/OrderService'
import AdminNavbar from './AdminNavbar'

function Order() {

  const [orders, setOrders] = useState<OrderInfo[]>([])

  useEffect(() => {
    orderList().then(res => {
      setOrders(res.data.result)
    })
  }, [])
  
  
  return (
    <>
      <AdminNavbar />
      <section className="jumbotron text-center">
      <h2 className="text-center fw-bold fs-5 modal-title mb-3" style={{backgroundColor: "#d3d3d3"}}>Admin Product Page</h2>
        <div className="container">       
          <div className='row'>
            <div className='col-sm-4'> </div>
            <div className='col-sm-4'> </div>
          </div>
        </div>

      </section>
      <div className="container">
        <div className="row">
          <table className="table table-striped">
            <thead style={{ backgroundColor: "#BECFDE"}}>
              <tr>
                <th scope="col">No</th>
                <th scope="col">User ID</th>
                <th scope="col">Product ID</th>
                <th scope="col">User Name</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col" className='text-end'>***</th>
              </tr>
            </thead>
            {orders.map((item, index) =>
              <tbody key={index}>
                <tr>
                  <th scope="row">{index + 1} </th>
                  <td>{item.uid}</td>
                  <td>{item.pid}</td>
                  <td>{item.firstName + " " + item.lastName}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td className='d-flex justify-content-end'>
                    <NavLink to={'/orderDetail/' + item.oid}><button className='btn text-light btn-sm' style={{ backgroundColor: "#153E62" }}>Detail</button></NavLink>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
    </div>
    
    </>
  )
}

export default Order