function multiply(num1, num2){
    var result = num1 + num2;
    return result
}

/*document.querySelector('html').onclick = function(){
    alert(multiply(6,9));
}*/

var myDiv = document.querySelector('#myDiv');
myDiv.textContent = multiply(8,9);

var myImage = document.querySelector('#myImg');

myImage.onmouseover = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'g.png'){
        myImage.setAttribute('src','c.png');
    }
    else {
        myImage.setAttribute('src','g.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your username');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello, ' + myName;

    if(!localStorage.getItem('name')){
        setUserName();
    } else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Hello, ' + storedName;
    }
}

myButton.onclick = function(){
    setUserName();
}