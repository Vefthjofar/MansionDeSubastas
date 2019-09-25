// Here the web service should be setup and routes declared
const artService = require("./services/artService");
const artistService = require("./services/artistService");
const customerService = require("./services/customerService");
const auctionService = require("./services/auctionService");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

// Art
app.get("/api/arts", async function(req, res) {
  const result = await artService.getAllArts();
  return res.json(result);
});

app.get("/api/arts/:id", async function(req, res){
  const result = await artService.getArtById(req.params.id);
  return res.json(result);
});

// Artists
app.get("/api/artists", async function(req, res) {
  const result = await artistService.getAllArtists();
  return res.json(result);
});

app.get("/api/artists/:id", async function(req, res){
  const result = await artistService.getArtistById(req.params.id);
  return res.json(result);
});

//Customers
app.get("/api/customers", async function(req, res) {
  const result = await customerService.getAllCustomers();
  return res.json(result);
});

app.get("/api/customers/:id", async function(req, res){
  const result = await customerService.getCustomerById(req.params.id);
  return res.json(result);
});

app.get("/api/customers/:id/auction-bids", async function(req, res){
  const result = await customerService.getCustomerAuctionBids(req.params.id);
  return res.json(result);
});

// Auctions
app.get("/api/auctions", async function(req, res) {
  const result = await auctionService.getAllAuctions();
  return res.json(result);
});

app.get("/api/auctions/:id", async function(req, res){
  const result = await auctionService.getAuctionById(req.params.id);
  return res.json(result);
});
app.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
