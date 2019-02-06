var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


var sliders = document.getElementById("okRange");
var outputs = document.getElementById("demos");
outputs.innerHTML = sliders.value;

sliders.oninput = function() {
  outputs.innerHTML = this.value;
}