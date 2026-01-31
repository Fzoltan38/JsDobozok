/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük
le róla azt.
*/

let isBlurred = false;
document.getElementById("element-one").onclick = function (){

    try{
        isBlurred = !isBlurred;
      
        if (isBlurred){
          document.getElementById("element-one").classList.add("blur");
        }
        else{
          document.getElementById("element-one").classList.remove("blur");
        }
    }
    catch{
        alert("Hiba");
    }
};

/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/
let isHovered = false;

document.getElementById("element-two").onmouseenter = ()=>{
  isHovered = !isHovered
  renderSecondBox();
}

document.getElementById("element-two").onmouseleave = function (){
  isHovered = !isHovered
  renderSecondBox();
}

function renderSecondBox(){
  if(isHovered){
    document.getElementById("element-two").style.backgroundColor = "red";
  }
  else{
    document.getElementById("element-two").style.backgroundColor = "";
  }
}

/*
3. doboz:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát. 
*/

function next(min, max){
  return Math.floor(Math.random() * (max-min) + min);
}

document.getElementById("element-three").ondblclick = ()=>{
  
  document.getElementById("element-three").firstElementChild.innerHTML = next(1,20);
}

/*
4. doboz:
Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/

let e4 = document.getElementById("element-four");
e4.onclick = ()=>{
  e4.classList.add("hidden");
  setTimeout(
    function () 
    {
      e4.classList.remove("hidden");
    },1000);
}
/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/
let e5 = document.getElementById("element-five");
e5.onclick = ()=>{
  let boxes = document.querySelectorAll(".shape");

  for (let box of boxes){
    box.style.borderRadius = "50%";
  }
}

/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/

let form1 = document.getElementById("box-6");

form1.onsubmit = (event) =>{
  event.preventDefault();
  document.getElementById("element-six").firstElementChild.innerHTML = 
  event.target.boxNumber.value;
}
/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/

let text = "";
document.getElementById("box7-input").onkeydown = (event)=>{

  text = text + event.key;
  document.getElementById("element-seven").firstElementChild.innerHTML =
  text;
}

/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/

document.onmousemove = (event)=>{
  let coordinates = `X: ${event.clientX}, Y: ${event.clientY}`;
  document.getElementById("element-eight").firstElementChild.innerHTML = coordinates;
}

/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő, 
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.

Az előállt végeredményt tároljuk el új state-ként!

Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9

  Operáció: 9 * 5
  
  Dobozba és state-be beírandó érték: 45
*/

let state = 9;

document.getElementById("box-9").onsubmit = (event)=>{
  event.preventDefault();

  let operand = Number(event.target.operand.value);
  let operator = event.target.operator.value; 

  console.log(operand);
  console.log(operator);

  switch (operator){

    case "mult":{
      state = state * operand;
      break;
    }

    case "div":{
       state = state / operand;
      break;
    }

    case "add":{
       state = state + operand;
      break;
    }

    case "sub":{
       state = state - operand;
      break;
    }

  }
  
  document.getElementById("element-nine").firstElementChild.innerHTML = state;

}
