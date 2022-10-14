import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CategoryInfo } from '../models/ICategory'
import { getCategories } from '../services/CategoryService'

function Category() {
    
    const [categories, setCategories] = useState<CategoryInfo[]>([])

    useEffect(() => {
        getCategories().then(res => {
            setCategories(res.data.result)
        })
    }, [])
    

  return (

    <div className='container'>
        {categories.map((item, index) =>
               <NavLink to={"/category/" + item.cid}>
                  <button key={index} className='btn me-1 mb-2 mt-2' style={{backgroundColor: "#BECFDE"}} >{item.categoryName}</button>
                </NavLink>
              )}  
    </div>
  )
}

export default Category