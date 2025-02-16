import AuthContext from "./AuthContext";
import { useState } from "react";

const AuthContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});
  return (
    <AuthContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
