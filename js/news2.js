

   let url = 'https://api.mediastack.com/v1/news',
    data = {
      access_key: '2810d9c10b50135ad47e3d07e41d5e49',
      languages: 'es',
      keywords: 'automovil',
      limit: 3,
      offset: 30,
    }

    fetch(url + '?' + new URLSearchParams(data))
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        let articles = data.data;
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