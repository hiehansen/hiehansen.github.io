const interior = document.getElementById("interior");
const eksterior = document.getElementById("eksterior");
const safety = document.getElementById("safety");
const int = document.getElementById("int");
const ekst = document.getElementById("ekst");
const safe = document.getElementById("safe");
int.style.display = "none";
ekst.style.display = "none";
safe.style.display = "none";

interior.addEventListener("click", function () {
  int.classList.add("fadein");
  int.classList.add("active");
  ekst.classList.remove("active");
  safe.classList.remove("active");
  int.style.display = "flex";
  ekst.style.display = "none";
  safe.style.display = "none";

  if (int.classList.contains("active")) {
    interior.style.background = "linear-gradient(to bottom, rgb(98, 5, 5), red)"
    interior.style.transform = "scale(1.05)"
    interior.style.zIndex = "9999"
  } 

  if (ekst.className != 'active') {
    eksterior.style.background = "linear-gradient(to right, rgb(98, 5, 5), red)"
    eksterior.style.transform = "scale(1)"
    eksterior.style.zIndex = "1"
  }

  if (safe.className != 'active') {
    safety.style.background = "linear-gradient(to right, rgb(98, 5, 5), red)"
    safety.style.transform = "scale(1)"
    safety.style.zIndex = "1"
  }
});

eksterior.addEventListener("click", function () {
  ekst.classList.add("fadein");
  ekst.classList.add("active");
  int.classList.remove("active");
  safe.classList.remove("active");
  int.style.display = "none";
  ekst.style.display = "flex";
  safe.style.display = "none";

  if (ekst.classList.contains("active")) {
    eksterior.style.background = "linear-gradient(to bottom, rgb(98, 5, 5), red)";
    eksterior.style.transform = "scale(1.05)"
    eksterior.style.zIndex = "9999"
  }

  if (int.className != 'active') {
    interior.style.background = "linear-gradient(to left, rgb(98, 5, 5), red)"
    interior.style.transform = "scale(1)"
    interior.style.zIndex = "1"
  }

  if (safe.className != 'active') {
    safety.style.background = "linear-gradient(to right, rgb(98, 5, 5), red)"
    safety.style.transform = "scale(1)"
    safety.style.zIndex = "1"
  }
});

safety.addEventListener("click", function (e) {
  safe.classList.add("fadein");
  safe.classList.add("active");
  int.classList.remove("active");
  ekst.classList.remove("active");
  int.style.display = "none";
  ekst.style.display = "none";
  safe.style.display = "flex";

  if (safe.classList.contains("active")) {
    safety.style.background = "linear-gradient(to bottom, rgb(98, 5, 5), red)"
    safety.style.transform = "scale(1.05)"
    safety.style.zIndex = "9999"
  }
  

  if (int.className != 'active') {
    interior.style.background = "linear-gradient(to left, rgb(98, 5, 5), red)"
    interior.style.transform = "scale(1)"
    interior.style.zIndex = "1"
  }

  if (ekst.className != 'active') {
    eksterior.style.background = "linear-gradient(to left, rgb(98, 5, 5), red)"
    eksterior.style.transform = "scale(1)"
    eksterior.style.zIndex = "1"
  }

});
