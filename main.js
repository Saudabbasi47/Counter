let count = 0;
function increase() {
  count++;
  let num = document.getElementById("num");
  num.innerText = count;
}
function reset() {
  count = 0;
  num.innerText = count;
}
function decrease() {
  count--;

  num.innerText = count;
}
