import React from "react";
import Section from "../../../components/Section/Section";
import { services } from "../../../utils/constants";

const label = "SERVICES";

const description =
  "We believe user experience is the key for any business to succeed.And to help yours, we are here with specially designed Snippets for cross-platform web development projects.";

export default function ServicesSection() {
  return (
    <Section
      id="services"
      color="light"
      label={label}
      description={description}>
      <div className="row w-100 justify-content-center">
        {services.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-4 text-center p-3" key={index}>
            <i
              className={"text-primary " + item.icon}
              style={{ fontSize: "48px" }}></i>
            <h3 className="fw-bold">{item.label}</h3>
            <p className="text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
