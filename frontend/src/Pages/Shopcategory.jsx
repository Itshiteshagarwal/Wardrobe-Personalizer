import React, { useContext } from 'react'
import './CSS/Shopcategory.css'
import Item from '../components/Item/Item'
import { ShopContext } from '../context/ShopContext'
const Shopcategory = (props) => {
    const{all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <div className="shopcategory-indexsort">
        <p>
            <span> {props.category} category products</span> Out of all products
        </p>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i)=>{
            if(props.category === item.category){
                return <Item key={i} id ={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
                return null;
            }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default Shopcategory
