import "./Navbar.scss";

import { Container, Nav, Navbar } from "react-bootstrap";
import { isShow, scrollToElement } from "../../utils/scroll";
import { sectionsLinks, websiteName } from "../../utils/constants";

import React from "react";

export default function CustomNavbar() {
  const [active, setActive] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState(sectionsLinks[0].id);

  const handleClick = (event) => {
    event.preventDefault();
    scrollToElement(event.target.getAttribute("data-id"));
  };

  const handleScroll = () => {
    setActive(window.scrollY > 50);

    sectionsLinks.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && isShow(window.scrollY, element)) {
        setActiveSection(section.id);
      }
    });
  };

  React.useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", () => handleScroll());
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={"navbar-dark" + (active ? " active" : "")}>
      <Container>
        <Navbar.Brand href="#" onClick={() => scrollToElement("home")}>
          {websiteName}
        </Navbar.Brand>
        <Navbar.Toggle className="shadow-none border-0">
          <i className="ri-menu-3-fill"></i>
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ms-auto">
            {sectionsLinks.map((item, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  href={item.href}
                  active={activeSection === item.id}
                  onClick={handleClick}
                  data-id={item.id}>
                  {item.label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
