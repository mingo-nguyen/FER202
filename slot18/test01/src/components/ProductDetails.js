import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/api';
import { useCart } from '../context/CartContext';
const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load product details. Please try again later.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBack = () => {
    navigate('/products');
  };

  if (loading) return <Container className="glass-container mt-5"><p className="text-white">Loading product details...</p></Container>;
  if (error) return <Container className="glass-container mt-5"><p className="text-danger">{error}</p></Container>;
  if (!product) return <Container className="glass-container mt-5"><p className="text-white">Product not found.</p></Container>;

  return (
    <Container className="mt-5 detail-container">
      <div className="glass-container">
        <h2 className="page-title">{product.name}</h2>
        <div className="glass-card">
          <Card.Body>
            <div className="text-center mb-4">
              {product.image && (
                <img 
                  src={`${product.image}`}
                  alt={product.name} 
                  style={{ maxHeight: '300px', objectFit: 'contain', borderRadius: '10px' }} 
                />
              )}
            </div>
            <Card.Subtitle className="mb-3">{product.category}</Card.Subtitle>
            <Card.Text>
              <strong>Price:</strong> {product.price}<br />
              <strong>Stock:</strong> {product.stock}<br />
              <strong>Description:</strong> {product.description}
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button className="btn-glass mt-3" onClick={handleBack}>
                Back to Products
              </Button>
              <Button className="btn-glass btn-glass-success mt-3" onClick={handleAddToCart}>
                <i className="bi bi-cart-plus me-2"></i> Add to Cart
              </Button>
            </div>
          </Card.Body>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;