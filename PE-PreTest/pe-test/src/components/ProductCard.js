import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // Handle the price which is stored as a string with "$" in db.json
  const priceValue = product.price.replace('$', '');

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={`http://localhost:5000${product.image}`} 
        alt={product.name}
        style={{ height: '200px', objectFit: 'contain', padding: '10px' }} 
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-primary fw-bold">{product.price}</Card.Text>
        <Card.Text className="text-secondary">Category: {product.category}</Card.Text>
        <Card.Text className="text-secondary">Stock: {product.stock}</Card.Text>
        <div className="mt-auto">
          <Link to={`/products/${product.id}`}>
            <Button variant="outline-primary" className="w-100">View Details</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;