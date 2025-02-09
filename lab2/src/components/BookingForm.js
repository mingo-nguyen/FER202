import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    comment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="booking-section">
      <div className="container">
        <h2 className="text-center mb-5">Book Your Table</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <select
                  className="form-select"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">Select a Service</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <textarea
              className="form-control"
              name="comment"
              rows={6}
              placeholder="Please write your comment"
              value={formData.comment}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-warning btn-lg">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;