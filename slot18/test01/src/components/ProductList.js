import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const handleAddProduct = () => {
    navigate('/products/add');
  };

  if (loading) return <Container className="glass-container mt-5"><p className="text-white">Loading products...</p></Container>;
  if (error) return <Container className="glass-container mt-5"><p className="text-danger">{error}</p></Container>;

  return (
    <Container className="mt-5">
      <div className="glass-container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="page-title mb-0">Product Management</h2>
          <Button 
            className="btn-glass btn-glass-primary"
            onClick={handleAddProduct}
          >
            <i className="bi bi-plus-circle me-2"></i> Add Product
          </Button>
        </div>
        
        <Row className="product-grid">
          {products.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <div className="glass-card">
                <Card.Body>
                  {product.image && (
                    <div className="text-center mb-3">
                      <img
                        src={`${product.image}`}
                        alt={product.name}
                        style={{ maxHeight: '150px', objectFit: 'contain', borderRadius: '8px' }}
                      />
                    </div>
                  )}
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Subtitle className="mb-2">{product.category}</Card.Subtitle>
                  <Card.Text>
                    Price: {product.price}<br />
                    Stock: {product.stock}
                  </Card.Text>
                  <Button 
                    className="btn-glass btn-glass-primary"
                    onClick={() => handleViewDetails(product.id)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ProductList;