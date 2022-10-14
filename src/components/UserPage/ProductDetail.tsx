import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ProductInfo } from '../../models/IProduct'
import { ProductImageInfo } from '../../models/IProductImage'
import { addOrder } from '../../services/OrderService'
import { imageList } from '../../services/ProductImageService'
import { getImageByProductId } from '../../services/ProductService'
import { control } from '../../utils/util'


import UserNavBar from './UserNavBar'

function ProductDetail() {
  
    const navigate = useNavigate()
    const { pid } = useParams()
    const paramsPid = Number(pid)
    const [list, setList] = useState<ProductImageInfo[]>([])
    const [bigImage, setBigImage] = useState('')

    const [proList, setProList] = useState<ProductInfo[]>([])

    const userID = control()?.userId
    const paramsUserID = Number(userID)

    const addToBasket = (item: ProductInfo) => {
        addOrder(paramsUserID, item.pid)
    }

    useEffect(() => {
        imageList(paramsPid).then(res => {
            const stData = res.data.result as ProductImageInfo[]
            setList(stData)
            setBigImage(stData[0].file)
        })

        getImageByProductId(paramsPid).then(res => {
            setProList(res.data.result)
        })

    }, [])

    return (
        <>
            <UserNavBar />
            <br />
            <br />
            <div>
                {proList.map((itm, indexx) =>
                    <div className="container py-3">
                        <div className="row py-4">
                            <div key={indexx} className="col-md-6">
                                <img src={bigImage} alt={itm.title} height="500px" width="500px" />
                                <div>
                                    {list.map((item, index) =>
                                        <img key={index} role='button' onClick={() => setBigImage(item.file)} src={item.file[0]} className="img-thumbnail m-1" />
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6 py-5">
                                <button onClick={(evt)=> navigate('/category/' + paramsPid) } className='btn text-uppercase text-black-100 py-3'>
                                    {itm.categoryName}
                                </button>
                                <h1 className='display-5 fw-bold'>{itm.title}</h1>

                                <h3 className='display-6 my-4'>
                                    ${itm.price}
                                </h3>
                                <p className='lead'> {itm.description} </p>
                                <button onClick={() => addToBasket(itm)} className='btn btn-outline-dark px-3 py2'>
                                    Buy Now
                                </button>
                                <button onClick={(evt) => navigate('/homePage')} className='btn btn-danger btn-sm ms-2 px-3 py-2'>
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default ProductDetail