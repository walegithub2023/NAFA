import { create } from "zustand";
import axios from "axios";

const usersStore = create((set) => ({
  //Activities for Users.jsx page starts here
  //set default state for users
  users: null,

  //function to fetch users
  fetchUsers: async () => {
    //Fetch users
    const res = await axios.get("http://localhost:3001/users");

    //Set users state to fetch users
    set({
      users: res.data.users,
    });
  },
  //Activities for Users.jsx page ends here

  //Activities to delete user  starts here

  // function to delete users
  handleDelete: async (_id) => {
    // Implement delete functionality, e.g., send delete request to server
    // Delete the user
    const res = await axios.delete(`http://localhost:3001/users/${_id}`);
    console.log(res);

    // update state
    set((state) => ({
      users: state.users.filter((user) => user._id !== _id),
    }));
  },
  //Activities to delete user ends  here

  //Activity for ViewUser.jsx starts here

  //Get user data state
  userData: {
    svcNo: "",
    initials: "",
    surname: "",
    appt: "",
    rank: "",
    password: "",
    category: "",
  },

  // function to fetch single user data for view
  fetchUserData: async (id) => {
    try {
      // Fetch user data
      const res = await axios.get(`http://localhost:3001/users/${id}`);
      console.log(res);

      // Access nested user object
      const user = res.data.user;

      // Set default values to userData
      const newUserData = {
        svcNo: user.svcNo,
        initials: user.initials,
        surname: user.surname,
        appt: user.appt,
        rank: user.rank,
        password: user.password,
        category: user.category,
      };

      // set user data
      set({ userData: newUserData });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  },
  //Activities for ViewUser.jsx page ends here

  //Activity for NewUser.jsx page starts here
  //state for success message after successful creation of a new user
  successMessage1: "",

  //Get user data state
  createForm1: {
    svcNo: "",
    initials: "",
    surname: "",
    appt: "",
    rank: "",
    password: "",
    category: "",
  },

  // Function to handle the changes in svcNo, initials, appt, etc form inputs
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

  // create user function
  createUser: async (e) => {
    try {
      e.preventDefault();

      const { createForm1 } = usersStore.getState();
      // create the user
      const res = await axios.post("http://localhost:3001/users", createForm1);

      // success message to display after successful creation
      set({ successMessage1: "Congratulations! user created successfully!" });

      // reset message after a certain duration if needed
      setTimeout(() => set({ successMessage1: "" }), 5000); // Clear message after 5 seconds

      set({
        createForm1: {
          svcNo: "",
          initials: "",
          surname: "",
          appt: "",
          rank: "",
          password: "",
          category: "",
        },
      });
    } catch (err) {
      console.log(err);
      set({ successMessage1: "User Already Exists" });
      // reset message after a certain duration if needed
      setTimeout(() => set({ successMessage1: "" }), 5000); // Clear message after 5 seconds
    }
  },
  //Activities for NewUser.jsx page ends here

  //Activities for EditUser.jsx starts here

  //Get user data state
  userData2: {
    svcNo: "",
    initials: "",
    surname: "",
    appt: "",
    rank: "",
    password: "",
    category: "",
  },

  // function to fetch single user data for Edit
  fetchUserData2: async (id2) => {
    try {
      // Fetch user data
      const res2 = await axios.get(`http://localhost:3001/users/${id2}`);
      console.log(res2);

      // Access nested user object
      const user2 = res2.data.user;

      // Set default values to userData
      const newUserData2 = {
        svcNo: user2.svcNo,
        initials: user2.initials,
        surname: user2.surname,
        appt: user2.appt,
        rank: user2.rank,
        password: user2.password,
        category: user2.category,
      };

      // set user data
      set({ userData2: newUserData2 });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  },

  //state for success message after successful update of a user
  successMessage2: "",

  //Get user data state
  updateForm: {
    initials: "",
    surname: "",
    appt: "",
    rank: "",
    password: "",
    category: "",
  },

  // Function to handle the changes in svcNo, initials, appt, etc form inputs
  updateCreateFormField2: (e) => {
    const { name, value } = e.target;

    // Access updateForm from the current state
    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },

  // update user function
  updateUser: async (e, id2) => {
    try {
      e.preventDefault();

      const { updateForm } = usersStore.getState();
      // create the user
      const res3 = await axios.put(
        `http://localhost:3001/users/${id2}`,
        updateForm
      );

      // success message to display after successful update
      set({ successMessage2: "Congratulations! user updated successfully!" });

      // reset message after a certain duration if needed
      setTimeout(() => set({ successMessage2: "" }), 5000); // Clear message after 5 seconds

      set({
        updateForm: {
          svcNo: "",
          initials: "",
          surname: "",
          appt: "",
          rank: "",
          password: "",
          category: "",
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
  //Activities for EditUser.jsx page ends here
}));

export default usersStore;
