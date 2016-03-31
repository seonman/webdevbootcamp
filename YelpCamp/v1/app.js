var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var campgrounds = [
   {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
   {name: "Mountain Goat's Rest", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
   {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
   {name: "Mountain Goat's Rest", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
   {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
   {name: "Mountain Goat's Rest", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
   ]; 
       
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render("landing");
});

app.get('/campgrounds', function(req, res) {

       
    res.render("campgrounds", {campgrounds: campgrounds});
});


app.post("/campgrounds", function(req, res){
   // get data from form and add to campgrounds arrah
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   
   campgrounds.push(newCampground);
   
   // Redirect back to campgrounds page
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.get("*", function(req, res) {
    res.send("You are a star!!!");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp started.");
});