//import dependencies
const mongoose = require("mongoose");

//create Schema
const DocumentSchema = new mongoose.Schema({
  documentType: String,
  subject: String,
  preRef: String,
  refNo: String,
  postRef: String,
  ref: String,
  unit: String,
  securityClass: String,
  documentDate: Date,
  archivedDate: Date,
  dtg: String,
  controlNo: String,
  fileInputField: String,
});

//create or access model
const Document = mongoose.model("Document", DocumentSchema);

//export or make model available to other pages
module.exports = Document;
