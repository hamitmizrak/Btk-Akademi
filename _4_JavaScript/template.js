// single comment

/*
multiple Comment
*/

// console.log("console.log");
// console.info("console.info");
// console.warn("console.warn");
// console.error("console.error");

// document.writeln("Ekranda göster<br/>");
// window.document.writeln("Ekranda göster-2");

// // alert("Pop-up data");

// /////////////////////////////////////////////////////
// // Variable Global 

// var pencil="Digital Pencil";
// var pencil="Digital Pencil-1";
// document.writeln(pencil+"<br/>");

// // Variable local 
// let pencil2="Digital Pencil-2";
// pencil2="Digital Pencil-22";
// document.writeln(pencil2+"<br/>");

// const pencil3="Digital Pencil-3";
// // pencil3="Digital Pencil-22"; yazamazsınız.
// document.writeln(pencil3+"<br/>");

// /////////////////////////////////////////////////////
// // Operatörler
// // + - * / 
// // &&=AND(VE) ||=OR(VEYA)
// // ! DEĞİL

// // Inceredement
// // DeInceredement
// // x++
// // ++x
// // x--
// // --x

// /////////////////////////////////////////////////////
// // Hoisting
// number=44;
// var number;

// /////////////////////////////////////////////////////
// // Prompt
// // const uname=prompt("Adınız nedir?");
// // document.writeln(uname+"<br/>");

// // // Prompt
// // const usurname=prompt("Soyadınız nedir?");
// // document.writeln(usurname+"<br/>");

// /////////////////////////////////////////////////////
// // Cast
// let number1=10;
// let number2=String(Number("20")) ;// cast çevirdi
// document.writeln(number1+number2+"<br/>");

// /////////////////////////////////////////////////////
// // typeof
// let number3=20;
// document.writeln(typeof number3+" <br/>");
// let number4="Merhabalar";
// document.writeln(typeof number4+" <br/>");
// let number5=true;
// document.writeln(typeof number5+" <br/>");

// /////////////////////////////////////////////////////
// // null
// // new
// // instance
// // zero

// // undefined
// let data;
// document.writeln(data+" <br/>");

// // Infinity
// let data2=4/0;
// document.writeln(data2+" <br/>");

// NaN
// let data3="Merhabalar"/2;
// document.writeln(data3+" <br/>");

/////////////////////////////////////////////////////
// Math
// document.writeln(Math.PI+" <br/>");
// document.writeln(Math.E+" <br/>");
// document.writeln(Math.min(4,5,6,8,10)+" <br/>");
// document.writeln(Math.max(4,5,6,8,10)+" <br/>");
// document.writeln(Math.abs(-25)+" <br/>");
// document.writeln(Math.pow(2,5)+" <br/>");
// document.writeln(Math.sqrt(25)+" <br/>");
// document.writeln(Math.floor(4.9)+" <br/>");
// document.writeln(Math.ceil(4.1)+" <br/>");
// document.writeln(Math.round(2.4)+" <br/>");
// document.writeln(Math.round(2.5)+" <br/>");
// document.writeln(Math.sin(2.5)+" <br/>");
// document.writeln(Math.asin(1)+" <br/>");
// document.writeln(Math.cos(2.5)+" <br/>");
// document.writeln(Math.floor(Math.random()*9+1)+"<br/>");

//ÖDEV: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 
// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
// NOT: cast kullalım ?
// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
// eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

/////////////////////////////////////////////////////
// String 
// let vocabulary="js ÖĞREniyorum js ";
// document.writeln(vocabulary+" <br/>")
// document.writeln(vocabulary.length+" <br/>")
// document.writeln(vocabulary.trim().length+" <br/>")

// document.writeln(vocabulary.toUpperCase()+" <br/>")
// document.writeln(vocabulary.toLowerCase()+" <br/>")

// document.writeln(vocabulary.indexOf("js")+" <br/>")
// document.writeln(vocabulary.lastIndexOf("js")+" <br/>");
// document.writeln(vocabulary.charAt(1)+" <br/>");

// document.writeln(vocabulary.concat("INC")+" <br/>");
// document.writeln(vocabulary.replace(vocabulary," değiştirdim")+" <br/>");

// document.writeln(vocabulary.substring(1)+" <br/>");
// document.writeln(vocabulary.substring(1,5)+" <br/>"); // 1<=X<=5-1

/////////////////////////////////////////////////////

// ÖDEV-1 
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())


/////////////////////////////////////////////////////
// Function
// 1- retursuz Parametresiz
// function retursuzParametresiz(){
//     document.writeln("1- retursuz Parametresiz <br/>");
// }
// retursuzParametresiz()

