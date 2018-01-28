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

/*
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
  	});

});
*/

module.exports = router;
