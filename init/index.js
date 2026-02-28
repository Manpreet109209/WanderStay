const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listings");
require("dotenv").config({ path: "../.env" });

const MONGO_URL = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Fake Data has been Inserted into DB");
};

const emptyDB = async () => {
  await Listing.deleteMany({});
  console.log("Fake Data has been removed from DB");
};

main()
  .then(async () => {
    console.log("DB connected");
    // await emptyDB();
    await initDB();
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("DB Not connected", err);
  });