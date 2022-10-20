let bodyDocument = document.body,
  btn = document.querySelector(".content__btn"),
  hex = document.getElementById("hex-code"),
  hexElement = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"],
  title = document.querySelector(".content__title");

console.log(title);

btn.addEventListener("click", (e) => {
  let strHex = "";
  for (let i = 0; i < 6; i++) {
    let hexIndex = Math.floor(Math.random() * hexElement.length);
    strHex += hexElement[hexIndex];
  }
  hex.innerHTML = strHex;
  bodyDocument.style.transition = "0.5s";
  bodyDocument.style.backgroundColor = `#${strHex}`;
  title.style.color = `#${strHex}`;
  title.style.filter = "invert(1)";
});
