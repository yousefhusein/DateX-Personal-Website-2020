import "./Section.scss";

import { Container } from "react-bootstrap";
import React from "react";

export default function Section({
  color = "white",
  pattern = false,
  label = "",
  description = "",
  ...props
}) {
  return (
    <section
      className={`section ${color || "white"} ${pattern ? "pattern" : ""}`}
      id={props.id}>
      <Container>
        <div className="section-header text-center p-5">
          <h2 className="fw-900">{label}</h2>
          <p className={color === "dark" ? "text-white-50" : "text-muted"}>
            {description || ""}
          </p>
        </div>
        <div className="w-100">{props.children}</div>
      </Container>
    </section>
  );
}
