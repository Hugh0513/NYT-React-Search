import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    console.log(id);
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function(articleData) {
    console.log(articleData);
    console.log("/api/articles", articleData);
    return axios.post("/api/articles", articleData);
  },
  getNytArticles: function(query) {
    console.log(query);
    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    //var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    //authKey + "&q=" + query;
    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey
    console.log(queryURLBase);
    var startyear, endyear;
    if (query.startyear !== ""){
      startyear = query.startyear + "0101"
    }
    if (query.endyear !== ""){
      endyear = query.endyear + "1231"
    }
    //return axios.get("/api/nytarticles", { params: { q: query}});
    //console.log(axios.get(queryURLBase, { params: { q: query}}));
    return axios.get(queryURLBase, { params: { q: query.topic, begin_date: startyear, end_date: endyear }});
    //return axios.get(queryURLBase, { q: query.topic, begin_date: startyear, end_date: endyear });
  }

};
