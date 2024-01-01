// Write the code as shown in the video below:
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign='center'

const mainHeadingg=document.querySelector('.fruits');
mainHeadingg.style.backgroundColor='grey'
mainHeadingg.style.padding='30px'
mainHeadingg.style.margin='30px'
//mainHeadingg.style.backgroundColor='grey'
mainHeadingg.style.width='50%'

mainHeadingg.style.borderRadius='5px'
mainHeadingg.style.listStyleType='none'

const basketheads=document.querySelector('h2');
basketheads.style.marginLeft='10px';
const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.color='brown'

const evenfruitItem=document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<evenfruitItem.length;i++){
  evenfruitItem[i].style.backgroundColor="brown"
  evenfruitItem[i].style.color="white"
  
}

 const thanks=document.querySelectorAll('.fruit');
for(let i=0;i<thanks.length;i++){
// thanks[i].style.backgroundColor='white'
 thanks[i].style.padding='10px';
 thanks[i].style.margin='10px';
   }

const selectt=document.querySelectorAll('.fruit');
for(let i=0;i<selectt.length;i++){
  selectt[i].style.fontStyle="italic"
}
// Write answer to the questions asked below: