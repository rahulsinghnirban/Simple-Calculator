let screen = document.getElementById('input');
let screenValue = '';

buttons = document.querySelectorAll('button');

for(item of buttons){

    item.addEventListener('click', getNumber);

    function getNumber(e){

        buttonText = e.target.innerText;

        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'CLR'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'DEL'){
            
            screenValue = screen.value.toString().slice(0,-1);
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    }

}
