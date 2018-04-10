  document.addEventListener("DOMContentLoaded", function(event) {
    let buttonNews=document.getElementById('dropdown');
    let hide=document.querySelector('.hidden');
    buttonNews.onclick=function(){
        hide.className='show';
    }
    var body=document.getElementsByTagName('body');
    body[0].onclick=function(event){
      if(event.target.classList[0]=="content"){
         drop.className='hide'; 
      }
    }
  });