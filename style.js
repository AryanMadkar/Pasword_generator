let inputslider = document.getElementById("swing");
let slidervalue = document.getElementById("pig");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("num");
let symbol = document.getElementById("sym");
let generate = document.getElementById("gen");
let passbox = document.getElementById("lion");

let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWxyz"
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numerlogy = "0123456789";
let symbols =
  "⌘«»‹›‘’“”„‚❝❞£¥€$¢¬¶@§®©™×π±√‰Ω∞≈÷~≠¹²³½¼¾‐\[]{}†‡…·•●¡¿‽⁂∴∵◊※←→↑";



slidervalue.textContent = inputslider.value;
inputslider.addEventListener("input", () => {
  slidervalue.textContent = inputslider.value; 
});

generate.addEventListener("click", () => {
  passbox.value = generatepassword();
});

function generatepassword() {
    let genpassword = "";
    let allchars = ""
    allchars += lowercase.checked ? lowerChars : " ";
    allchars += uppercase.checked ? upperchars : " ";
    allchars += symbol.checked ? symbols : " ";
    allchars += number.checked ? numerlogy : " ";
  
    if(allchars == " "|| allchars == 0){
  
      alert("Please select at least one character type")
      return;
    }
    let i =1;
    while(i<=inputslider.value){
      genpassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
      i++;
    }
    return genpassword;
   
  }