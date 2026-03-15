const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listings");
const path = require("path");
const wrapAsync = require("./utils/wrapAsync");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
require("dotenv").config();

const port = process.env.PORT || 8080;
const MONGO_URL = process.env.ATLASDB_URL;

// DB CONNECTION

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));

// APP CONFIG

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

// ROUTES

// home
app.get("/", (req, res) => {
  res.render("listings/home");
});

// about
app.get("/about", (req, res) => {
  res.render("listings/about");
});

// contact
app.get("/contact", (req, res) => {
  res.render("listings/contact");
});

// INDEX
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
  })
);

// NEW
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});

// CREATE
app.post(
  "/listings",
  wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  })
);

// SHOW
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
      throw new Error("Listing not found");
    }

    res.render("listings/show", { listing });
  })
);

// EDIT
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
  })
);

// UPDATE
app.put(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  })
);

// DELETE
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  })
);

// 404 HANDLER

app.use((req, res, next) => {
  const err = new Error("Page Not Found");
  err.statusCode = 404;
  next(err);
});

// ERROR MIDDLEWARE

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;

  console.error(err);

  res.status(statusCode).render("errors/listingsError", {
    message,
  });
});

// SERVER

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});