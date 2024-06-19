import React, { useContext, useEffect, useState } from 'react';
import './Cartitems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import logo from '../Assets/logo.png';

const Cartitems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  const [isFormFilled, setIsFormFilled] = useState(false); 


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Function to handle payment with Razorpay
  const handlePayment = async () => {
    if (!isFormFilled) {
      alert('Please fill the delivery details first.'); // Show alert if form not filled
      return;
    }

    const response = await fetch('http://localhost:4000/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: getTotalCartAmount(),
        currency: 'INR',
        orderId: 'order.id',
      }),
    });

    const order = await response.json();

    if (!order) {
      alert('Failed to create order. Please try again later.');
      return;
    }

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 2);

    const options = {
      key: 'rzp_test_mvxSNO6vLXSI0J',
      amount: order.amount,
      currency: order.currency,
      name: 'Wardrobe Personalizer',
      description: 'Payment for Purchase',
      image: { logo },
      order_id: order.id,
      handler: function (response) {
        alert(`Payment successful. Your order will be delivered on ${deliveryDate.toDateString()}`);
        all_product.forEach(product => removeFromCart(product.id)); 
      },
      notes: {
        address: 'World Wide',
      },
      theme: {
        color: '#3399cc',
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handleFormChange = () => {
    setIsFormFilled(true);
  };

  return (
    <div className='cartitems'>
         <p className="title">Products</p>
      <div className="cartitems-format-main">
        <p>products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className='classitem-remove-icon'
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className='place-order-left'>
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" name="firstName" placeholder='First Name' onChange={handleFormChange} />
            <input type="text" name="lastName" placeholder='Last Name' onChange={handleFormChange} />
          </div>
          <input type="email" name="email" placeholder='Email address' onChange={handleFormChange} />
          <input type="text" name="street" placeholder='Street' onChange={handleFormChange} />
          <div className="multi-fields">
            <input type="text" name="city" placeholder='City'  onChange={handleFormChange} />
            <input type="text" name="state" placeholder='State'  onChange={handleFormChange} />
          </div>
          <div className="multi-fields">
            <input type="text" name="zipCode" placeholder='Zip Code' onChange={handleFormChange} />
            <input type="text" name="country" placeholder='Country' onChange={handleFormChange} />
          </div>
          <input type="text" name="phone" placeholder='Phone' onChange={handleFormChange} />
        </div>
        <div className="place-order-right">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className='cartitems-total-item'>
                <p>Subtotal</p>
                <p>Rs.{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>Rs.{getTotalCartAmount()}</h3>
              </div>
            </div>
            <button onClick={handlePayment}>Proceed To CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartitems;
