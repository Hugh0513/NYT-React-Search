const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);


router.get("/nytarticles", (req, res) => {

	// For NYT 
	var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
	var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
	  authKey + "&q=asia";
	var aricleList = [];
	console.log(queryURLBase);

	$.ajax({
	    url: queryURL,
	    method: "GET"
  	}).done(function(NYTData) {

	    console.log(NYTData);
	    res.json(NYTData);
		/*
	    for (var i = 0; i < numArticles; i++) {

	      articleCounter++;

	      if (NYTData.response.docs[i].headline !== "null") {

	        console.log(NYTData.response.docs[i].headline.main);
	      }
	      console.log(NYTData.response.docs[i].pub_date);
	      console.log(NYTData.response.docs[i].section_name);
	      console.log(NYTData.response.docs[i].web_url);
	    }
	    */
  	});

});

module.exports = router;
