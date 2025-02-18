const Footer = () => {
    return (
      <footer className="text-center p-3 mt-4" style={{ backgroundColor: "#E87E24", color: "white" }}>
        <h5>Our Address</h5>
        <p>Khu đô thị FPT Đà Nẵng</p>
        <p>📞 +84023111111 | +852 8765 4321</p>
        <p>📧 <a href="mailto:fptudn@fpt.edu.vn" style={{ color: "white" }}>fptudn@fpt.edu.vn</a></p>
        <div className="social-icons mt-2">
          <i className="fab fa-google-plus-g mx-2"></i>
          <i className="fab fa-facebook-f mx-2"></i>
          <i className="fab fa-linkedin-in mx-2"></i>
          <i className="fab fa-twitter mx-2"></i>
          <i className="fab fa-youtube mx-2"></i>
          <i className="fas fa-envelope mx-2"></i>
        </div>
        <p className="mt-2">© Copyright 2023</p>
      </footer>
    );
  };
  
  export default Footer;