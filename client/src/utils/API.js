import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArtile: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArtile: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  getNytArticles: function(query) {
    return axios.get("/api/nytarticles/", { params: { q: query}});
  }

};
