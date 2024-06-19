import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import cross_icon from '../../assets/cross_icon.png'

const Listproduct = () => {

  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async ()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

    const removeProduct = async (id)=>{
      await fetch('http://localhost:4000/removeproduct', {
        method:'POST',
        headers:{
          Accept:'application/json',
          'content-type':'application/json'
        },
        body:JSON.stringify({id:id})
      })
      await fetchInfo();
    }

  return (
    <div className='listproduct'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((Product, index)=>{
            return <><div key={index}className="listproduct-format-main listproduct-format">
              <img src={Product.image} alt="" className="listproduct-product-icon" />
              <p>{Product.name}</p>
              <p>${Product.old_price}</p>
              <p>${Product.new_price}</p>
              <p>{Product.category}</p>
              <img  onClick={()=>{removeProduct(Product.id)}}  className='listproduct-remove-icon' src={cross_icon} alt="" />
            </div>
            <hr /></>
        })}
      </div>
    </div>
  )
}

export default Listproduct
