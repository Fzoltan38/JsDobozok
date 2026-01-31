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


/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/


/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/


/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/


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
