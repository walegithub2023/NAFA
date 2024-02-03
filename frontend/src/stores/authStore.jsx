import { create } from "zustand";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const authStore = create((set) => ({
  //state for error message if login fails
  message1: "",

  //state to track login session
  loggedIn: null,

  //State for loginform
  loginForm: {
    svcNo: "",
    password: "",
  },

  // Function to handle the changes in svcNo and password form inputs
  updateLoginFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },

  //function to login user
  loginUser: async () => {
    try {
      //get loginForm state
      const { loginForm } = authStore.getState();

      //post login credentials to the server
      const res = await axios.post("http://localhost:3001/login", loginForm, {
        withCredentials: true,
      });
      console.log(res);

      set({ loggedIn: true });
    } catch (error) {
      // check for error
      if (error.response && error.response.status === 401) {
        set({ message1: "Invalid Login Credentials" });

        // reset message after a certain duration if needed
        setTimeout(() => set({ message1: "" }), 5000); // Clear message after 5 seconds
      } else {
        console.error(error);
      }
    }
  },

  //check auth function
  checkAuth: async () => {
    try {
      await axios.get("http://localhost:3001/check-auth", {
        withCredentials: true,
      });
      set({ loggedIn: true });
    } catch (err) {
      set({ loggedIn: false });
    }
  },

  //logout function
  logoutUser: async () => {
    try {
      const res = await axios.get("http://localhost:3001/logout", {
        withCredentials: true,
      });

      //set loggedIn to false
      set({ loggedIn: false });
    } catch (err) {
      console.log(err);
    }
  },
}));

export default authStore;
