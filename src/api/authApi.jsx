import axios from "axios";
import Swal from "sweetalert2";

export const doLogin = async (username, password) => {
  const response  = await axios.post("http://localhost:3000/api/auth/login", {
      username: username,
      password: password,
    });

  return response.data;
};

export const doRegister = async (username, phoneNumber, password, email) => {
  await authApi
    .post("/auth/register", {
      userName: username,
      phoneNumber: phoneNumber,
      password: password,
      email: email,
    })
    .then((res) => {
      Swal.fire(res.data.message);
    })
    .catch((error) => {
      Swal.fire(error.message);
    });
};