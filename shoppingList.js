function addMe() {
  var arr = document.getElementsByTagName('li').length;
  if (document.getElementById("add").value.length == 0) {
    document.getElementById("stop").innerHTML = "Please input something"
  }
  else if (arr > 6) {
    document.getElementById("stop").innerHTML = "You, stop now, you have reached the limit.";
  }
  else {
  var newList = document.createElement("li");
  var newText = document.createTextNode(document.getElementById("add").value);
  newList.appendChild(newText);
  var position = document.getElementsByTagName("ol")[0];
  position.appendChild(newList);
  document.getElementById("stop").innerHTML = " "
  }
}


function removeMe() {
  var arr = document.getElementsByTagName('li').length;
  var x = document.getElementById("remove").value;
  var list = document.getElementsByTagName("li")[x-1];
  var orderedList = list.parentNode;
  orderedList.removeChild(list);
  if (arr <= 7) {
    document.getElementById("stop").innerHTML = " ";
  }
}