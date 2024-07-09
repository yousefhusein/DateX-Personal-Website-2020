import React from "react";
import Section from "../../../components/Section/Section";
import { projects } from "../../../utils/constants";

export default function Portfolio() {
  return (
    <Section
      label="PORTFOLIO"
      description="Here are some projects, made by us in different programming-languages and frameworks"
      color="white"
      id="portfolio"
      pattern>
      <div className="row justify-content-center">
        {projects.map((item, index) => (
          <div className="col-12 col-sm-6 col-lg-4 p-2" key={index}>
            <a href={item.demoURL} className="card border-2 rounded-0 w-100">
              <img src={item.img} className="card-img-top" alt="..." />
            </a>
            <div className="text-center mt-3">
              <p className="fw-bold h6 text-uppercase">{item.name}</p>
              <p className="text-muted small" style={{ marginTop: "-7px" }}>
                {item.collection}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-100 text-center border-top pt-4">
        <a
          href="/#"
          className="btn btn-primary btn-lg fs-6 fw-semibold text-uppercase">
          Explore More <i className="ri-arrow-right-fill"></i>
        </a>
      </div>
    </Section>
  );
}
