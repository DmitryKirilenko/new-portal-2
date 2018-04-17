document.addEventListener('DOMContentLoaded',function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=b81d46624f87401ab16b55076a8c1d66',false);
    xhr.send();
    if (xhr.status != 200) {
      alert( xhr.status + ': ' + xhr.statusText ); 
    } else {
      //alert( xhr.responseText );
       console.log(JSON.parse(xhr.responseText));
       var news=JSON.parse(xhr.responseText);
        console.log(news.articles[0]);
        for(var i=0; i<=news.articles.length; i++){
            console.log(news.articles[i]);
        }
        var newsDiv=document.createElement('div');
        
        
        console.log(newsDiv);
        
        console.log(newsDiv);
        for(var iNews=0;iNews<=news.articles.length;iNews++){
            newsDiv.innerHTML+= JSON.stringify(news.articles[iNews]);
        }
        
        var newsContent=document.querySelector('#news_content');
        newsContent.appendChild(newsDiv);
        
        
        
      
    }
    
    
});