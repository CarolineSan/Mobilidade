function abreSub(li){
  var sub = li.nextElementSibling;
  var i = li.children[0];
  if(sub != null) {
    if (sub.value != 0) {
      if (sub.style.display == "none") {
        sub.style.display = "block";
        i.classList.remove("fa-plus-square");
        i.classList.add("fa-minus-square");
      } else {
        sub.style.display = "none";
        i.classList.remove("fa-minus-square");
        i.classList.add("fa-plus-square");
      }
    } else {
      if (i.classList.contains("fa-plus-square")) {
        i.classList.remove("fa-plus-square");
        i.classList.add("fa-minus-square");
      } else {
        i.classList.remove("fa-minus-square");
        i.classList.add("fa-plus-square");
      }
    }
  } else {
    if (i.classList.contains("fa-plus-square")) {
      i.classList.remove("fa-plus-square");
      i.classList.add("fa-minus-square");
    } else {
      i.classList.remove("fa-minus-square");
      i.classList.add("fa-plus-square");
    }
  }
}

window.onload = function () {
  var limenu = document.getElementById("menu").getElementsByTagName("li");
  for (var li of limenu) {
      var sub = li.nextElementSibling;
      var i = li.children[0];
      if(sub == null || sub.value == 0) {
        i.style.color = "grey";
      }
  }
}
