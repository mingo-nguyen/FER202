import React from "react";
import NavigationBar from './components/Navbar';
import Banner from './components/Banner';
import BreadcrumbNav from './components/Breadcrumb';
import StudentsDetail from './components/StudentsDetail';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

const students = [
  { id: "DE160162", name: "Nguyễn Hòa Quốc Định", location: "Đà Nẵng", present: false, image: "avatar.jpg" },
  { id: "DE160377", name: "Choy Vĩnh Thiên", location: "Quảng Nam", present: true, image: "avatar.jpg" },
  { id: "DE160457", name: "Đỗ Ngọc Phúc", location: "Đà Nẵng", present: true, image: "avatar.jpg" },
  { id: "DE170089", name: "Lê Hoàng Minh", location: "Đà Nẵng", present: false, image: "avatar.jpg" },
];

function App() {
  return (
    <div>
      <NavigationBar />
      <Banner />
      <BreadcrumbNav />
      <StudentsDetail students={students} />
      <Footer />
    </div>
  );
}

export default App;