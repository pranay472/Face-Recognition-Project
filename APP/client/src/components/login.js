import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
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
const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:3001/login", user)
      // axios.post("http://43.206.117.90:5000/login", user)
      .then((res) => {
        // alert(res.data.message)
        setLoginUser(res.data.user);
        console.log("send");
        navigate("/");
      });
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
          <div className="login">
            <h1>User Login</h1>
            {/* <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username"></input><br/><br/> */}
            <TextField
              variant="outlined"
              color="primary"
              type="text"
              label="Enter Username"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
            <br />
            <br />
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
            {/* <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Password" ></input> <br/><br/> */}
            <Button
              className="normal"
              variant="contained"
              color="secondary"
              onClick={login}
            >
              Login
            </Button>
            &ensp;
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
          </div>
        </Box>
      </div>
    </body>
  );
};

export default Login;
