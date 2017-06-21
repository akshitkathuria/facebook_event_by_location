var express = require('express');
var bodyParser = require('body-parser');
var feblc = require('facebook-events-by-location-core');

var app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

var search;

app.post('/search', (req, res) => {
    search = req.body;
    console.log("--------------------------------------------------");
    console.log(search);

    var es = new feblc({
    "lat": search.lat,
    "lng": search.lng,
    "accessToken" : "EAACEdEose0cBAJFV2eGFyjQEv7VomDZApB2Mwddq3MrgLTUgrlYhB49Bh2ZBIAtzOzQIGIrZAmkZAn3d5RzZCV1qxBZCvunCERSypXdSFP5LWNAzs4Iv32DgZB2ZAzcZBPGNvsWKQNmZBBXAjBQZBrBbCkIqKEkfwIZBhO2bs32Ghf43qHBiZCTkCsOAwvTqP9fyitnvN4FfxydiZCh9YXEqMFuvZCr"
    });

    es.search().then(function (events) {
        res.send(JSON.stringify(events));
    }).catch(function (error) {
        console.error(JSON.stringify(error));
    });

});

app.get("/",(req,res)=> {
    res.send("Hii server is onn");
})

app.listen(port, () => {
    console.log(`Sarted up at port ${port}`)
})