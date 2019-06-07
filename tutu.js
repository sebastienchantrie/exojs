// VARIABLE //


// EX 1


const child= 3
const name= "Berangere"
const land= "Zimbabwé"
const taff="Boulanger"

console.log("Vous serez " +taff + "et habiterez" + land +" et marié a " + name+ "et avec " +child +" enfants") 





// EX 2


const année= 2019
const naissance=2000

console.log(année-naissance 'age')


// EX 3


    const age=25
    const esperance=100
    const bouffe="Big mac"
    const nbbig=1

        let calcul = (esperance - age) *365 * nbbig

console.log("Il vous reste" + calcul + bouffe +" avant d'atteindre l'age de "+ esperance)


// EX 4

let p=1+2
let m=p*2
let d=4/2
let calcul=d+m
console.log(calcul)
















// LOGIQUE


// EX 1

const francais="fr";
const russkov="ru";
const anglais="en";

let c=""
let b="en";

if (b==="fr"){
    
 console.log("coucou");
}


else if (b==="ru"){
  console.log("SUKA BLIET");
}


else if (b==="en"){
 console.log("Hello my niggah");
}




// EX 2

const scoremax=100;
const myscore=50;

if (myscore>=90){
console.log("Vous avez le rang A");
    
}
else if (myscore<90 && scoremax <50){
console.log("Vous avez le rang B");
    
}
if (myscore<=50){
console.log("Vous avez le rang C");
    
}




// EX 3

const fruit= "pomme"
const nb= 3

if (nb>1) {
    console.log("J'ai " +nb+' '+ fruit+"s")
}
else {
 console.log ("J'ai " +nb+' '+ fruit) 
}





// FUNCTION



// EX 1

let nb1= 5;
let nb2=8;



let soustraction = function()
{
    console.log(nb2-nb1);
};

soustraction();


let division = function()
{
    console.log(nb1/nb2);
    
};

division();


let multiplication = function()
{
    console.log(nb1*nb2);
};

multiplication();


let pourcent = function()
{
    console.log((nb1/100)*nb2);
};

pourcent();



let vitesse = function(){
    console.log(nb1/nb2+'KM/h')
}

vitesse();
















// BOUCLE


//EX 1

let nb = 0;


for (let nb = 0; nb <21; nb++) {
if (nb%2===0){
console.log((nb)+" nombre pair");
}
else {
console.log((nb)+' nombre impaire');
}
}



//EX 2

let nb = 0;


for (let nb = 0; nb <11; nb++) {
 console.log(nb*9)   
}


// EX 3 


function rank (nb) {
    
    if (nb>65 && nb<75) {
       return("pour " +nb +" points vous avez le rank D");
    }
    if (nb>75 && nb<80) {
        return("pour " +nb +" points vous avez le rank C");
    }
    if (nb>80 && nb<90) {
        return("pour " +nb +" points vous avez le rank B");
    }
    if (nb>90) {
        return("pour " +nb +" points vous avez le rank A");
    }
    else{
        return("pour " +nb + " points vous avez le rank F");
    }
    }
    
    for (let nb = 0; nb<101; nb++){
        console.log(rank(nb))
    }


// EX 4


function create (a) {

    for (var i = 1; i <= a; i++) {
    var e = '';
    
    for (var j = 1; j <= i; j++) {
      e += '*';
    }
    
    console.log(e);
    }
    }
    
    create(5);












    // TABLEAU




    // EX 1

    let tab=[1,2,3,4,5,6,7,8,9,10];
let a = tab[0]
for(i = 1;i < tab.length;i++){
varia += tab[i];
console.log(a)
}



// EX 2

let tab=["Stalone" , "Sacha de pokemon" , "Leonardo Di Caprio"]
for(i = 0;i < tab.length;i++){
    if (i===0) {
        console.log("Le premier est "+tab[i])
    }
    if (i===1) {
        console.log("Le deuxiemme est "+tab[i])
    }
    if (i===2){
        console.log("Le dernier est"+tab[i])
    }
}


