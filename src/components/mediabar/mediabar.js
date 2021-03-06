import React from "react";
import "./mediabar.css";
import Footer from "../footer/footer";
import { Navbar, Container } from "reactstrap";

function Mediabar() {
  return (
    <Navbar sticky="bottom" light expand="lg">
      <Container className="container">
        <ul>
          <li>
            <a
              className="nav-item nav-link fa fa-facebook"
              href="https://www.facebook.com/citruslover.band"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </li>

          <li>
            <a
              className="nav-item nav-link fa fa-youtube"
              href="https://www.youtube.com/channel/UC5pChypBelDrS-aC7hIRsxA/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </li>

          <li>
            <a
              className="nav-item nav-link fa fa-instagram"
              href="https://www.instagram.com/citruslover.band/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </li>

          <li>
            <a
              className="nav-item nav-link fa fa-apple"
              href="https://music.apple.com/us/artist/citrus-lover/1470777034"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </li>

          <li>
            <a
              className="nav-item nav-link fa fa-spotify"
              href="https://open.spotify.com/artist/4S2bbNKVs4gqgSG4hacbnu"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </li>

          <li>
            <a
              className="nav-item nav-link fa fa-soundcloud"
              href="https://soundcloud.com/user-787048108"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </li>
        </ul>
        <br />
        <Footer />
      </Container>
    </Navbar>
  );
}

export default Mediabar;
