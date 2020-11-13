let placeholder = document.querySelector(".placeholder");

// console.log("placeholder");

const calc = (input) => {
    const press = input.innerHTML;

    if (press == "="){
        placeholder.innerHTML = eval(placeholder.innerHTML);
    }
    else if(press == "AC"){
        placeholder.innerHTML = "0";
    }
    else{
        if (placeholder.innerHTML == "0"){
            placeholder.innerHTML = press;
        }
        else{
            placeholder.innerHTML += press;
        }
    }
}