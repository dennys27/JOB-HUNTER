import { AdminRequest } from "../../Constants/Constants";



// Admin Login
const login = async (userData) => {
  const response = await AdminRequest({
    method: "POST",
    url: "/login",
    data: userData,
  });
    
    console.log(response);

  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }

  return response.data;
};

// Admin Logout
const logout = () => {
  localStorage.removeItem("admin");
};

const adminAuthService = {
 
  logout,
  login,
};

export default adminAuthService;
