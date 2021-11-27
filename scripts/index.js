const myHeading = document.querySelector('h1');
console.log(myHeading);
myHeading.textContent = 'Coding is Cool !';


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','img/happy.jpg');
    } else {
      myImage.setAttribute('src','img/sad.jpg');
    }
}

document.querySelector('button').onclick = function() {
     alert('Hey Budddy Welcome to our Website You will love it Here :-)');
     setUserName();
 }

 function setUserName() {
     let myName = prompt('Please enter your name.');
     localStorage.setItem('name', myName);
     myHeading.textContent = 'Coding is cool , ' + myName;
   }
 