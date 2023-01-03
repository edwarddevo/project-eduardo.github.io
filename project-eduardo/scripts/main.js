const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/my-dali.jpeg") {
    myImage.setAttribute("src", "images/dali-my-painting.jpg");
  } else {
    myImage.setAttribute("src", "images/my-dali.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
  localStorage.setItem("name", myName);
  myHeading.textContent = `Thank you for coming, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Thank you for coming, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};