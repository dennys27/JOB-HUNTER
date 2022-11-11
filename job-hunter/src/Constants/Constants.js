import axios from "axios";

export const userUrl = "http://localhost:5000";

export const adminUrl = "http://localhost:5000/admin/";

const TOKEN = JSON.parse(localStorage.getItem("user")).token;


const ADMINTOKEN = localStorage.getItem("admintoken");

export const userRequest = axios.create({
  baseURL: userUrl,
  header: {
    token: `Bearer ${TOKEN}`,
  },
});



export const AdminRequest = axios.create({
  baseURL: adminUrl,
  headers: { admintoken: `Bearer ${ADMINTOKEN}` },
});
