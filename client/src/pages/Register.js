import React, { useState,useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // form submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/v1/users/register", values);
      message.success("Registration successful");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/')
    }
  },[navigate])
  return (
    <>
      <div className="register-page">
        {loading && <Spinner />}
        <div className="logreg">
          <Form layout="vertical" onFinish={submitHandler}>
            <h1 style={{ color: "#00b894" }}>Register Please</h1>
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
            <div className="d-flex flex-column">
              <button className="btn mb-2">Register</button>
              <Link to="/login" style={{ color: "#00b894" }}>
                Already Register ? Click here to Login
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
