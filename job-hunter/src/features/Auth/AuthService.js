import axios from "axios";
import { userRequest } from "../../Constants/Constants";

const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  const response = await userRequest({
    method: "POST",
    url: "/user/register",
    data: userData,
  });
  if (response.status == 201) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
    const response = await userRequest({
        'method': 'POST',
        'url': '/user',
        "data":userData
    });

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// // Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
