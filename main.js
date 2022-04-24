document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

console.log(
  Autolinker.link(document.querySelector("main").innerHTML, {
    newWindow: true,
  })
);

document.querySelector("main").innerHTML = Autolinker.link(
  document.querySelector("main").innerHTML,
  {
    // newWindow: true,
    stripPrefix: true,
  }
).replace(
  /\(!\)/g,
  '<span style="color:var(--primary); font-weight: 700; margin: 0 3px">(!)</span>'
);
