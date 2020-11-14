/*-----createMockDb.js--------*/

/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const {
  collections,
  partners,
  citation,
  result,
  creators,
  types,
  robertCitation,
  details,
} = mockData;

const data = JSON.stringify({
  collections,
  partners,
  citation,
  result,
  creators,
  types,
  robertCitation,
  details,
});

const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
