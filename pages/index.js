const main = () => {
  const div = document.createElement("div");
  div.innerText = "welcome to this page";

  const body = document.querySelector("body");
  body.appendChild(div);
};

window.onload = main;
