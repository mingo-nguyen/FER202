import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Q4 = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <div className="row bg-warning py-3 text-center">
        <div className="col">
          <img src="logofpt.png" alt="FPT University Logo" className="img-fluid" />
        </div>
      </div>
      
      {/* Navigation */}
      <div className="row bg-light text-center py-2">
        <div className="col">
          <nav>
            <a href="#home" className="mx-3 text-dark">Home</a>
            <a href="#about" className="mx-3 text-dark">About</a>
            <a href="#contact" className="mx-3 text-dark">Contact</a>
          </nav>
        </div>
      </div>
      
      {/* Content */}
      <div className="row flex-grow-1 justify-content-center py-5">
        <div className="col-md-6 text-center">
          <h2 id="about">About</h2>
          <p>This is the about section of the website.</p>
          <h2 id="contact">Contact</h2>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="row bg-warning text-center py-3 mt-auto">
        <div className="col">
          <p className="mb-0">&copy; 2023 Website. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Q4;