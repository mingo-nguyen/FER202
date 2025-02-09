import React from 'react';

const Menu = () => {
  const pizzas = [
    {
      id: 1,
      name: 'Margherita Pizza',
      price: 24.99,
      originalPrice: 40.00,
      image: './images/menu-01.jpg',
      onSale: true
    },
    {
      id: 2,
      name: 'Mushroom Pizza',
      price: 25.99,
      image: './images/menu-02.jpg',
      onSale: false
    },
    {
      id: 3,
      name: 'Hawaiian Pizza',
      price: 30.00,
      image: './images/menu-03.jpg',
      isNew: true
    },
    {
      id: 4,
      name: 'Pesto Pizza',
      price: 19.99,
      originalPrice: 40.00,
      image: './images/menu-04.jpg',
      onSale: true
    }
  ];

  return (
    <section className="menu-section">
      <div className="container">
        <h2 className="text-center mb-5">Our Menu</h2>
        <div className="row">
          {pizzas.map(pizza => (
            <div key={pizza.id} className="col-12 col-sm-6 col-lg-3 mb-4">
              <div className="card">
                <img className="card-img-top" src={pizza.image} alt={pizza.name} />
                <div className="card-body">
                  <h5 className="card-title">{pizza.name}</h5>
                  <div className="price-container">
                    {pizza.onSale && (
                      <span className="original-price">${pizza.originalPrice.toFixed(2)}</span>
                    )}
                    <span className={pizza.onSale ? 'sale-price' : ''}>
                      ${pizza.price.toFixed(2)}
                    </span>
                  </div>
                  {pizza.isNew && <span className="new-badge">New</span>}
                  <button className="btn btn-primary w-100 mt-3">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;