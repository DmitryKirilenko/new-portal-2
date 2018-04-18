document.addEventListener('DOMContentLoaded',function(){
   let xhr = new XMLHttpRequest();
   xhr.open('GET', 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=9c77ec0f913b4a999a51f9620bbbc824', false);
    xhr.send();
    if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
    let news = document.querySelector('.news-content')
    let div = document.createElement('div');
    div.style.marginTop="50px";
     div.style.display="block";
    news.appendChild(div); 
    let x = JSON.parse(xhr.responseText);
    console.log(x.articles);
    for(let i = 0;i < x.articles.length;i++){
        let img = document.createElement('img');
        div.appendChild(img);
        img.src = x.articles[i].urlToImage;
        let h = document.createElement('h2');
         img.style.float="left";
         img.style.paddingRight="20px";
        div.appendChild(h);
        h.innerHTML+= x.articles[i].title +"</br>";
        h.style.fontSize="25px";
        h.style.fontFamily="helvetica";
        let a = document.createElement('a');
        div.appendChild(a);
        a.innerHTML+= x.articles[i].url +"</br>";
        a.style.color="purple";
        a.style.fontSize="20px";
        a.style.marginTop="20px";
        a.style.marginBottom="20px";
        a.style.display="block";
        let descr = document.createElement('p');
        div.appendChild(descr);
         descr.style.fontFamily="arial";
        descr.style.float="right";
        descr.style.lineHeight="1.2";
        descr.style.paddingTop="20px";
        descr.style.paddingBottom="30px";
        descr.innerHTML+= x.articles[i].description +"</br>";
        let publishedAt= document.createElement('span');
        div.appendChild(publishedAt);
        publishedAt.innerHTML+= x.articles[i].publishedAt +"</br>";
        let author= document.createElement('h3');
        div.appendChild(author);
        author.style.fontSize="20px";
        author.style.fontFamily="helvetica";
        author.style.fontWeight="bold";
        author.style.paddingBottom="20px";
        author.style.display="block";
        author.innerHTML+= x.articles[i].author +"</br>";


    }
    
}

});
