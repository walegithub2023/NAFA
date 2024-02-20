import { create } from "zustand";
import axios from "axios";

const documentsStore = create((set) => ({
  //Activity for archiveSignalDocument.jsx page starts here
  //Activity for new or creation of archiveSignalDocument starts here
  //state for success message after successful archive of a signal document
  successMessage1: "",

  //Get signal document data state
  createForm1: {
    documentType: "",
    subject: "",
    preRef: "",
    refNo: "",
    postRef: "",
    ref: "",
    unit: "",
    securityClass: "",
    documentDate: "",
    archivedDate: "",
    dtg: "",
    controlNo: "",
    fileInputField: "",
  },

  // Function to handle the changes in form inputs
  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    // Access createForm1 from the current state
    set((state) => {
      return {
        createForm1: {
          ...state.createForm1,
          [name]: value,
        },
      };
    });
  },

  // create or archive signal document function
  createDocument: async (e) => {
    try {
      e.preventDefault();

      const { createForm1 } = documentsStore.getState();
      // create or archive signal document
      const res = await axios.post(
        "http://localhost:3001/documents",
        createForm1
      );

      // success message to display after successful creation
      set({
        successMessage1: "Congratulations! document archived successfully!",
      });

      // reset message after a certain duration if needed
      setTimeout(() => set({ successMessage1: "" }), 5000); // Clear message after 5 seconds

      set({
        createForm1: {
          documentType: "",
          subject: "",
          preRef: "",
          refNo: "",
          postRef: "",
          ref: "",
          unit: "",
          securityClass: "",
          documentDate: "",
          archivedDate: "",
          dtg: "",
          controlNo: "",
          fileInputField: "",
        },
      });
    } catch (err) {
      console.log(err);
      set({ successMessage1: "Document Already Exists" });
      // reset message after a certain duration if needed
      setTimeout(() => set({ successMessage1: "" }), 5000); // Clear message after 5 seconds
    }
  },
  //Activity for new or creation of archiveSignalDocument ends here
  //Activities for archiveSignalDocument.jsx page ends here

  //Activity for archiveDocument.jsx page starts here
  //Activity for new or creation of archiveDocument starts here
  //state for success message after successful archive of a document
  successMessageForArchiveDocument: "",

  //Get  document data state
  createFormForArchiveDocument: {
    documentType: "",
    subject: "",
    preRef: "",
    refNo: "",
    postRef: "",
    ref: "",
    unit: "",
    securityClass: "",
    documentDate: "",
    archivedDate: "",
    dtg: "",
    controlNo: "",
    fileInputField: "",
  },

  // Function to handle the changes in form inputs
  updateCreateFormFieldForArchiveDocument: (e) => {
    const { name, value } = e.target;

    // Access createFormForArchiveDocument from the current state
    set((state) => {
      return {
        createFormForArchiveDocument: {
          ...state.createFormForArchiveDocument,
          [name]: value,
        },
      };
    });
  },

  // create or archive  document function
  createDocumentForArchiveDocument: async (e) => {
    try {
      e.preventDefault();

      const { createFormForArchiveDocument } = documentsStore.getState();
      // create or archive signal document
      const res = await axios.post(
        "http://localhost:3001/documents",
        createFormForArchiveDocument
      );

      // success message to display after successful creation
      set({
        successMessageForArchiveDocument:
          "Congratulations! document archived successfully!",
      });

      // reset message after a certain duration if needed
      setTimeout(() => set({ successMessageForArchiveDocument: "" }), 5000); // Clear message after 5 seconds

      set({
        createFormForArchiveDocument: {
          documentType: "",
          subject: "",
          preRef: "",
          refNo: "",
          postRef: "",
          ref: "",
          unit: "",
          securityClass: "",
          documentDate: "",
          archivedDate: "",
          dtg: "",
          controlNo: "",
          fileInputField: "",
        },
      });
    } catch (err) {
      console.log(err);
      set({ successMessageForArchiveDocument: "Document Already Exists" });
      // reset message after a certain duration if needed
      setTimeout(() => set({ successMessageForArchiveDocument: "" }), 5000); // Clear message after 5 seconds
    }
  },
  //Activity for new or creation of document in archiveDocument.jsx ends here
  //Activities for archiveDocument.jsx page ends here

  //Activities for Archived.jsx page starts here
  //Activities to read documents (fetch and display archived documents) starts here
  //set default state for documents
  documents: null,

  //function to fetch documents
  fetchDocuments: async () => {
    //Fetch documents
    const res = await axios.get("http://localhost:3001/documents");

    //Set documents state to fetch documents
    set({
      documents: res.data.documents,
    });
  },
  ////Activities to read documents (fetch and display archived documents) ends here
  //Activities to delete documents starts here

  // function to delete documents
  handleDelete: async (_id) => {
    // Implement delete functionality, e.g., send delete request to server
    // Delete the document
    const res = await axios.delete(`http://localhost:3001/documents/${_id}`);
    console.log(res);

    // update state
    set((state) => ({
      documents: state.documents.filter((document) => document._id !== _id),
    }));
  },
  //Activities to delete documents ends  here
  //Activities for Archived.jsx page ends here

  //Activities for RetrieveDocument.jsx page starts here
  //Activity to read (fetch and display) documents based on users' search input
  //state for success message after search of a document
  successMessageForRetrieve: "",

  //state for searchInput
  searchInput: "",
  searchResults: "",

  //Get signal document data state
  createFormForRetrieve: {
    documentType: "",
    subject: "",
    preRef: "",
    refNo: "",
    postRef: "",
    ref: "",
    unit: "",
    securityClass: "",
    documentDate: "",
    archivedDate: "",
    dtg: "",
    controlNo: "",
    fileInputField: "",
  },

  // Function to handle the changes in form inputs
  updateCreateFormFieldForRetrieve: (e) => {
    const { name, value } = e.target;

    // Access createForm1 from the current state
    set((state) => {
      return {
        createFormForRetrieve: {
          ...state.createFormForRetrieve,
          [name]: value,
        },
      };
    });
  },

  // function to fetch documents based on users' search input
  fetchDocumentDataForRetrieve: async () => {
    const { createFormForRetrieve } = documentsStore.getState(); // Access createFormForRetrieve from the store's state

    if (
      createFormForRetrieve.documentType != "" &&
      createFormForRetrieve.subject == "" &&
      createFormForRetrieve.preRef == "" &&
      createFormForRetrieve.refNo == "" &&
      createFormForRetrieve.postRef == "" &&
      createFormForRetrieve.ref == "" &&
      createFormForRetrieve.unit == "" &&
      createFormForRetrieve.securityClass == "" &&
      createFormForRetrieve.documentDate == "" &&
      createFormForRetrieve.archivedDate == "" &&
      createFormForRetrieve.dtg == "" &&
      createFormForRetrieve.controlNo == ""
    ) {
      // set searchInput to the input field that is not empty ( createFormForRetrieve.documentType)
      set({ searchInput: createFormForRetrieve.documentType });

      try {
        // Fetch document data
        const res = await axios.post("http://localhost:3001/documents", {
          searchInput,
        });

        console.log(res);
        // set searchResults
        set({ searchResults: res.data });
        // success message to display after successful creation
      } catch (error) {
        console.error("Error fetching user data:", error);
        set({
          successMessageForRetrieve:
            "Sorry, there's no such documents in the Archive",
        });

        // reset message after a certain duration if needed
        setTimeout(() => set({ successMessageForRetrieve: "" }), 5000); // Clear message after 5 seconds
      }
    }
  },
  //Activities for RetrieveDocument.jsx page ends here
}));

export default documentsStore;
