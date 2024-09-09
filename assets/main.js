let dragBox = document.querySelectorAll("#thing1");
let dropBox = document.querySelectorAll("#dropBox");

dragBox.forEach((element) => {
  element.onmouseover = function () {
    this.style.backgroundColor = "blue";
  };
  element.ondragstart = function (event) {
    event.dataTransfer.setData("id", this.getAttribute("id"));
  };
});

dropBox.forEach((el) => {
  el.ondragover = (event) => event.preventDefault();

  el.ondrop = function (event) {
    const getId = event.dataTransfer.getData("id");

    const element = document.getElementById(getId);

    this.append(element);
  };
});
