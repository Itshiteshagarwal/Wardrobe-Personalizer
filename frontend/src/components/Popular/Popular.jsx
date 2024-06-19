import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'

const Popular = () => {

  const[data_product, setAll_Product] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/popularinmen')
    .then((response)=>response.json())
    .then((data)=>setAll_Product(data))
  },[])

  return (
    <div className='popular'>
      <h1>M<span>E</span>N'<span>S</span> T<span>R</span>E<span>N</span>D<span>Y</span></h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i)=>{
                return <Item key={i} id ={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
