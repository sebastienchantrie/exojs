let a=document.getElementById('target');
let txt=a.innerText
let one=document.querySelector('#part-one').innerHTML
a.innerText=""
let newElement = document.createElement("span");


let nb1=460
let nb2= 0
let nb3= 0
let nb4= 0


newElement.innerText=txt="460"
a.appendChild(newElement)
newElement.setAttribute('class','un')

let newElement2 = document.createElement("span");
newElement2.innerText=txt="00"
a.appendChild(newElement2)
newElement2.setAttribute('class','deux')

let newElement3 = document.createElement("span");
newElement3.innerText=txt="00"
a.appendChild(newElement3)
newElement3.setAttribute('class','trois')

let newElement4 = document.createElement("span");
newElement4.innerText=txt="00"
a.appendChild(newElement4)
newElement4.setAttribute('class','quatre')
let c=document.querySelector('part-one')


document.querySelector('#part-one').addEventListener('click',()=>{

    if (nb1 >= 460 && nb1 < 490) {
        nb1++;
        document.querySelector(".un").innerHTML = nb1;
        document.querySelector("#part-one").innerHTML= nb1
        }
}
)

document.querySelector('#part-two').addEventListener('click',()=>{

    if (nb2 >= 00 && nb2 < 99) {
        nb2++;
        document.querySelector(".deux").innerHTML = nb2;
        document.querySelector("#part-two").innerHTML=nb2
        }
        if (nb2<10) {
            document.querySelector(".deux").innerHTML = "0"+ nb2;
            document.querySelector("#part-two").innerHTML= "0"+nb2
        }
}
)


document.querySelector('#part-three').addEventListener('click',()=>{

    if (nb3 >= 00 && nb3 < 99) {
        nb3++;
        document.querySelector(".trois").innerHTML = nb3;
        document.querySelector("#part-three").innerHTML=nb3
        }
        if (nb3<10) {
            document.querySelector(".trois").innerHTML = "0"+ nb3;
            document.querySelector("#part-three").innerHTML="0"+ nb3
        }
}
)


document.querySelector('#part-four').addEventListener('click',()=>{

    if (nb4 >= 00 && nb4 < 99) {
        nb4++;
        document.querySelector(".quatre").innerHTML = nb4;
        document.querySelector("#part-four").innerHTML= nb4
        }
        if (nb4<10) {
            document.querySelector(".quatre").innerHTML = "0"+ nb4;
            document.querySelector("#part-four").innerHTML= "0"+nb4
        }
}
)
