let pos=0;
let speed=250;
let str=document.getElementById('str').innerText;

document.getElementById('str').innerHTML = ""

function type() {
    if(pos<str.length){
        document.getElementById('str').innerText += str.charAt(pos);
        pos++;
        setTimeout(type,speed);
    }else{
        setTimeout(erase,speed);
    }
}

setTimeout(type,speed);

function erase() {
    if(pos >= str.length) {
        let temp= str.substring(0,pos);
        document.getElementById('str').innerText = temp;
        pos--
        setTimeout(erase,speed);
    }
}

addEventListener