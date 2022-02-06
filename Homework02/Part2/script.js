
// Exercise 2

let function1 = (element, color) => {
    let elementColor = element.style.color;
    element.style.color = color;

return elementColor.toLowerCase();
}

// function1(document.getElementById('heading'), "blue");


let function2 = (element, fontSize) => {
    let elementTextSize = element.style.fontSize;
    element.style.fontSize = fontSize;

return elementTextSize;
}

// function2(document.getElementById('heading'), "55px");


document
.getElementById("btn")
.addEventListener('click', () => {
    
    let inputOne = document.getElementById('inputOne');
    let inputTwo = document.getElementById('inputTwo');
    let heading = document.getElementById('heading');
    let paragraph = document.getElementsByTagName("p")[0];

    if (inputOne.value == "" || inputTwo.value == ""){
        paragraph.innerText = "Enter the required values in both fields";
    } else {
        function1(heading, inputTwo.value);  
        function2(heading, inputOne.value + "px");
        paragraph.innerText = "";
    }

});


