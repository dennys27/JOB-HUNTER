import axios from "axios";

export const userUrl = "http://localhost:5000";

export const adminUrl = "http://localhost:5000/admin/";

const TOKEN = JSON.parse(localStorage?.getItem("user"))?.token;


const ADMINTOKEN = localStorage.getItem("admintoken");

export const userRequest =  axios.create({
  baseURL: userUrl,
  header: {
    "Content-Type": "application/json",
  },
});

userRequest.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers["token"] = `Bearer ${JSON.parse(localStorage.getItem("user"))?.token}`;
  config.headers["Access-Control-Allow-Origin"] = "*"
  config.headers[ 'Content-Type'] = 'application/json'
  return config;
});





export const AdminRequest = axios.create({
  baseURL: adminUrl,
  headers: { admintoken: `Bearer ${ADMINTOKEN}` },
});

 AdminRequest.interceptors.request.use(function (config) {
   // Do something before request is sent
   let token = localStorage.getItem("token");
   config.headers["token"] = `Bearer ${
     JSON.parse(localStorage.getItem("admintoken"))?.token
   }`;
   return config;
 });
