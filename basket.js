document.addEventListener("DOMContentLoaded", function(event) {
	  let basket=document.getElementById('basket');
	  basket.addEventListener('click', function(){
            basket.className='basketShow';

	  });
	  let closeBasket=document.getElementById('close');
      closeBasket.addEventListener('click', function(e){
            basket.className='';
               if(e.stopPropagation)
               e.stopPropagation();
	  });
      let youAdds=document.getElementById('youAdds');
      let addApple=document.querySelector('.blockApple');
      let addBannana=document.querySelector('.blockBannana');
      let addPeach=document.querySelector('.blockPeach');
      let addsArray=[];
      addApple.addEventListener('click', function(){
            addsArray.push("apple");
            console.log(addsArray);
            youAdds.innerHTML+= "apple" + '<input type="checkbox" cheched>'+'<br>';
      });
      addBannana.addEventListener('click', function(){
            addsArray.push("bannana");
            console.log(addsArray);
            youAdds.innerHTML+= "bannana" + '<input type="checkbox" cheched>'+'<br>';
      });
      addPeach.addEventListener('click', function(){
            addsArray.push("peach");
            console.log(addsArray);
            youAdds.innerHTML+= "peach" + '<input type="checkbox" cheched>'+'<br>';
      });
        


});
