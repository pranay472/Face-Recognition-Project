import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// eslint-disable-next-line
import AppBar from "@mui/material/AppBar";
// eslint-disable-next-line
import Toolbar from "@mui/material/Toolbar";
// eslint-disable-next-line
import Typography from "@mui/material/Typography";
// eslint-disable-next-line
import IconButton from "@mui/material/IconButton";
// eslint-disable-next-line
import MenuIcon from "@mui/icons-material/Menu";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "", //
    username: "", // sanjuth
    password: "", // 1234
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const signup = () => {
    const { name, username, password } = user;
    if (name && username && password) {
      // console.log(username);
      // axios.post("http://43.206.117.90:5000/signup", user)
      axios
        .post("http://localhost:3001/signup", user)
        .then((res) => {
          alert(res.data.message);
          navigate("/login");
        })
        .catch((err) => console.log("req error"));
    } else {
      alert("invlid input");
    }
  };

  return (
    <body>
      <div className="concard">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <div className="signup">
            {console.log("User", user)}
            <h1>User Registration</h1>
            {/* <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>  */}
            <TextField
              variant="outlined"
              color="primary"
              type="text"
              label="Enter Name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />{" "}
            <br />
            <br />
            {/* <input type="text" name="username" value={user.username} placeholder="Your username" onChange={ handleChange }></input> <br/><br/> */}
            <TextField
              variant="outlined"
              color="primary"
              type="text"
              label="Enter Username"
              name="username"
              value={user.username}
              onChange={handleChange}
            />{" "}
            <br />
            <br />
            {/* <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input> <br/><br/> */}
            <TextField
              variant="outlined"
              color="primary"
              type="password"
              label="Enter Password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />{" "}
            <br />
            <br />
            <Button variant="contained" color="secondary" onClick={signup}>
              Sign Up
            </Button>
            &ensp;
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </div>
        </Box>
      </div>
    </body>
  );
};

export default Register;