// EX 3

let mario=["Mario" , "Luigi" , "Peach"]
mario.push("Browser");
for(i = 0;i < mario.length;i++)
console.log(mario[i])























// LE JOU DOU PANDOU !



    let devine = ['b', 'o', 'n', 'j', 'o', 'u', 'r'];
let trouve =  ['_','_','_','_','_','_','_'];
let compt = 0;

while (compt != trouve.length - 1) {
    guessLetter();
}
    alert("Felicitation , vous avez gagner !");


function guessLetter() {
    compt = 0;
    let propo=prompt("Tapez une lettre");
    for(let i = 0; i < trouve.length;i++){
        if(trouve[i] != '_'){
            compt++;
        }
    }
    for (let i = 0; i < devine.length; i++)
    {
        if (propo == devine[i]){
            console.log("Vous avez trouver la lettre " +devine[i]);
            trouve[i]=devine[i]
        }
    }
    let word="";
    for(let i=0;i<trouve.length;i++)
    {
        word+=trouve[i]
    }
    alert(word);
}

















// MATH


// EX 1

const petit=[7, 5, -12, 6, 32, 18, 14, -2];
let cou = Math.min(...petit);


const grand=[3, 9, 21, 36, 27, 54, 17, 35];
let kou= Math.max(...grand);

console.log(cou + kou)




// EX 2

const floatbateau= 10.4;

const coulebateau=(Math.floor(floatbateau));

const volebateau=(Math.ceil(floatbateau));

alert("floatbateau : " +  floatbateau + " coulebateau : " + coulebateau +" volebateau : "+ volebateau );




// EX 3

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log(getRandomInt(2));
  console.log(Math.random()*50+50)
  console.log(getRandomInt(11));



// EX 4

let randy=Math.random() *10;
let randyround=Math.round(randy);

let mortal=["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];

console.log(mortal[randyround])






















  // OBJAI

  // EX 1
let Character =new Object()
Character.name="Tao"
Character.age="78 ans "
Character.item=["Boite a tartine" , "Doudoutoudou" , "Branche fébrile" , "Le super martotrofor" ,
"Rien Krevsalnoob" , "L'aiguille D'Arya"]


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
        console.log(Character.item[getRandomInt(6)]);


  // EX 2


const obj1 =new Object()
obj1.name="épée"
obj1.physic="10"
obj1.magic="2"
obj1.minLevel="5"
obj1.available=true

const obj2 =new Object()
obj2.name="baguette magique"
obj2.physic="2"
obj2.magic="10"
obj2.minLevel="5"
obj2.available=true

const obj3 =new Object()
obj3.name="La hache cheatey"
obj3.physic="1000"
obj3.magic="200"
obj3.minLevel="1"
obj3.available=false

const obj4 =new Object()
obj4.name="sceptre"
obj4.physic="15"
obj4.magic="15"
obj4.minLevel="15"
obj4.available=true

const obj5 =new Object()
obj5.name="bouclier"
obj5.physic="0"
obj5.magic="0"
obj5.minLevel="11"
obj5.available=true

const obj6 =new Object()
obj6.name=" Lance"
obj6.physic="25"
obj6.magic="0"
obj6.minLevel="13"
obj6.available=false



    let table =[]

    table.push(obj1,obj2,obj3,obj4,obj5,obj6);

function afficheobj() {
for (let i=0;i<table.length;i++){
    console.log(table[i].name)
}
}


function objdispo(){
    for(let i =0; i < table.length;i++){
        if (table[i].available==true){
            console.log(table[i].name)
        }
    }
}

function objdispolvl(){
    for(let i =0; i < table.length;i++){
        if (table[i].minLevel>=10){
            console.log(table[i].name)
        }
    }
}

objdispolvl();


//EX 3

let hache = {
    name:"La H 2 guer",
    damage: 10,

}

let Character = {
    name:"Tao",
    level:10,
    life:50,
    weapon:hache,
    atk:function(){
        return (Character.level*hache.damage)
    }
}
console.log(Character.name + " attaque avec l'arme " + hache.name + " et les dégats sont " +Character.atk());





























// JEU DU JOUSTOUPRI


let nbessai= ""
let min=20
let max=80

function randomnb (){
    return Math.ceil(Math.random() * (max - min) + min);
}

let number = randomnb();
function testnb (){
    while(true){
        let msg=prompt("Saisisez un nombre !")
        if (msg<number)
            alert("C'est plus grand !")
        else if (msg>number)
            alert("C'est plus petit !")
        else if (msg==number) {
            alert("Vous avez trouver le bon nombre en "+ nbessai +" essais");
            break;
        }   nbessai++
    }
}
testnb();





















// DOM

// EX 1

document.querySelector("body").className = "bg-olive";

function elem1(){

let element = document.getElementById("first-paragraph");
element.classList.remove("bg-lime" , "gray");
element.className = "aqua";
}


function elem2 () {

let element = document.querySelector(".bg-silver");
element.classList.remove("bg-silver");
element.className = "bg-teal"
}



let coucou = document.querySelectorAll("blockquote")
for (let i = 0; i < coucou.length;i++){
    coucou[i].className="bg-white"
}



// EX 2


document.querySelector("table").className = "bg-purple"


let noodle = document.querySelectorAll(".container p")
for (let i = 0; i < noodle.length;i++){
    noodle[i].className="shadow"
}


// EX 3

let pre=document.querySelectorAll("pre")
for (let i = 0; i < pre.length;i++){
    pre[i].style.color='#f00'
    pre[i].style.backgroundColor='#f666'
    pre[i].style.borderTop="3px solid red"
    pre[i].style.borderBottom="3px solid red"
}


let firsth3=document.getElementsByTagName("h3")[0]
firsth3.innerHTML="<em>Itelic title ! yeah !</em>"

let firsth2=document.getElementsByTagName("h2")[0]
firsth2.innerHTML="<strong>HTML doens't work !</strong>"

// EX 4

let ol=document.querySelectorAll("ol")
for (let i = 0; i < ol.length;i++){
ol[i].innerHTML += "<li>Mon meilleur ami est <a href='http://www.google.com'>Google</a></li>"


let link=document.querySelectorAll("a")
for (let i = 0; i < ol.length;i++){
    link[1].style.textDecoration="none"
    link[1].style.color="#f999"

}
}

// EX 5

let olol=document.querySelector("ol")

console.log(olol.children.length)
for (let i = 0; i < olol.children.length;i++){
    olol.removeChild(olol.children[0])
}

let tab =["Silent Teacher","Code Monkey", "CodeCombat"]
for (let i = 0; i < tab.length;i++){
    let li = document.createElement("li");
    li.textContent = tab[i];
    olol.appendChild(li);
}
elem1() 
elem2()

















// AJAX



// EX 1

const req = new XMLHttpRequest()
const quote = document.querySelector("#quote")


req.onreadystatechange = (event) => {
    if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
            json = JSON.parse(req.response)
            console.log (json)
                smoke(json.quote)
            let cite = document.createElement("cite")
            cite.innerHTML = json.author
            quote.appendChild(cite)
        }
        else {
            console.log ("Erreur", req.status)
        }
    }
}
req.open("GET", "https://thatsthespir.it/api")
req.send ()



// EX 2
let a = []
let b = []
let c = []

const req = new XMLHttpRequest()
const quote = document.querySelector("#quote")


req.onreadystatechange = (event) => {
    if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
            req = JSON.parse(req.response)
            console.log (req)
            req.map((element) =>["Score"] = getRandomInt(0,1000))
            req.sort((el1 , el2) => el1.score - el2.score)

            }
req.forEach(element1 =>{
if (element.score > 750){
    a.push(element)
}

else if (element.score > 500){
    b.push(element)
}
else {
    c.push(element)
}
})

const filtre = req.filter(element) => element.country == "Bahrain"
console.log(req.lenght[0])
console.log(req.lenght -1)





















// MOUSE EVENT

document.onmousemove = () => {
    souris(window.event);
}

// EX 1
let hover = document.querySelectorAll(".hoverme");
for(let i = 0; i < hover.length;i++){
    hover[i].addEventListener("mouseenter",() =>{
    hover[i].style.opacity = 0;
    })
}



// EX 2
let reset = document.querySelector("#reset");

reset.addEventListener("click",() => {
    for(let i = 0; i < hover.length;i++){
        hover[i].style.opacity = 1;
    }
});


// EX 3 


let xhtml = document.querySelector("#axe-x")
let yhtml=document.querySelector("#axe-y")

function souris(event){
        var x = event.clientX;
        var y = event.clientY;
        xhtml.textContent = "L'axe X est de : " + x;
        yhtml.textContent = "L'axe Y est de :" + y;
}


























// KEYBOARD

// EX 1

let color=document.querySelector("#character")
document.addEventListener("keydown" ,(expr) =>{
    switch (expr.key) {
        case "1":color.style.backgroundColor='#f666'
        break;
        case "2":color.style.backgroundColor='#f226'
        break;
        case "3":color.style.backgroundColor='#f486'
        break;
        case "4":color.style.backgroundColor='#f366'
        break;
        case "5":color.style.backgroundColor='#f611'
        break;
        case "6":color.style.backgroundColor='#f233'
        break;
        case "7":color.style.backgroundColor='#f363'
        break;
        case "8":color.style.backgroundColor='#f397'
        break;
        case "9":color.style.backgroundColor='#f765'
        break;

    }
})



// EX 2


let up = document.querySelector("#up");
let down = document.querySelector("#down");
let left = document.querySelector("#left");
let right = document.querySelector("#right");

function addLight(element){
    element.classList.add("highlight")
}

function removeLight(element){
    element.classList.remove("highlight")
}


function addClass(){
switch(event.key){
case "ArrowUp":
addLight(up);
break;
case "ArrowDown":
addLight(down);
break;
case "ArrowLeft":
addLight(left);
break;
case "ArrowRight":
addLight(right);
break;
}
}
function removeClass(){
switch(event.key){
case "ArrowUp":
removeLight(up);
break;
case "ArrowDown":
removeLight(down);
break;
case "ArrowLeft":
removeLight(left);
break;
case "ArrowRight":
removeLight(right);
break;
}
}

function udlr() {
document.addEventListener("keydown",addClass);
document.addEventListener("keyup",removeClass);
}

udlr();
addClass();







































//                                             EL DRILLOOOOOOSSS                                                                   // 










// BASE //


// EX1

let hi = "hello world"

alert(hi)

// EX 2

let name=prompt("Quel est votre prénom ?");
alert("Bonjour " +name);


// EX 3

let x=prompt("Voulez vous du gateau ?");
if (x==="oui") {
    alert("Bravo")
}
else {
    alert("Du gateau ca ne se refuse pas")
}

// EX 4

function x (demandeInfo) {
    let age =prompt("Quel age avez vous ?");
    let ville =prompt("Dans quel ville vivez vous ?");
    let sexe =prompt("Etes vous un homme ou une femme ?");
    
    alert("Bonjour , vous avez "+age+" vous vivez a "+ville+" et vous etes "+sexe+" ");
    
    let conf=window.confirm("Correct ;) ?");
    
    
    if (conf===true) {
        alert("Merci d'avoir valider vos informations");
    }
    if (conf===false){
        x()
    }   
    }
    
    x()























    // MATH //





    // EX 1 CALCULETTE

    function calcul() {
        let nombre1 = parseInt(document.getElementById('nb1').value)
        let nombre2 = parseInt(document.getElementById('nb2').value)
        let add = (nombre1 + nombre2)
        let sous = (nombre1 - nombre2)
        let mult = (nombre1 * nombre2)
        let div = nombre1 / nombre2
        
    
        if (document.getElementById('addition').checked) {
    
            document.getElementById("afficher").innerHTML = add;
        }
    
    
    
    
    
        if (document.getElementById('soustraction').checked) { 
    
    
            document.getElementById("afficher").innerHTML = sous;
    
    
    }
    
    if (document.getElementById('multiplication').checked) {
    
        document.getElementById("afficher").innerHTML = mult;
    }
    
    
    if (document.getElementById('division').checked) {
    
        document.getElementById("afficher").innerHTML = div;
    }
    }


    //EX 2



    function calculswitch()
    {	
        let nombre1 = parseInt(document.getElementById('nb1').value)
        let nombre2 = parseInt(document.getElementById('nb1').value)
        let add = (nombre1 + nombre2)
        let sous = (nombre1 - nombre2)
        let mult = (nombre1 * nombre2)
        let div = nombre1 / nombre2

        switch (document.calculatrice.operateur.value)
        {
            case document.getElementById('addition').checked);
            document.getElementById("afficher").innerHTML = add;
            break;
            case document.getElementById('soustraction').checked);
            document.getElementById("afficher").innerHTML = sous;
            break;
            case  document.getElementById('mutliplication').checked);
            document.getElementById("afficher").innerHTML = mult;
            break;
            case document.getElementById('division').checked);
            document.getElementById("afficher").innerHTML = div;
            break;
        }


    //EX 3

    let nb = 0;
for (let nb = 0; nb <21; nb++) {
if (nb%2===0){
console.log(nb*nb);
}
}


// EX 4    ?????
let nombre1 = parseInt(document.getElementById('nb1').value)



// EX 5




// EX 6


for (let nb = 0; nb <100; nb++) {
    if (nb % 3 ===0 && nb % 5===0) {
    console.log(nb+" FizzBuzz")
}
        else if (nb % 3===0) {
        console.log(nb+" Fizz")
        }
                    else if (nb % 5===0) {
                        console.log(nb+" Buzz")
                    }
                                                    else {
                                                        console.log(nb)
                                                    }
}


















// DOM COLOR //

// EX 1

let body = document.querySelector("body"); 

function red(){
body.style.backgroundColor='#8C2323';
}
function bleu(){
body.style.backgroundColor='#3E846C'
}

function jaune(){

body.style.backgroundColor='#CCAE06'
}

function vert(){

body.style.backgroundColor='#0D5621'
}


// EX 2


document.getElementById('run').onclick = function clik(){
    let couleur=document.getElementById("color").value;
    console.log(couleur);
    document.body.style.backgroundColor=couleur;
    }



// EX 3

document.getElementById('run').onclick = function clik(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor=color;
    }













// DATE


// EX 1
function heuree()
{
            let date = new Date();
            let heure = date.getHours();
            let minutes = date.getMinutes();
    if (heure<18)
        document.getElementById("hinner").innerHTML="Bonjour"
    else
        document.getElementById("hinner").innerHTML="Bonsoir";
}
heuree();



// EX 2

function heure()
{
            let date = new Date();
            let heure = date.getHours();
            let minutes = date.getMinutes();
if (heure===17 && minutes<30)
document.getElementById("target").innerHTML="Bonjour"
else if (heure<17)
document.getElementById("target").innerHTML="Bonjour"
else
document.getElementById("target").innerHTML="Bonsoir";
}
heure();

// EX 3

function CalculAge() {
    let td=new Date();
    let dtn=prompt("Quel est votre date de naissance ?"); 
    let an=dtn.substr(6,4); 
    let mois=dtn.substr(3,2);
    let day= dtn.substr(0,2); 
    let age=td.getFullYear()-an; 
    
        let mMois=td.getMonth()-mois;  
    
        
        if(mMois < 0) 
        {
            age=age-1; 
        }	
        else
        {
            if(mMois === 0)
            {
                var mDate=td.getDay()-day;
                if(mDate < 0)
                {
                    age=age-1;
                }
                
            }
        }
        console.log(age)
    }




// EX 4


function day() {
    let moistable=["coucou","Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"]
    let date = new Date();
    let day = date.getDay();
    let mois= date.getMonth();
    let année= date.getFullYear();
    let moisecrit= parseInt(mois)
    console.log(moisecrit)
    if (day<10 )
    document.getElementById("targetted").innerHTML="Nous somme le "+ '0'+ day +" "+ moistable[moisecrit] + " " + année
    else 
    document.getElementById("targetted").innerHTML="Nous somme le "+ day +" "+ moistable[moisecrit] + " " + année
}
day()




// EX 5 












// TABLEAU


// EX 1
function tablo() {
const fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "kiwi",
    "banane",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
];

document.getElementById("frwé").innerHTML=fruits[5];
}


// EX 2

function tablo2(){

        let fruits2 = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];


    let supprimetable = fruits2.splice(9 , 1)
    let supprimetable2= fruits2.splice(0 , 1)
    let ajoutbanane   = fruits2.splice(0 , 0,"kiwi")
    let ajoutkiwi     = fruits2.splice(9 , 0, "banane")

    console.log(fruits2)

    
}


// EX 3

function tablo3(){
        let fruits3 = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

for (i=0 ; i<fruits3.length ;  i++) {
    console.log(fruits3[i]);
    }
}


// EX 4


function tablo4() {
    const fruits4 = [ 
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ]

    fruits4.forEach(function (argument) {
        console.log(argument)
    });

    //  AUTRE METHODE        
    //for (const xy of fruits4) {
    //    console.log(xy)
    //}
}




// EX 5


// EX 6

function seekpeople() {

const people = [
    {
        firstname: "Bradford",
        lastname: "Coldbath",
        email: "bcoldbath0@wired.com",
    },
    {
        firstname: "Nadiya",
        lastname: "Stendell",
        email: "nstendell1@nsw.gov.au",
    },
    {
        firstname: "Auroora",
        lastname: "Stapford",
        email: "astapford2@wsj.com",
    },
    {
        firstname: "Berkley",
        lastname: "McKall",
        email: "bmckall3@about.me",
    },
    {
        firstname: "Wolf",
        lastname: "McCurley",
        email: "wmccurley4@yale.edu",
    },
    {
        firstname: "Jorrie",
        lastname: "Canedo",
        email: "jcanedo5@engadget.com",
    },
    {
        firstname: "Bethanne",
        lastname: "Ackred",
        email: "backred6@imgur.com",
    },
    {
        firstname: "Zorah",
        lastname: "Whild",
        email: "zwhild7@sogou.com",
    },
    {
        firstname: "Jean",
        lastname: "Dupont",
        email: "jdupont@elpais.com",
    },
    {
        firstname: "Zulema",
        lastname: "Ericsson",
        email: "zericsson9@ed.gov",
    },
    {
        firstname: "Brady",
        lastname: "Scrannage",
        email: "bscrannagea@google.fr",
    },
    {
        firstname: "Isidore",
        lastname: "Korf",
        email: "ikorfb@google.com",
    },
    {
        firstname: "Bartholomew",
        lastname: "Stockbridge",
        email: "bstockbridgec@is.gd",
    },
    {
        firstname: "Laney",
        lastname: "O' Mara",
        email: "lomarad@forbes.com",
    },
    {
        firstname: "Gabe",
        lastname: "Keatch",
        email: "gkeatche@google.fr",
    },
];


let i=0;

while (i<people.length){
if (people[i].firstname==="Jean")
break;
    i++;
}
console.log(people[i].email)

}


// EX 7

// EX 8

const fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "kiwi",
    "banane",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
    ]
    
    function pomornot() {
        


console.log(fruits.includes('pomme'));
}
pomornot()


// EX 9

// OBJECTS

// EX 1

function moi() {

    const seb=new Object()
        seb.firstname="Chantrie"
        seb.lastname="Seb"
        seb.age="25 ans"
        seb.city="Waterloo"
        seb.country="Zimbabwé"
    
            console.log(seb.firstname)
            console.log(seb.lastname)
            console.log(seb.age)
            console.log(seb.city)
            console.log(seb.country)
        }





    // EX 2 

    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };




    // EX 3 


function key() {
const person = {
    lastname: "Delnatte",
    firstname: "Pierre-Antoine",
    nickname: "Leny",
    birthDate: "08-05-1985",
    city: "Liège",
    status: "married",
    }

    console.log(Object.keys(person))
    console.log(Object.values(person))

}
key();




// EX 4 MARCHPA

    function entri() {
const keys = ["name", "species", "age", "gender", "color"];
const values = ["Skitty", "cat", 9, "female", "tabby"];
const obj = Object.fromEntries(keys)
console.log(obj)
}
entri();






















// CLASSES //


// EX 1 

class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        }
}
let kitty = new Cat("kitty " ,"10 years");
let pixi = new Cat("Pixi ", "6 years")
console.log(kitty.name + kitty.age); 
console.log(pixi.name + pixi.age);



// EX 2

function Person (firstname , lastname) {
    this.firstname = firstname
    this.lastname  = lastname
}
    let seb=new Person ("Seb " , " Le plus beau ")
hello = function() {
    
    console.log(seb.firstname + seb.lastname + "say hello")
}
hello()

coucou()



// EX 3

class Animal {
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}
class Dog extends Animal {
    constructor (name) {
        super();
        this.name = name;
    }
    static get greeting() {
        return "hello";
    }

}

class Cat extends Animal {
    constructor (name) {
        super();
        this.name = name
    }
    static get greeting() {
        return "hello";
    }


}

let chat = new Cat ("Tao");
let Dogz = new Dog("Boul2biar");
console.log(Dogz.sayHello());
    console.log(chat.sayHello());




// EX 4



















// DOM 


// EX 1

let x=document.getElementById("target")
x.innerHTML="owned"

// EX 2

let y=document.querySelector(".target")
y.innerHTML="owned again"


// EX 3

let z=document.querySelectorAll(".material")
console.log(z)

z.innerHTML="owned en masse"


// EX 4


(() => {
    let dataImage = document.getElementById("source").getAttribute("data-image");
    let target = document.getElementById("target")
    let img = document.createElement("img");
    let node = document.createTextNode(dataImage);
    target.appendChild(img);
    target.appendChild(node);
    let source = document.getElementById("source");
    source.parentNode.removeChild(source);
    
    })();

// MISC



// EX1

const size=["18px" , "22px" , "24px" , "26px" , "28px" , "29px","40px"]
let parentElem = document.getElementById("waave")
parentElem.innerText = "";


function wave (content) {
    let j = 0;
    let switcher = false;
    for ( i=0 ; i< content.length ; i++) {
        let span = document.createElement('span');

        parentElem.appendChild(span);
                
        if (j === size.length - 1) {
            switcher = true;
        }else if (j === 0){
            switcher = false;
        }

        if(switcher){
            j--;
        }else{
            j++
        }
        span.style.fontSize = size[j];
    }
}

wave("Je suis la petite vague des familles")







// EX 3

(() => {
    let slide = document.getElementById("slider");
    let txt= document.getElementById('target')
    
    txt.innerHTML = slide.value
    slide.oninput = function() {
    txt.innerHTML=this.value;
    }
})();


// EX 4

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



// EX 5



// EX 6

let nbessai= ""
let min=1
let max=100

function randomnb (){
    return Math.ceil(Math.random() * (max - min) + min);
}

let number = randomnb();
function testnb (){
    while(true){
        let msg=prompt("Saisisez un nombre !")
        if (msg<number)
            alert("C'est plus grand !")
        else if (msg>number)
            alert("C'est plus petit !")
        else if (msg==number) {
            alert("Vous avez trouver le bon nombre en "+ nbessai +" essais");
            break;
        }   nbessai++
    }
}
testnb();

// EX 7 

let compt="0"
document.getElementById("target").innerHTML=localStorage.getItem("save")
document.getElementById('increment').onclick = function clik(){
compt++
document.getElementById('target').innerHTML=compt
localStorage.setItem("save" , target.innerHTML)
}
