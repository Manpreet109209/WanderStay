const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listings");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
require("dotenv").config();

const port = process.env.PORT || 8080;
const MONGO_URL = process.env.ATLASDB_URL;

main().then(() => {
    console.log("DB connected");
}).catch(err => {
    console.log("DB Not connected", err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req , res) => {
    res.render("listings/home");
})

app.get("/about", (req , res) => {
    res.render("listings/about");
})

app.get("/contact", (req , res) => {
    res.render("listings/contact");
})

// index route
app.get("/listings", async (req , res) => {
    try {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
    } catch (err){
        console.log(err);
        res.status(500).render("errors/listingsError");
    }
})

// create route
app.get("/listings/new", async (req , res) => {
    try {
    // let {id} = req.params;
    // const listing = await Listing.findById(id);
    res.render("listings/new");
    } catch (err){
        console.log(err);
        res.status(500).render("errors/listingsError");
    }
})

// create route
app.post("/listings", async (req , res) => {
    try {
    let newlisting = new Listing(req.body.listing);
    newlisting.save();
    res.redirect("/listings");
    } catch (err){
        console.log(err);
        res.status(500).render("errors/listingsError");
    }
})

// show route
app.get("/listings/:id", async (req , res) => {
    try {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show", { listing });
    } catch (err){
        console.log(err);
        res.status(500).render("errors/listingsError");
    }
})

// edit route
app.get("/listings/:id/edit", async (req , res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
})

// update route
app.put("/listings/:id", async (req , res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id , { ...req.body.listing });
    res.redirect(`/listings/${id}`);
})


// delete route
app.delete("/listings/:id", async (req , res) => {
    let { id } = req.params;
    let deletedlisting = await Listing.findByIdAndDelete(id);
    console.log(deletedlisting);
    res.redirect("/listings");
})

app.listen(port, () => {
    console.log(`server is listening at post ${port} `);
})