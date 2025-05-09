
let url = "https://newsapi.org/v2/everything?q=%28auto%29&from=2025-05-08&sortBy=popularity&language=es&apiKey=6388b7d01c394336b736f0119df39e97";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })

  .then(data => {

    let articles = data.articles;
    for (let i = 0; i < 3; i++) {
      let article = articles[i];
      let articleElement = document.createElement('div');
      articleElement.classList.add('col','noticia');

      let title = document.createElement('h6');
      title.textContent = article.title;

      let description = document.createElement('p');
      description.textContent = article.description;

      let link = document.createElement('a');
      link.href = article.url;
      link.textContent = 'Read more';
      link.target = '_blank';

      let newsContainer = document.getElementById('noticias');

    articleElement.appendChild(title);
    articleElement.appendChild(description);
    articleElement.appendChild(link);
    newsContainer.appendChild(articleElement);
  }
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});