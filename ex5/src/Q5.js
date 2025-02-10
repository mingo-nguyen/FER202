import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const students = [
  { id: "DE160162", name: "Nguyễn Hòa Quốc Định", location: "Đà Nẵng", present: false, image: "avatar.jpg" },
  { id: "DE160377", name: "Choy Vĩnh Thiên", location: "Quảng Nam", present: true, image: "avatar.jpg" },
  { id: "DE160457", name: "Đỗ Ngọc Phúc", location: "Đà Nẵng", present: true, image: "avatar.jpg" },
  { id: "DE170089", name: "Lê Hoàng Minh", location: "Đà Nẵng", present: false, image: "avatar.jpg" },
];

const Q5 = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#D2A679" }}>
        <div className="container-fluid px-4">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="logofpt.png" alt="FPT University" height="40" className="me-2" />
            <span className="fw-bold text-danger">FPT UNIVERSITY</span>
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link text-dark" href="#"><i className="fas fa-home"></i> Trang chủ</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#"><i className="fas fa-book"></i> Ngành học</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#"><i className="fas fa-file-alt"></i> Tuyển sinh</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#"><i className="fas fa-list"></i> Sinh viên</a></li>
            </ul>
            <div className="ms-3">
              <span className="me-2">Search:</span>
              <input className="form-control d-inline w-auto" type="search" placeholder="" />
            </div>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="container-fluid p-0" style={{ backgroundColor: "#E87E24" }}>
  <div className="d-flex justify-content-center">
    <img 
      src="fptstudents.jpeg" 
      className="" 
      alt="Students" 
      style={{
        objectFit: "cover",
        objectPosition: "center",
        width: "75%",
      }}
    />
  </div>
</div>

      {/* Breadcrumb */}
      <div className="container my-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Students</li>
          </ol>
        </nav>
      </div>

      {/* Students Detail */}
      <div className="container">
        <h2 className="text-center mb-4">Students Detail</h2>
        <div className="row">
          {students.map((student) => (
            <div key={student.id} className="col-md-6 mb-4">
              <div className="card p-3 text-center">
                <img src={student.image} className="img-fluid rounded" alt={student.name} />
                <h5 className="mt-2">{student.name}</h5>
                <p>{student.id}</p>
                <p>{student.location}</p>
                <div>
                  <input type="radio" name={student.id} checked={!student.present} /> Absent
                  <input type="radio" name={student.id} checked={student.present} className="ms-2" /> Present
                </div>
                <button className="btn btn-warning mt-2">Submit</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
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
    </div>
  );
};

export default Q5;