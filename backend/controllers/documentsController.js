//Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

//import Document model
const Document = require("../models/document");

//fetch all archived documents
const fetchDocuments = async (req, res) => {
  try {
    //find the archived documents
    const documents = await Document.find();
    //respond with them
    res.json({ documents: documents });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

//fetch single document
const fetchDocument = async (req, res) => {
  try {
    //Get id off the url
    const documentId = req.params.id;
    //find the document using the id
    const document = await Document.findById(documentId);
    //respond with document
    res.json({ document: document });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

//post or insert or create document api or function
const createDocument = async (req, res) => {
  try {
    //Get the sent in data off request body
    const documentType = req.body.documentType;
    const subject = req.body.subject;
    const preRef = req.body.preRef;
    const refNo = req.body.refNo;
    const postRef = req.body.postRef;
    const ref = req.body.ref;
    const unit = req.body.unit;
    const securityClass = req.body.securityClass;
    const documentDate = req.body.documentDate;
    const archivedDate = req.body.archivedDate;
    const dtg = req.body.dtg;
    const controlNo = req.body.controlNo;
    const fileInputField = req.body.fileInputField;

    //Create a document with it
    const document = await Document.create({
      documentType: documentType,
      subject: subject,
      preRef: preRef,
      refNo: refNo,
      postRef: postRef,
      ref: ref,
      unit: unit,
      securityClass: securityClass,
      documentDate: documentDate,
      archivedDate: archivedDate,
      dtg: dtg,
      controlNo: controlNo,
      fileInputField: fileInputField,
    });
    //respond with the new document
    res.json({ document: document });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

//update document
const updateDocument = async (req, res) => {
  try {
    //get id off url
    const documentId = req.params.id;

    //get the data off the req body
    const documentType = req.body.documentType;
    const subject = req.body.subject;
    const preRef = req.body.preRef;
    const refNo = req.body.refNo;
    const postRef = req.body.postRef;
    const ref = req.body.ref;
    const unit = req.body.unit;
    const securityClass = req.body.securityClass;
    const documentDate = req.body.documentDate;
    const archivedDate = req.body.archivedDate;
    const dtg = req.body.dtg;
    const controlNo = req.body.controlNo;
    const fileInputField = req.body.fileInputField;

    //find document using the id and update document
    const document = await Document.findByIdAndUpdate(documentId, {
      documentType: documentType,
      subject: subject,
      preRef: preRef,
      refNo: refNo,
      postRef: postRef,
      ref: ref,
      unit: unit,
      securityClass: securityClass,
      documentDate: documentDate,
      archivedDate: archivedDate,
      dtg: dtg,
      controlNo: controlNo,
      fileInputField: fileInputField,
    });

    //find updated document
    const updatedDocument = await Document.findById(documentId);
    //respond with updated document
    res.json({ document: updatedDocument });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

//delete document
const deleteDocument = async (req, res) => {
  try {
    //get id off url
    const documentId = req.params.id;

    //delete document using id
    await Document.findByIdAndDelete(documentId);

    //respond
    res.json({ success: "Document deleted successfully" });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
const searchForDocuments = async (req, res) => {
  try {
    const queryParams = req.query;
    const query = {};

    // Add specific filtering logic based on search parameters
    if (queryParams.documentType) {
      query.documentType = queryParams.documentType;
    }
    if (queryParams.subject) {
      query.subject = { $regex: new RegExp(queryParams.subject, "i") };
    }
    if (queryParams.preRef) {
      query.preRef = { $regex: new RegExp(queryParams.preRef, "i") };
    }
    if (queryParams.refNo) {
      query.refNo = { $regex: new RegExp(queryParams.refNo, "i") };
    }
    if (queryParams.postRef) {
      query.postRef = { $regex: new RegExp(queryParams.postRef, "i") };
    }
    if (queryParams.ref) {
      query.ref = { $regex: new RegExp(queryParams.ref, "i") };
    }
    if (queryParams.unit) {
      query.unit = queryParams.unit;
    }
    if (queryParams.securityClass) {
      query.securityClass = queryParams.securityClass;
    }
    if (queryParams.documentDate) {
      query.documentDate = {
        $regex: new RegExp(queryParams.documentDate, "i"),
      };
    }
    if (queryParams.archivedDate) {
      query.archivedDate = {
        $regex: new RegExp(queryParams.archivedDate, "i"),
      };
    }
    if (queryParams.dtg) {
      query.dtg = { $regex: new RegExp(queryParams.dtg, "i") };
    }
    if (queryParams.controlNo) {
      query.controlNo = { $regex: new RegExp(queryParams.controlNo, "i") };
    }
    // Query the database for documents matching the provided criteria
    const documents = await Document.find(query);

    res.json(documents);
  } catch (error) {
    console.error("Error retrieving documents:", error);
    res.status(400).json({ error: "Internal server error" });
  }
};
module.exports = {
  fetchDocuments,
  fetchDocument,
  createDocument,
  updateDocument,
  deleteDocument,
  searchForDocuments,
};
