var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var resetBtn = document.getElementById("reset");
var number = document.getElementById("number");
var numinput = document.getElementById("numinput");
var num = 0;

minus.addEventListener("click", function(e) {
  num -= Number(numinput.value);
  number.textContent = num;
  red();
})

plus.addEventListener("click", function(e) {
  num += Number(numinput.value);
  number.textContent = num;
  red();
})

function reset() {
  num = 0;
  number.textContent = 0;
  numinput.value = 0;
}

resetBtn.addEventListener("click", function(e) {
	reset();
});

function red() {
  if (num < 0) {
    number.classList.add("red");
  } else if (num > 0) {
    number.classList.remove("red");
  }
}