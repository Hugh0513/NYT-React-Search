const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// For NYT 
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";
var aricleList = [];
function runQuery(numArticles, queryURL) {

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(NYTData) {

    console.log(NYTData);

    for (var i = 0; i < numArticles; i++) {

      articleCounter++;

      if (NYTData.response.docs[i].headline !== "null") {

        console.log(NYTData.response.docs[i].headline.main);
      }

      console.log(NYTData.response.docs[i].pub_date);
      console.log(NYTData.response.docs[i].section_name);
      console.log(NYTData.response.docs[i].web_url);
    }

  });

}

//runQuery(numResults, searchURL);



// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;
