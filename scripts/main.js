const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/ff6688-image-kwvyk6gb.jpg") {
        myImage.setAttribute("src", "images/pexels-photo-3851011.jpeg");
    } else {
        myImage.setAttribute("src", "images/ff6688-image-kwvyk6gb.jpg");
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
        myHeading.textContent = `Welcome, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};