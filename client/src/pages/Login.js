import React, { useState,useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //form submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      setLoading(false);
      message.success("login successful");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };
  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="register-page">
        <div className="logreg">
          <Form layout="vertical" onFinish={submitHandler}>
            <h1 style={{ color: "#00b894" }}>Please Login 😊</h1>
        {loading && <Spinner />}
            <Form.Item label="Email" name="email">
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
            <div className="d-flex flex-column justify-content-between">
              <button className="btn mb-2">Login</button>
              <Link to="/register" style={{ color: "#00b894" }}>
                Not a user ? Click here to Register
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
