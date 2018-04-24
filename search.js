// Code goes here



document.addEventListener('DOMContentLoaded', function(){
    var array=['worldwide', 'essay','yyeeaahh'];
    function Input(){
      let search=document.querySelector('#search').value;
      let autocomplete=document.getElementById('autocomplete');
  if(search.length>3){
     for(var i=0; i<array.length;i++){
       autocomplete.innerHTML+=array[i];
       var li=document.createElement('li');
       autocomplete.appendChild(li);
     }
  } 
}
})
