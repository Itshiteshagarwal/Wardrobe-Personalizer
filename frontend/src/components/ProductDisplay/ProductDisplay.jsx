import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';
import { useParams } from 'react-router-dom';

const ProductDisplay = (props) => {
    const{product} = props;
    const {addToCart} = useContext(ShopContext);
    const{all_product} = useContext(ShopContext);
    const { productId } = useParams();
    const descproduct = all_product.find((product) => product.id === Number(productId));
  return (
    <div className='productdisplay'>
          <div className="productdisplay-left">
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
          </div>
          <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>{122}</p>
            </div>
            <div className="produtdisplay-right-size">
                <h1>Select Size</h1>
                <div className="product-display-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <div className="productdisplay-right-description">
              <p>Description</p>
                {descproduct.description}
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">Rs.{product.old_price}</div>
                <div className="productdisplay-right-price-new">Rs.{product.new_price}</div>
            </div>
               <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span> {product.category}</p>
            <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
          </div>
    </div>
  )
}

export default ProductDisplay
