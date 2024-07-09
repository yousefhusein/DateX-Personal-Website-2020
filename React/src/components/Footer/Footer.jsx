import "./Footer.scss";

import * as Constants from "../../utils/constants";

import React from "react";
import { scrollToElement } from "../../utils/scroll";

export default function Footer() {
  const lists = [
    { label: "Website Links", links: Constants.sectionsLinks },
    { label: "Marketplaces", links: Constants.marketplacesLinks },
  ];

  const handleClick = (event) => {
    event.preventDefault();
    scrollToElement(event.target.getAttribute("data-id"));
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-lg-4">
            <div className="pr-lg-4">
              <h5 className="mb-3 fw-bold text-uppercase">
                {Constants.websiteName}
              </h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                quibusdam ipsum autem deserunt culpa rem fugit maxime veniam
                dolor modi et aperiam molestiae voluptates delectus
                exercitationem, at molestias soluta accusantium?
              </p>
              <ul className="list-inline social-links">
                {Constants.socialLinks.map((x, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href={x.href} target="_blank">
                      <i className={x.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-6 offset-lg-2">
            <div className="row">
              {lists.map((list, index) => (
                <div
                  className={lists.length % 3 === 0 ? "col-4" : "col-6"}
                  key={index}>
                  <div className="px-0 px-lg-2 py-2 py-lg-0">
                    <h5 className="mb-2">{list.label}</h5>
                    <ul className="list-unstyled">
                      {list.links.map((item, i) => (
                        <li key={i}>
                          <a
                            href={item.href}
                            {...(item.id
                              ? { "data-id": item.id, onClick: handleClick }
                              : item.target
                              ? { target: "_blank" }
                              : {})}
                            className="text-muted text-decoration-none">
                            {item.name || item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-16 col-md-6">
            <p className="text-black-50">
              {new Date().getFullYear()} © YousefHusain
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
