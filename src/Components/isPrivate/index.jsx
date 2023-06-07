import { useContext } from "react";
import { AuthContext } from "../../Context/auth.context";
import { Navigate } from "react-router-dom";

function IsPrivate({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  // If authentication is loading
  if (isLoading) return <p>Loading ... </p>;

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    // if the user is logged in, allow to see the page
    return children;
  }
}

export default IsPrivate;
