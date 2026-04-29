let arr = [];

function generateArray() {
  const container = document.getElementById("array");
  container.innerHTML = "";
  arr = [];

  for (let i = 0; i < 20; i++) {
    let val = Math.floor(Math.random() * 200) + 20;
    arr.push(val);

    let bar = document.createElement("div");
    bar.style.height = `${val}px`;
    bar.classList.add("bar");
    container.appendChild(bar);
  }
}

function bubbleSort() {
  let bars = document.getElementsByClassName("bar");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        bars[j].style.height = `${arr[j]}px`;
        bars[j + 1].style.height = `${arr[j + 1]}px`;
      }
    }
  }
}

generateArray();
