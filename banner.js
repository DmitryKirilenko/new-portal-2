document.addEventListener('DOMContentLoaded',function(){
	setInterval(function(){
        if(document.cookie==''){
            alert('dont show')
        }
        else{
            alert('show')
        }

           
    },3000);
	
})