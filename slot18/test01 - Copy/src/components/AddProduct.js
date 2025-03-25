import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../services/api';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    image: ''
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      // Format price as number and stock as integer
      const formattedProduct = {
        ...product,
        price: parseFloat(product.price),
        stock: parseInt(product.stock, 10)
      };

      const response = await addProduct(formattedProduct);
      setSuccess('Product added successfully!');
      setProduct({
        name: '',
        category: '',
        price: '',
        stock: '',
        description: '',
        image: ''
      });
      
      // Navigate back to product list after 1.5 seconds
      setTimeout(() => {
        navigate('/products');
      }, 1500);
    } catch (err) {
      setError('Failed to add product. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={7} xl={6}>
          <div className="glass-container">
            <h2 className="page-title">Add New Product</h2>
            
            {success && (
              <Alert className="alert-glass alert-glass-success mb-4">
                {success}
              </Alert>
            )}
            
            {error && (
              <Alert className="alert-glass alert-glass-danger mb-4">
                {error}
              </Alert>
            )}
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Product Name</Form.Label>
                <Form.Control
                  className="form-control-glass"
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-white">Category</Form.Label>
                <Form.Control
                  className="form-control-glass"
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  placeholder="Enter product category"
                  required
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">Price</Form.Label>
                    <Form.Control
                      className="form-control-glass"
                      type="number"
                      step="0.01"
                      name="price"
                      value={product.price}
                      onChange={handleChange}
                      placeholder="Enter price"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">Stock</Form.Label>
                    <Form.Control
                      className="form-control-glass"
                      type="number"
                      name="stock"
                      value={product.stock}
                      onChange={handleChange}
                      placeholder="Enter stock quantity"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label className="text-white">Description</Form.Label>
                <Form.Control
                  className="form-control-glass"
                  as="textarea"
                  rows={3}
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  placeholder="Enter product description"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="text-white">Image Filename</Form.Label>
                <Form.Control
                  className="form-control-glass"
                  type="text"
                  name="image"
                  value={product.image}
                  onChange={handleChange}
                  placeholder="Enter image filename (e.g. product1.jpg)"
                />
                <Form.Text className="text-white-50">
                  Enter the filename of an image in the public/images folder
                </Form.Text>
              </Form.Group>

              <div className="d-flex gap-2 mt-4">
                <Button 
                  className="btn-glass btn-glass-primary"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Adding Product...' : 'Add Product'}
                </Button>
                <Button 
                  className="btn-glass" 
                  onClick={() => navigate('/products')}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;