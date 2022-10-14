
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductInfo } from '../../models/IProduct'
import { getProImgList } from '../../services/ProductService'
import { control } from '../../utils/util'
import Category from '../Category'

import UserNavBar from './UserNavBar'


function UserHomePage() {


    const [products, setProducts] = useState<ProductInfo[]>([])

    useEffect(() => {

        getProImgList().then(res => {
            setProducts(res.data.result)
        })

    }, [])

    const user = control()
    return (
        <>
            <UserNavBar />
            <div className="container">
                <Category />
                <div className="col-12 ">
                    <hr />
                </div>
                <div className="buttons d-flex justify-content">
                    <div className="container">
                        <div className="row">
                            {products.map((item, index) =>
                                <div key={index} className="col-md-3 mt-4">
                                    <div key={item.pid} className="card h-100 text-center p-4">
                                        <img src={item.file} className="card-img-top" alt={item.title} height="250px" />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{item.title}</h5>
                                            <p className="card-text lead fw-bold"><hr /> </p>
                                            <NavLink to={"/productDetail/" + item.pid}>
                                                <div className='d-grid gap-2'>
                                                    <button className="btn btn-success btn-sm" style={{ backgroundColor: "#153E62" }} type="button">Details</button>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserHomePage