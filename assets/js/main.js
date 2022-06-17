// // console.log("text");


// // let, var, const = Variablen
//let und var kann man überschreiben, const ist fix, man bekommt ansonsten einen error 
// // boolean, number, string = Datentypen 

// //Variablen Deklaration / Anweisung
// // let text = "Hello World!";
// //const= Wert der sich nicht ändern lässt
// const PI = 3.14;
// //old school, wird nicht mehr benutzt
// var isDone = true;

// // text = "Guten Abend!";
// // PI = 5; --> geht nicht weil const

// console.log(PI); // zeigt den Wert PI so in der Konsole an

// // document.write(text); // das besondere an document.write ist, dass er es am Ende einfügt, den Wert Text haben wir zuvor definiert

document.getElementById('headline').innerHTML = text;

//hier kann man direkt ins HTML hineinschreiben, mit getElementbyId holen wir die Id die wir vergeben haben 

console.log(text);
console.log(isDone);
// //Wie werden strings und numbers dargestellt? String wird weiß und number lila in der console dargestellt 


// //JS output -> alert --> wir kriegen eine Ausgabe 
// //alert ist eine vorgefertigte Einstellung unseres Browsers 
// // window.alert('Hallo'); 
// //shorthand, in die Klammer muss aber ein definierter Wert
// // alert(text)


// // JS Input -> prompt & confirm -> man kann was eingeben 

// // window.prompt('Give your Name!');

// let myName = prompt('Give your Name!')
// console.log(myName);
// let isCool = confirm('Are you cool ?');
// console.log(isCool);


// string + number = string 
console.log("5" + 4);

// number + string = string
console.log(4 + "5");

// // das + ist bei JS kein Rechenoperator, sondern ein "Plus", Sachen aneinander binden, verketten

console.log("4" * 2);
// // * ist ein Rechenoperator

console.log("x" * 5);
// // NaN = not a number 

// //functions 
// //Eine Function hat zwei Phasen: 1) Deklaration und 2) Calling

// //Declaration - mit "function" wird etwas deklariert
// // "sayHi" ist der Name der function

// // =======================================================


// // Schreibt eine Function die zwei Zahlen multipliziert. Diese Zahlen sollt ihr über das HTML bekommen und die function soll mit einem onclick gecallt werden. Ausgabe in der Konsole. 


let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

function multiply() {
    let result = num1.value * num2.value;
    console.log(result);
    document.write(result);
}


// // typeof = kann man zum debuggen benutzen 

let a = 45;

console.log(typeof (a));
console.log(typeof (3));
console.log(typeof ('Hallo'));
console.log(typeof (true));

// // ==============MERKEN=========================
// //input im HTML gibt immer einen string zurück 

// console.log(typeof (num1.value));
// // =================MERKEN============================

// // null = eine Rückgabewert, wenn er weiß da kommt etwas, aber nicht weiß was
let box = null;
console.log(typeof (box));


let unknow = undefined;
console.log(typeof (unknow));
console.log(true + "hi");

let b;
console.log(b); // undefined= wenn etwas nicht definiert ist und er nicht den Wert kennt 

// //function 
console.log(typeof (multiply()));
console.log(typeof (prompt));

// //ADD 2 Numbers 

let zahl1 = document.getElementById('zahl1');
let zahl2 = document.getElementById('zahl2');

function plusRechnen() {
    console.log(num3.value * 1);
    console.log(num4.value * 1);
    console.log(zahl1.value * 1 + zahl2.value * 1);
}

// Type conversions 
// String conversion 

let isDone2 = true; // true ist ein boolean 
console.log(isDone2); // hier krieg ich ein boolean 
console.log(String(isDone2)); // hier kommt ein string 
// nutzt man wenn man einen anderen type bekommen möchte zB beim Rechnen 

//number conversion 
/console.log(typeof (zahl1.value)); / / string
console.log(typeof (Number(zahl1.value)));

let somenum = 199;
console.log(typeof (somenum));
console.log(typeof (String(somenum)));
console.log(typeof (Boolean(somenum)));

// // boolean conversion 

let number1 = 1;
console.log(typeof (number1)); // number
console.log(typeof (Boolean(number1))); //boolean 


// Arithmetik 

// + - / * % ++ --

a = a + b -> a +=b
a = a - b -> a -=b
a = a / b -> a /=b 
a = a * b -> a *=b

// ++ = immer plus 1    auch increment genannt (++)
// a = a + 1 ---> a += 1 --->  a++ 

// -- = immer minus 1   auch decrement genannt (--)
// a = a - 1 ---> a -= 1 ---> a--


// modulo 
// berechnet den Restwert, schaut wie oft eine Zahl in eine Zahl passt und berechnet dann den Restwert

// console.log(20 % 6); // 2
// console.log(20 % 4); // 5


// comparison 

// wenn wir ein gleich '=' benutzen weise wir etwas zu 
// wenn wir zwei gleich '==' schaut er ob die Anzahl gleich ist, wenn ja true, wenn nein false
// wenn wir drei gleich '===' schaut er sich den Datentyp an und ob diese gleich sind oder nicht


// console.log(3 < 3); // false 
// console.log(3 === 3); // true 
// console.log("3" == 3); // true 
// console.log("3" === 3); // false 

// console.log(true == 0); // false 
// console.log(true == 1); // true 
// console.log(true != 0); // true  // != ist nicht 
// console.log(true !== 0); // true 


// Übung 

// 3 Button (Links, Rechts, Center)
// H1
// Wenn click auf einen der Button soll sich der Text im Body dementsprechend anordnen. 
// Bitte nutzt classlist 


let headline = document.getElementById('titel');

function left() {
    console.log("left");
    headline.className = "";
    headline.classList.add("left");
}

function center() {
    console.log("center");
    headline.className = "";
    headline.classList.add("center")
}

function right() {
    console.log("right");
    headline.className = "";
    headline.classList.add("right")
}