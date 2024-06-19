import React, { useEffect, useState } from 'react'
import './Newcollections.css'

import Item from '../Item/Item'
const Newcollections = () => {

  const [new_collections, setnew_collection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setnew_collection(data))
  },[])
  
  return (
    <div>
    <div className='new-collections'>
      <h1>Exclusive Collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i)=>{
            return <Item key={i} id ={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
    </div>
  )
}

export default Newcollections
