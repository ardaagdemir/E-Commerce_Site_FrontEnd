import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { CategoryInfo } from '../../models/ICategory'
import { categoryDelete, categorySave, getCategories } from '../../services/CategoryService'
import AdminNavbar from './AdminNavbar'


function Category() {

  const {id} = useParams()
  const numId = Number(id)

  const [categoryName, setCategoryName] = useState('')
  const [categories, setCategories] = useState<CategoryInfo[]>([])

  useEffect(() => {
    categoryUpdate(numId)
  }, [])

  

  //category save
  const funcSave = () => {
    categorySave(numId, categoryName).then(res => {
      categoryUpdate(numId)
    })
  }

  //category delete
  const funcDelete = (id: number) => {
    categoryDelete(id).then(res => {
      if (res.data.status) {
        categoryUpdate(numId)
      }
    })
  }

  //category list
  const categoryUpdate = (id: number) => {
    getCategories().then(res => {
      const list = res.data.result
      setCategories(list)
    })
  }

  return (
    <>
      <AdminNavbar />
      <section className="jumbotron text-center">
      <h2 className="text-center fw-bold fs-5 modal-title mb-3" style={{backgroundColor: "#d3d3d3"}}>Admin Category Page</h2>
        <div className="container">
          <div className='row'>
          <div className='col-sm-4 d-flex justify-content-start'>
              <button type="button" className="btn btn-success mb-2 btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className='bi bi-plus-lg'></i> Add Category</button>
            </div>
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
                <th scope="col">Category ID</th>
                <th scope="col">Category Name</th>
                <th scope="col" className='text-end'>***</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((item, index) =>
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.cid}</td>
                  <td>{item.categoryName}</td>
                  <td className='d-flex justify-content-end'>                
                    <button className='btn btn-success me-2 btn-sm'>Update</button>
                    <a onClick={() => funcDelete(item.cid)} role='button' className="btn btn-danger btn-sm">Delete</a>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Category</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <input value={categoryName} onChange={(evt) => setCategoryName(evt.target.value)} required type='text' placeholder='Category Name' className='form-control ' />
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
    </>
  )
}

export default Category