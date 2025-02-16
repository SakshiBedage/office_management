import axios from "axios";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

const AxiosInterceptor = ({ children }) => {
  const navigate = useNavigate();
  const { setUserDetails } = useContext(AuthContext);
  useEffect(() => {
    const resInterceptor = (response) => {
      return response;
    };

    const errInterceptor = (error) => {
      if (error.response.status === 400) {
        // localStorage.removeItem("userSession");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("userId");
        setUserDetails({ isAuthenticated: false, token: null });
        navigate("/");
      }

      return Promise.reject(error);
    };

    const interceptor = axiosInstance.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => axiosInstance.interceptors.response.eject(interceptor);
  }, [navigate]);

  return children;
};

export default axiosInstance;
export { AxiosInterceptor };
