// Seconds counting
let seconds = 6532415273;
let element = document.getElementById("time");

function incrementSeconds() {
  seconds += 1;
  element.innerHTML = seconds;
  element.style.color = "coral";
}

let cancel = setInterval(incrementSeconds, 1000);

// Projects
let projectOne = document.getElementById("project1");
let figure1 = document.getElementById("fig1");
let projectTwo = document.getElementById("project2");
let figure2 = document.getElementById("fig2");
let projectThree = document.getElementById("project3");
let figure3 = document.getElementById("fig3");

figure1.hidden = true;
figure2.hidden = true;
figure3.hidden = true;

function project1Controller() {
  if (figure1.hidden === true) {
    figure1.hidden = false;
  } else {
    figure1.hidden = true;
  }
}
projectOne.onclick = project1Controller;

function project2Controller() {
  if (figure2.hidden === true) {
    figure2.hidden = false;
  } else {
    figure2.hidden = true;
  }
}
projectTwo.onclick = project2Controller;

function project3Controller() {
  if (figure3.hidden === true) {
    figure3.hidden = false;
  } else {
    figure3.hidden = true;
  }
}
projectThree.onclick = project3Controller;
