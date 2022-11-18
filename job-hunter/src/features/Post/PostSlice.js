import { userRequest } from "../../Constants/Constants";

// Register user
const LikePost = async (userData) => {
  const response = await userRequest({
    method: "POST",
    url: "/user/register",
    data: userData,
  });
  if (response.status === 201) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};
