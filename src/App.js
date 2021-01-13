import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavDropdown, Nav, FormControl, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import pho22 from "./pho22.jpg";
import pho33 from "./pho33.jpg";
import pho44 from "./pho44.jpg";
import logo from "./logo.svg";
function App() {
  return (
    <div className="App">
      {" "}
      <header className="App-header">
        {" "}
        <Navbar bg="light" expand="lg">
          {" "}
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
          <Navbar.Collapse id="basic-navbar-nav">
            {" "}
            <Nav className="mr-auto">
              {" "}
              <Nav.Link href="#home">Home</Nav.Link>{" "}
              <Nav.Link href="#link">Link</Nav.Link>{" "}
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                {" "}
                <NavDropdown.Item href="#action/3.1">
                  Action
                </NavDropdown.Item>{" "}
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>{" "}
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>{" "}
                <NavDropdown.Divider />{" "}
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>{" "}
              </NavDropdown>{" "}
            </Nav>{" "}
            <Form inline>
              {" "}
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />{" "}
              <Button variant="outline-success">Search</Button>{" "}
            </Form>{" "}
          </Navbar.Collapse>{" "}
        </Navbar>
        <Carousel>
          {" "}
          <Carousel.Item>
            {" "}
            <img className="d-block w-100" src={pho22} alt="First slide" />{" "}
            <Carousel.Caption> </Carousel.Caption>{" "}
          </Carousel.Item>{" "}
          <Carousel.Item>
            {" "}
            <img className="d-block w-100" src={pho33} alt="Third slide" />{" "}
            <Carousel.Caption></Carousel.Caption>{" "}
          </Carousel.Item>{" "}
          <Carousel.Item>
            {" "}
            <img className="d-block w-100" src={pho44} alt="Third slide" />{" "}
            <Carousel.Caption> </Carousel.Caption>{" "}
          </Carousel.Item>
        </Carousel>{" "}
      </header>{" "}
    </div>
  );
}
export default App;
