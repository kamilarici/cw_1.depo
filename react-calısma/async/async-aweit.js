//? aysnc-await ***********************
const getNews = async () => {
  const API_KEY = "47d350b7a633401694e0fa5b4ddcfd46";
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("veri alinamadi");
    }

    const data = await res.json();
    // console.log(data.articles);
    renderNews(data.articles);
  } catch (error) {
    renderError();
    console.log(error);
  }
};

const renderError = () => {
  const newsDiv = document.getElementById("news");
  newsDiv.innerHTML = `
    
    <img src="https://cdn.pixabay.com/photo/2020/01/25/16/50/hoan-kiem-lake-4792884_640.jpg" alt="" />
    `;
};
const renderNews = (news) => {
  console.log(news);
  const newsDiv = document.getElementById("news");
  news.map((item) => {
    const { title, decription, content, urlToImage, url } = item;
    newsDiv.innerHTML += `
    <div class="col-sm-6 col md-4 col-xl-6" >
    <div class="card" >
    <img src="${urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${decription}</p>
      <a href="${url}" target="_blank" class="btn btn-danger">Go detail</a>
    </div>
  </div>
  </div>




    `;
  });
};
getNews();
