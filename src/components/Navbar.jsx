import { Typography } from "@mui/material";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BasicExample() {
  const navigate = useNavigate();
  return (
    <Navbar  bg="light" expand="lg">
      <Container>
        <Typography fontFamily={"roboto"} color={"priamry"} variant="h4">
          Books App
        </Typography>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Typography
              style={{ cursor: "pointer" }}
              pl={2}
              pr={2}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Typography>
            <Typography
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/favourites");
              }}
            >
              Favourites
            </Typography>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
