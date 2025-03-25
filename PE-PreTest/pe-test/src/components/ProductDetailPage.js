import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../services/api';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load product details. Please try again later.');
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const handleBack = () => {
    navigate('/products');
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
        <Button variant="primary" onClick={handleBack}>
          Back to Products
        </Button>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="my-5">
        <Alert variant="warning">Product not found</Alert>
        <Button variant="primary" onClick={handleBack}>
          Back to Products
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Card>
        <Card.Header as="h4">Product Details</Card.Header>
        <Card.Body>
          <Row>
            <Col md={4}>
              <img 
                src={`http://localhost:5000${product.image}`}
                alt={product.name}
                className="img-fluid rounded"
              />
            </Col>
            <Col md={8}>
              <h2>{product.name}</h2>
              <p className="lead text-primary fw-bold">{product.price}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Stock Available:</strong> {product.stock} units</p>
              <p><strong>Description:</strong></p>
              <p>{product.description}</p>
              <Button variant="primary" onClick={handleBack}>
                Back to Products
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetailPage;