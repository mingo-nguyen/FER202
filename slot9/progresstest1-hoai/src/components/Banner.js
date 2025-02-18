import { Container } from 'react-bootstrap';

const Banner = () => {
  return (
    <Container fluid className="p-0" style={{ backgroundColor: "#E87E24" }}>
      <div className="d-flex justify-content-center">
        <img 
          src="fptstudents.jpeg" 
          alt="Students" 
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "75%",
          }}
        />
      </div>
    </Container>
  );
};

export default Banner;