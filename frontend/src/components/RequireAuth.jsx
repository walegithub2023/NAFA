import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import authStore from "../stores/authStore";

export default function RequireAuth(props) {
  //access authStore
  const store = authStore();

  useEffect(() => {
    if (store.loggedIn === null) {
      store.checkAuth();
    }
  }, []);

  if (store.loggedIn === null) {
    return <div>loading</div>;
  }
  if (store.loggedIn === false) {
    return <Navigate to="/login" />;
  } else {
    return <div>{props.children}</div>;
  }
}
