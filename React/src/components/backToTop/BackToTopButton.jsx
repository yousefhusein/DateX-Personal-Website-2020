import "./BackToTopButton.scss";

import React from "react";
import { scrollToElement } from "../../utils/scroll";

export default function BackToTopButton() {
  const [show, setShow] = React.useState(false);

  const handleScroll = () => {
    setShow(window.scrollY > 50);
  };

  const handleClick = () => scrollToElement("home");

  React.useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={"back-to-top-btn" + (show ? " show" : "")}
      onClick={handleClick}>
      <i className="ri-arrow-up-fill"></i>
    </button>
  );
}
