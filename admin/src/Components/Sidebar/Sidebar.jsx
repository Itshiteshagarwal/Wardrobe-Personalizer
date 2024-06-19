import React from 'react';
import { Link } from 'react-router-dom';
import add_product_icon from '../../assets/Product_Cart.svg';
import list_product_icon from '../../assets/Product_list_icon.svg';
import order_icon from '../../assets/order_icon.png'
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className='sidebar-item'>
          <img src={add_product_icon} alt='Add Product Icon' />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to='/listproduct' style={{ textDecoration: 'none' }}>
        <div className='sidebar-item'>
          <img src={list_product_icon} alt='List Product Icon' />
          <p>Product List</p>
        </div>
      </Link>
    </div>
    
  );
}

export default Sidebar;
