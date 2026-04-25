let a=document.getElementById("head")
let fd=a.innerText="new Head by js";
console.log(fd)
let b=document.getElementById("para")
// b.style.color="red";
console.log(b);

document.getElementById("head").innerHTML="<h1>Heading</h1>";

let x=document.getElementsByClassName("para")
console.log(x);

let y=document.getElementsByTagName("h1")
y[0].style.backgroundColor="green"
y[1].style.textAlign="center"
y.innerText="<h3>Head3</h3>"
console.log(y)

console.log(document.querySelector("#head"))
console.log(document.querySelector(".para"))
console.log(document.getRootNode())
console.log(document.getSelection())


document.body.style.backgroundColor="aqua"
document.getElementById("head").style.color="red"

let d=document.getElementsByClassName(".para")
// // d[0].innerText="paragraph"
// d[1].innerHTML="<p>paragrsph</p>"

document.getElementById("head").style.alignContent="center"

let newele=document.createElement("h4")
newele.innerText='this is new element'
document.body.appendChild(newele)

let p=document.getElementById("heading")
p.remove()

// let ul=document.getElementsByTagName("ul")
// ul.firstElementChild.style.color="purple"