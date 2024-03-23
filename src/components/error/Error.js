import React from "react";
import "./Error.css";
import { Container } from "react-bootstrap";
function Error() {
  return (
    <div className="not-found-area">
      <Container>
        <div className="not-found-text text-center">
          <h1>404</h1>
          <p>Page is not found</p>
        </div>
      </Container>
    </div>
  );
}

export default Error;
