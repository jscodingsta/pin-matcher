function getPin() {
    const pin=Math.round(Math.random()*10000);
    const pinStr=pin+''
    if (pinStr.length==4) {
        return pin;
    }
    else{
        return getPin()
    }
}
function generatePin() {
    
   const pin = getPin();
   document.getElementById('display-pin').value=pin;
}

document.getElementById('key').addEventListener('click',function (event) {
    const number=event.target.innerText;
    const typedNumbers=document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == "C") {
            typedNumbers.value='';

        }
        
    }else{
    const prevTypedNumbers=typedNumbers.value;
    const newTypedNumbers=prevTypedNumbers+number;
    typedNumbers.value=newTypedNumbers;
    }
})