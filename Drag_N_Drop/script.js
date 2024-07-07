let boxes = document.querySelectorAll(".box");
let imgCont = document.querySelector(".image-cont");

imgCont.ondragstart = function () {
  imgCont.classList.add("ondrag");
  setTimeout(() => (this.className = "invisible"), 0);
};

imgCont.ondragend = function () {
  imgCont.className = "image-cont";
};

boxes.forEach((box) => {
  box.ondragenter = function (e) {
    e.preventDefault();
    box.classList.add("dragover");
  };

  box.ondragleave = function () {
    box.classList.remove("dragover");
  };

  box.ondragover = function (e) {
    e.preventDefault();
  };

  box.ondrop = function () {
    box.classList.remove("dragover");
    box.append(imgCont);
  };
});