// // 2- retursuz Parametreli
// function retursuzParametreli(uFullName){
//     document.writeln("2- retursuz Parametreli "+uFullName+"<br/>");
// }
// retursuzParametreli("Hamit Mızrak")

// // 3- returnlu Parametresiz
// function returnluParametresiz(){
//     return "3- returnlu Parametresiz <br/>"
// }
// const data3=returnluParametresiz()
// document.writeln(data3+" <br/>")

// // 4- returnlu Parametresiz
// function returnluParametreli(uFullName){
//     return "4- returnlu Parametresiz "+uFullName+ "<br/>"
// }
// const data4=returnluParametreli("Hamit Mızrak")
// document.writeln(data4+" <br/>")

/////////////////////////////////////////////////////

// ÖDEV -2 
//NOT: örneklerimizi function,anonymous ve arrow function ile yapalım.
//NOT: değişken olarak var,let,const kullanalım.
//Örnek-1
//y=3x+4k ==>1.dereceden2bilinmeyenlidenklem algoritması
//Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?

//örnek-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül: (derece*9/5)+32

//örnek-3 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
//4+3*2(3:3-1*6+9:1+(3:3))

/////////////////////////////////////////////////////

// // Immedia Function (IF)
// (
//     function (){
//         document.writeln("Immedia Function <br/>")
//     }
// )()

// // Normal Function
// function normalFunction(){
//     document.writeln("Normal Function <br/>")
// }
// normalFunction()

// // Anonymous Function
// const anonymousFunction= function (){
//     document.writeln("Anonymous Function <br/>")
// }
// anonymousFunction()

// // Arrow Function
// const arrowFunction= ()=>{
//     document.writeln("Arrow Function <br/>")
// }
// arrowFunction()

/////////////////////////////////////////////////////
// conditional, ternary, switch-case
const conditional = () => {
    const number = 5;
    if (number > 0)
        document.writeln("Pozitiftir <br/>");
    else {
        document.writeln("Negatif <br/>");
    }
}
//conditional()

const conditional2 = () => {
    const number = 5;
    const ternary = (number > 0) ? "Pozitiftir <br/>" : "Negatif <br/>";
    document.writeln(ternary);
}
//conditional2()

const conditional3 = () => {
    const number = 5;
    if (number == 1) {
        document.writeln("1 <br/>");
    } if (number === 2) {
        document.writeln("2 <br/>");
    } if (number === 3) {
        document.writeln("3 <br/>");
    } if (number === 4) {
        document.writeln("4 <br/>");
    } if (number === 5) {
        document.writeln("5 <br/>");
    } else {
        document.writeln("1<=SAYI<=5 dışında <br/>");
    }
}
//conditional3()

const conditional4 = () => {
    const number = 5;

    switch (number) {
        case 1:
            document.writeln("1 <br/>");
            break;
        case 2:
            document.writeln("2 <br/>");
            break;
        case 3:
            document.writeln("3 <br/>");
            break;
        case 4:
            document.writeln("4 <br/>");
            break;
        case 5:
            document.writeln("5 <br/>");
            break;
        default:
            document.writeln("1<=SAYI<=5 dışında <br/>");
            break;
    }
}
//conditional4()

// break: döngünün çalışmaması için kullanırız.
// return: function çalışmaması için kullanırız.
// continue:sadece o şarta çalışmasının döngü devam etsin

// debug

/////////////////////////////////////////////////////
// Loop
// For Loop
const loop1 = () => {
    for (let i = 1; i <= 9; i++) {
        document.writeln(i + " ");
    }
    document.writeln("<br/>");
}
loop1()

// While Loop
const loop2 = () => {
    let i = 1;
    while (i <= 9) {
        document.writeln(i + " ");
        i = i + 1;
    }
    document.writeln("<br/>");
}
loop2()

// Do-While Loop
const loop3 = () => {
    let i = 1;
    do {
        document.writeln(i + " ");
        i = i + 1;
    } while (i <= 9);
    document.writeln("<br/>");
}
loop3()

/////////////////////////////////////////////////////
// Exception Handling
// setTimeOut
// setInterval
/////////////////////////////////////////////////////
// diziler
/////////////////////////////////////////////////////
// object
/////////////////////////////////////////////////////
// dom
/////////////////////////////////////////////////////
// event
// Listener

/////////////////////////////////////////////////////
// GENEL BİR ÖRNEK:
// Form Html5- css3 -Bootstrap- JS -jquery


