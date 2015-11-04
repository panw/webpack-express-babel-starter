var path = require("path"),
		fs = require('fs'),
		bodyParser = require('body-parser'),
		express = require('express'),
		app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Serve the static assets from public
app.use(express.static(path.join(__dirname, "public"), { 
	maxAge: "200d" // We can cache them as they include hashes 
}))

// Get HTML and replace SCRIPT_URL with Webpack build based on environment
var html = fs.readFileSync(path.resolve(__dirname, "./src/index.html"), "utf-8"),
		scriptUrl = process.env.production ? "./build" : "http://localhost:8080/build"
html = html.replace("SCRIPT_URL", `${scriptUrl}/bundle.js`)

// Serve index.html for root
app.get("/", function(req, res) { 
	res.contentType = "text/html; charset=utf8"
	res.end(html)
})

// Set port env settings or defaults to 3000
app.set("port", (process.env.PORT || 3000));

app.listen(app.get("port"), function(){ 
 	console.log("App listening on http://localhost:%s", app.get("port"))
})
