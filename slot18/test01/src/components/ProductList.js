import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../services/api';

import { Form, InputGroup } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle search functionality
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const handleAddProduct = () => {
    navigate('/products/add');
  };

  if (loading) return <Container className="glass-container mt-5"><p className="text-white">Loading products...</p></Container>;
  if (error) return <Container className="glass-container mt-5"><p className="text-danger">{error}</p></Container>;

  const handleAddToCart = (product) => {
    addToCart(product);
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
        
        {/* Search bar */}
        <Form className="mb-4">
          <InputGroup>
            <InputGroup.Text className="glass-input-icon">
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
              className="form-control-glass"
              type="text" 
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </InputGroup>
        </Form>
        
        <Row className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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
                    <div className="d-flex justify-content-between">
                      <Button 
                        className="btn-glass btn-glass-primary"
                        onClick={() => handleViewDetails(product.id)}
                      >
                        View Details
                      </Button>
                      <Button 
                        className="btn-glass btn-glass-success"
                        onClick={() => handleAddToCart(product)}
                      >
                        <i className="bi bi-cart-plus"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </div>
              </Col>
            ))
          ) : (
            <Col className="text-center">
              <p className="text-white">No products found matching your search.</p>
            </Col>
          )}
        </Row>
      </div>
    </Container>
  );
};

export default ProductList;