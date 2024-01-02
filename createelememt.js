//create Element

const subHeading=document.createElement('h3');
//createTextNode
const textNodee =document.createTextNode("Buy high quality organic fruits online");
//appendChild
subHeading.appendChild(textNodee)
console.log(subHeading)
//insertBefore
const divs=document.getElementsByTagName('div')
const firstDiv=divs[0];
firstDiv.appendChild(subHeading)
subHeading.style.fontStyle="italic"

// Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".

// On this paragraph tag set an id of "fruits-total".

const para = document.createElement('p')
 const textHeading=document.createTextNode("Total fruits: 4")
 para.appendChild(textHeading);

// console.log(para)

const  seconddiv = divs[1];
seconddiv.appendChild(para)

para.id = "fruits-total"
console.log(para)
