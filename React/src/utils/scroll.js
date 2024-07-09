export function isShow(scrollY, element) {
  const start = element.offsetTop - 250;
  const end = element.offsetTop + element.clientHeight;

  return scrollY >= start && scrollY <= end;
}

export function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: elementId === "home" ? 0 : element.offsetTop - 50,
    });
  } else {
    window.scrollTo({ top: 0 });
  }
}
