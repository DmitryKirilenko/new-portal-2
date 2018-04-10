document.addEventListener('DOMContentLoaded', function () {
      let drop = document.querySelector('#dropdown');
      let hide = document.querySelector('.hide');
      let body = document.getElementsByTagName('body')
      drop.addEventListener('click',function(){
      	   hide.className = 'show';
      })

     body[0].addEventListener('click',function(event){
      	    if(event.target.classList[0] == 'content'){
      	    	hide.className = 'hide';
      	    }

      })
     });
