import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RelatedProducts.css';
import Item from '../Item/Item';

const RelatedProducts = () => {
  const { productId } = useParams();

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/related_products/${productId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch related products. Please try again later.');
        }

        const data = await response.json();
        setRelatedProducts(data);
      } catch (error) {
        console.error('Failed to fetch related products:', error);
        setError('Failed to fetch related products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [productId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (relatedProducts.length === 0) {
    return <div className="no-related-products">No related products found.</div>;
  }

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className='relatedproducts-items'>
        {relatedProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
