import AboutImg from "../../../assets/about-image.png";
import { Button } from "react-bootstrap";
import React from "react";
import Section from "../../../components/Section/Section";
import { scrollToElement } from "../../../utils/scroll";

export default function About() {
  return (
    <Section id="about" color="white" label="ABOUT ME" pattern>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
        <div className="px-lg-4 mb-3 mb-lg-0">
          <img
            width={350}
            src={AboutImg}
            className="overflow-hidden my-auto"
            alt=""
          />
        </div>
        <div className="w-100 px-lg-4 mt-4 mt-lg-0">
          <h5 className="fw-semibold">
            Full-Stack Developer, Software Developer and Web Designer
          </h5>
          <p className="text-muted mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
            delectus labore odit et impedit aut qui? Quod qui officia, optio
            nemo nisi necessitatibus, pariatur tempora sint accusamus, fugit
            incidunt nostrum.
          </p>
          <p className="text-muted mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
            repellendus perspiciatis, dolorum officia accusantium molestiae
            facilis a, ut corporis animi expedita maxime provident? Reiciendis,
            doloremque sequi magnam fugit iste rem.
          </p>
          <div className="border"></div>
          <div className="mt-4 d-flex">
            <Button
              size="sm"
              variant="primary"
              className="me-2 rounded-5"
              onClick={() => scrollToElement("services")}>
              Learn More
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="rounded-5"
              onClick={() => scrollToElement("contact")}>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
