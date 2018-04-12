let array = ['img/apple-128.png','img/Bannana-128.png','img/Fruits-19-128.png'];
let i = 0;
document.addEventListener('DOMContentLoaded',function(){
   let leftBut = document.querySelector('.leftButton');
   let img = document.querySelector('#img');
   let rightBut = document.querySelector('.rightButton');
   leftBut.addEventListener('click',function(){
   	if(array.length <= i){
   		i = 0;
   	}
     img.src = array[i];
     i++;

   })
   rightBut.addEventListener('click',function(){
   	i--;
   	if(i == 0){
   		i = array.length-1;
   	}
     img.src = array[i];
   })
})
