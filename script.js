const btn = document.getElementById("btn");
const para = document.getElementById("para");

const changeBackground = () =>{
    const hexVal = Math.floor(Math.random()* 0xffffff).toString(16);
    document.body.style.background = `#${hexVal}`;
    para.textContent = `Color Code.. ${hexVal}`;
}
btn.addEventListener("click",changeBackground);