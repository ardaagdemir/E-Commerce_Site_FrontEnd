import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ProductInfo } from '../../models/IProduct'
import { ProductImageInfo } from '../../models/IProductImage'
import { imageList, imageDelete, imageAdd } from '../../services/ProductImageService'
import { productById, productList } from '../../services/ProductService'



function ProductImage() {

    const { pid } = useParams()
    const paramsPid = Number(pid)
    const [images, setImages] = useState<ProductImageInfo[]>([])

    const [products, setProducts] = useState<ProductInfo[]>([])

    useEffect(() => {
        funcImageUpdate(paramsPid)

        productById(paramsPid).then(res => {
            setProducts(res.data.result)
        })
    }, [])


    //image update
    const funcImageUpdate = (pid: number) => {
        imageList(pid).then(res => {
            setImages(res.data.result as ProductImageInfo[])
        })
    }

    //image delete
    const funcImageDelete = (iid: number) => {
        imageDelete(iid).then(res => {
            if (res.data.status) {
                funcImageUpdate(paramsPid)
            }
        })
    }


    //image add
    const onChangeFile = (evt: any) => {
        if (evt.target.files.length < 1) {
            return;
        }

        for (let i = 0; i < evt.target.files.length; i++) {
            const file = evt.target.files[i];
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                const type = file.type
                if (type === 'image/png' || type === 'image/jpeg') {
                    if (file.size < 1000000) {
                        imageAdd(paramsPid, fileReader.result as string).then(res => {
                            funcImageUpdate(paramsPid)
                        })
                    }
                }
            }
            fileReader.readAsDataURL(file);
        }
    }

    return (
        <>
            <section className="jumbotron text-center">
                <div className='row'>
                    <div className='col-sm-12 d-flex justify-content-end p-3 mb-3'>
                        <input className='btn btn-outline-primary me-2' type='file' multiple onChange={onChangeFile}></input>
                        <NavLink to={'/adminProduct'} className='btn btn-outline-danger' >Back To Page</NavLink>
                    </div>
                </div>
                <div className="container">
                    <h3 className=''>Product Image</h3>
                    <hr />
                    <div className="row">
                        {images.map((item, index) =>
                            <div key={index} className="col-md-12 col-lg-4 mb-4 mb-lg-0">
                                <div className="card">
                                    <img src={item.file} className="card-img-top" style={{ height: 250, }} />
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between mb-3">
                                            <a onClick={() => funcImageDelete(item.iid)} role='button' className="btn btn-danger" style={{ position: 'absolute', bottom: 1, left: 1 }}>Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductImage