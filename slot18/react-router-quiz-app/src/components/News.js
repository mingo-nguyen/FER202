import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import './styles/News.css';

function News() {
  const newsList = [
    { 
      id: 1, 
      title: "Woman bakes expletive-laden pies to 'get a rise' out of her grandmother in annual tradition", 
      description: "'What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,' wrote Jess Lydon.", 
      images: 'images/event-1.jpg',
      category: 'Food',
      date: 'November 20, 2023'
    },
    { 
      id: 2, 
      title: "Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans", 
      description: "Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.", 
      images: 'images/event-2.jpg',
      category: 'Lifestyle',
      date: 'November 18, 2023'
    },
    { 
      id: 3, 
      title: "Burger King is testing a new breakfast sandwich", 
      description: "This is a win for the flatbread fans.", 
      images: 'images/event-3.jpg',
      category: 'Food',
      date: 'November 15, 2023'
    },
    { 
      id: 4, 
      title: "Popeyes permanently adds chicken wings to its menu", 
      description: "And you can get 'em in five different flavors.", 
      images: 'images/event-4.jpg',
      category: 'Food',
      date: 'November 12, 2023'
    },
    { 
      id: 5, 
      title: "Top salmon with a sizzling mix of aromatics and spices", 
      description: "Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.", 
      images: 'images/event-5.jpg',
      category: 'Recipes',
      date: 'November 10, 2023'
    },
    { 
      id: 6, 
      title: "80 Christmas dinner ideas for the ultimate holiday feast", 
      description: "Build the perfect Christmas menu with these delicious recipes.", 
      images: 'images/event-6.jpg',
      category: 'Holidays',
      date: 'November 5, 2023'
    },
    { 
      id: 7, 
      title: "How to make the easiest prime rib roast for the holidays", 
      description: "Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.", 
      images: 'images/event-7.jpg',
      category: 'Recipes',
      date: 'November 2, 2023'
    },
    { 
      id: 8, 
      title: "Turn leftover turkey into a flavorful Waldorf salad", 
      description: "This light, bright turkey salad is the best post-Thanksgiving lunch.", 
      images: 'images/event-8.jpg',
      category: 'Recipes',
      date: 'October 28, 2023'
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Food': 'primary',
      'Lifestyle': 'success',
      'Recipes': 'info',
      'Holidays': 'danger'
    };
    return colors[category] || 'secondary';
  };

  return (
    <Container className="news-container">
      <div className="glass-card title-card mb-5">
        <h2 className="text-center">Latest Food News</h2>
        <div className="glass-divider"></div>
        <p className="text-center news-subtitle">
          Stay updated with the latest food trends, recipes, and culinary delights from around the world
        </p>
      </div>
      
      <Row>
        {newsList.map((news, index) => (
          <Col lg={4} md={6} className="mb-4" key={news.id}>
            <Card className="news-card glass-card h-100" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="news-image-container">
                <Card.Img variant="top" src={news.images} className="news-image" />
                <div className="news-overlay">
                  <Badge bg={getCategoryColor(news.category)} className="news-category">
                    {news.category}
                  </Badge>
                </div>
              </div>
              <Card.Body>
                <div className="news-date">
                  <i className="fas fa-calendar-alt me-2"></i>
                  {news.date}
                </div>
                <Card.Title className="news-title">{news.title}</Card.Title>
                <Card.Text className="news-description">{news.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="news-footer">
                <a href="#" className="news-link">
                  Read More <i className="fas fa-arrow-right ms-1"></i>
                </a>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      
      <div className="text-center mt-5">
        <button className="glass-btn">
          <i className="fas fa-sync-alt me-2"></i>
          Load More News
        </button>
      </div>
    </Container>
  );
}

export default News;