import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "reactstrap";

function Links() {
  return (
    <Container className="links">
      <Row>
        <Col></Col>
        <Col>
          <Jumbotron className="pikachu">
            <div className="bg"></div>
            <div className="content">
              <h1>
                {" "}
                <a
                  href
                  onClick={() =>
                    window.open(
                      "https://open.spotify.com/artist/4S2bbNKVs4gqgSG4hacbnu"
                    )
                  }
                >
                  Listen
                </a>
              </h1>
            </div>
          </Jumbotron>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Jumbotron className="jumbotron jumbotron-fluid">
          <Container>
            <h1>
              <a
                href
                onClick={() =>
                  window.open(
                    "https://citruslover.bandcamp.com/album/citrus-lover"
                  )
                }
              >
                Buy Music
              </a>
            </h1>
          </Container>
        </Jumbotron>
      </Row>

      <Row>
        <Jumbotron className="bulb" fluid>
          <Container>
            <h1>
              <a
                href
                onClick={() =>
                  window.open("https://www.bonfire.com/store/citruslover/")
                }
              >
                Merch
              </a>
            </h1>
          </Container>
        </Jumbotron>
      </Row>
      <Row>
        <Jumbotron className="cow" fluid>
          <Container>
            <h1>
              <Link to="/bio">About Us</Link>
            </h1>
          </Container>
        </Jumbotron>
      </Row>

      <Row>
        <Jumbotron className="chicken" fluid>
          <Container>
            <h1>
              <Link to="/contact">Contact</Link>
            </h1>
          </Container>
        </Jumbotron>
      </Row>
    </Container>
  );
}

export default Links;
