import { author, skills } from "../../../utils/constants";

import BigImg from "../../../assets/me.png";
import React from "react";
import { ReactTyped } from "react-typed";
import { scrollToElement } from "../../../utils/scroll";

export default function Hero() {
  return (
    <div className="content-wrapper" id="home">
      <div className="container d-flex flex-row justify-content-between align-items-center">
        <div className="left-side me-5">
          <div className="texts">
            <p className="text-1">Hello! my name is {author.firstName}</p>
            <h1 className="text-2">
              I Am{" "}
              <ReactTyped strings={skills} typeSpeed={40} backSpeed={50} loop />
            </h1>
            <p className="text-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis labore odio quibusdam eveniet ea ipsum minus ipsa
              harum molestias!
            </p>
          </div>
          <div className="mt-4 d-flex">
            <button
              className="btn btn-light text-uppercase fw-semibold me-2 rounded-5"
              onClick={() => scrollToElement("portfolio")}>
              Portfolio
            </button>
            <button
              className="btn btn-primary text-uppercase fw-semibold rounded-5"
              onClick={() => scrollToElement("contact")}>
              Contact
            </button>
          </div>
        </div>
        <div className="right-side d-none d-lg-block">
          <img
            src={BigImg}
            className="overflow-hidden border-white rounded-circle"
            style={{
              boxShadow:
                "0px 0px 2px 1px rgba(var(--bs-white-rgb), var(--bs-border-opacity))",
            }}
            width="350px"
            height="350px"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
