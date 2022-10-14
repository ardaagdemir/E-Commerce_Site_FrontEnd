import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { OrderInfo } from '../../models/IOrder'
import { ProductImageInfo } from '../../models/IProductImage'
import { orderDelete,  orderDetail,  orderList } from '../../services/OrderService'
import { imageList } from '../../services/ProductImageService'
import { control } from '../../utils/util'
import UserNavBar from './UserNavBar'

function UserOrder() {

  const uid = control()?.userId
  const paramsUid = Number(uid);

  const { oid } = useParams()
  const paramsOid = Number(oid)

  const [orders, setOrders] = useState<OrderInfo[]>([])
  const [img, setImg] = useState<ProductImageInfo[]>([])

  useEffect(() => {
    orderUpdate(paramsOid)

    //category list
    orderDetail(paramsUid).then(res => {
      const list = res.data.result
      console.log(list);

      setOrders(list)

    })
  }, [])

  //product delete
  const funcDelete = (oid: number) => {
    orderDelete(oid).then(res => {
      if (res.data.status) {
        orderUpdate(paramsOid)
      }
    })
  }

  //product list
  const orderUpdate = (oid: number) => {
    orderList().then(res => {
      const orderList = res.data.result
      setOrders(orderList)
    })
  }


  return (
    <>
      <UserNavBar />
      <div className="container">
        <div className="row">
          <table className="table table-striped table-hover mt-2">
            <thead style={{ backgroundColor: "#BECFDE" }}>
              <tr>
                <th scope="col">No</th>
                <th scope="col">User ID</th>
                <th scope="col">Product ID</th>
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
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td className='text-end'><a onClick={() => funcDelete(item.oid)} role='button' className="btn btn-danger px-2 py-1">Delete</a></td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  )
}

export default UserOrder