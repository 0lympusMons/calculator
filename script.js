let display = document.querySelector(".wrapper__calculator--display");

let buttons = document.querySelectorAll(".button");

let decimalExists = false;

buttons.forEach(button => button.addEventListener("click", buttonClick));


function buttonClick(e) {

    if (e.target.className === 'button number') {

        if (displayIsEmpty()) {
            display.textContent = '';
        }

        let number = e.target.textContent;
        display.textContent += number;
    } else if (e.target.className === 'button delete') {
        del();
    } else if( e.target.className === 'button decimal'){
        decimal();
    };


}

function del() {

    if(display.textContent === 'Display'){
        //do nothing
    }else{

        let lastChar = display.textContent.length - 1;

        if(lastChar>=1){
            display.textContent = display.textContent.slice(0, lastChar);

        }else if(lastChar==0){
            // display.textContent = display.textContent.slice(0, lastChar);
            display.textContent = '';

        }
    }

}

function decimal(){
   if (decimalExists){
        //do nothing
   }else{
        display.textContent += '.';
        decimalExists = true;
   };
};

function displayIsEmpty() {

    if (display.textContent == 'Display') {
        return true;
    }
    return false;
}