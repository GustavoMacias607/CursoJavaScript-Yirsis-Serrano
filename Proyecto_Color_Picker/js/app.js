const color = document.querySelector("#color");
const salida = document.querySelector("#salida");

const storage = localStorage.getItem("colorValue") || "#ffffff";

color.value = storage;



console.log(color.value);
const setColor = () =>{
    const value = color.value;
    
    
    salida.innerHTML = value;
    salida.style.background = value;
};

const saveColor = (value) =>{
    localStorage.setItem("colorValue",value);
    
};

setColor();

color.addEventListener("input", setColor);
color.addEventListener("change", () => saveColor(color.value));
