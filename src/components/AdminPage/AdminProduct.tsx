import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { CategoryInfo } from '../../models/ICategory'
import { ProductInfo } from '../../models/IProduct'
import {  getCategories } from '../../services/CategoryService'
import { productDelete, productList, productSave } from '../../services/ProductService'
import Category from './AdminCategory'
import AdminNavbar from './AdminNavbar'

function Product() {

  const { pid } = useParams()
  const numPid = Number(pid)
  const [title, setTitle] = useState('')
  const [cid, setCid] = useState('')
  const numCid = Number(cid)
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [products, setProducts] = useState<ProductInfo[]>([])

  const [categories, setCategories] = useState<CategoryInfo[]>([])

  useEffect(() => {
    productUpdate(numPid)

    //category list
    getCategories().then(res => {
      const list = res.data.result
      setCategories(list)
    })
  }, [])


  //product save
  const funcSave = () => {
    productSave(numPid, numCid, title, price, description).then(res => {
      productUpdate(numPid)
    })
  }

  //product delete
  const funcDelete = (pid: number) => {
    productDelete(pid).then(res => {
      if (res.data.status) {
        productUpdate(numPid)
      }
    })
  }

  //product list
  const productUpdate = (pid: number) => {
    productList().then(res => {
      const proList = res.data.result
      setProducts(proList)
    })
  }

  return (
    <>
      <AdminNavbar />
      <h2 className="text-center fw-bold fs-5 modal-title mb-3" style={{ backgroundColor: "#D3D3D3"}}>Admin Product Page</h2>
      <div className="container my-4">
        <div className="container">
          <div className='d-flex justify-content-start'>
            <button type="button" className="btn btn-success btn-sm mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className='bi bi-plus-lg'></i> Add</button>
          </div>
          <div className="row">
            <div className='col'>
              <table className="table mb-0" >
                <thead style={{ backgroundColor: "#BECFDE"}}>
                  <tr>
                    <th >Product ID</th>
                    <th>Product Name</th>
                    <th >Category</th>
                    <th >Price</th>
                    <th >Description</th>
                    <th className='text-end'>***</th>
                  </tr>
                </thead>
                {products.map((item, index) =>
                  <tbody key={index}>
                    <tr>
                      <td>{item.pid}</td>
                      <td>{item.title}</td>
                      <td>{item.categoryName}</td>
                      <td>${item.price}</td>
                      <td>{item.description}</td>
                      <td className='d-flex justify-content-end'>
                        <NavLink to={'/productImage/' + item.pid} className='btn btn-success btn-sm me-1'>AddPhoto</NavLink>
                        <a onClick={() => funcDelete(item.pid)} role='button' className="btn btn-danger btn-sm" >Delete</a>
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>
          <div className='row d-flex justify-content-end'>
            <div className='col-sm-6 text-end'>
              <form onSubmit={funcSave}>
                <div className='mb-3'>
                </div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Product</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <input value={title} onChange={(evt) => setTitle(evt.target.value)} required type='text' placeholder='Product Name' className='form-control mb-1' />
                        <select value={cid} onChange={(evt) => setCid(evt.target.value)} className="form-select mb-1">
                          <option selected>Select Category</option>
                          {categories.map((item, index) =>
                            <option key={index} value={item.cid}>{item.categoryName}</option>
                          )}</select>
                        <input value={price} onChange={(evt) => setPrice(evt.target.value)} required type='text' placeholder='Price' className='form-control mb-1' />
                        <textarea value={description} onChange={(evt) => setDescription(evt.target.value)} placeholder='Description' className='form-control mb-2' id="exampleFormControlTextarea3" />
                      </div>
                      <div className="modal-footer">
                        <button type='submit' className='btn btn-success'>Save</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product