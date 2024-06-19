import React, { useState } from 'react';
import './Addproduct.css';
import upload_area from '../../assets/upload_area.svg';

const Addproduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description:"",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload', {
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp)=> resp.json()).then((data)=>{responseData = data})

    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product);
      await fetch ('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("product added"):alert("Failed")
      })
    }
  };

  return (
    <div className='addproduct'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Type here' />
      </div>
      <div className="addproduct-itemfield">
        <p>Product description</p>
        <input value={productDetails.description} onChange={changeHandler} type="text" name="description" placeholder='Type here' />
      </div>
      <div className="addprodut-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>OfferPrice</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
          <option value="women">women</option>
          <option value="men">men</option>
          <option value="kid">kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumbnail-img' alt="" />
        </label>
        <input type="file" onChange={imageHandler} name="image" id="file-input" hidden />
      </div>
      <button onClick={Add_Product} className='addprodut-btn'>ADD</button>
    </div>
  )
};

export default Addproduct;
