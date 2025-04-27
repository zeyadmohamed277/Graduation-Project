import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

interface SignupRequest {
  username: string;
  email: string;
  Password: string;
  Phone: string;
  Age: number;
  CPassword: string;
}

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<SignupRequest>({
    username: "",
    email: "",
    Password: "",
    Phone: "",
    Age: 0,
    CPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const signup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users/signup",
        formData
      );
      navigate("/home");
      alert(response.data.message);
      console.log("Signup successful:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message);
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };
  return (
    <>
      <div style={{ padding: "20px" , marginTop: "70px",display: "flex", justifyContent: "center"}}>
        <div style={{ width: "900px", marginTop: "50px" }}>
          <form className="form-container" onSubmit={signup}>
            <h2>Welcome,</h2>
            <h2>Register Now</h2>
            <p>
              Already have an account?{" "}
              <a
                className="login-link"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log in here
              </a>
            </p>

            <div className="input-container">
              <input
                type="string"
                id="username"
                name="username"
                className="input-field"
                placeholder=" "
                required
                value={formData.username}
                onChange={handleChange}
              />
              <label htmlFor="username" className="input-label">
                Username
              </label>
            </div>

            <div className="input-container">
              <input
                type="email"
                id="email"
                name="email"
                className="input-field"
                placeholder=" "
                required
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="email" className="input-label">
                Email
              </label>
            </div>

            <div className="input-container">
              <input
                type="tel"
                id="phone"
                className="input-field"
                name="Phone"
                placeholder=" "
                required
                value={formData.Phone}
                onChange={handleChange}
              />
              <label htmlFor="phone" className="input-label">
                Phone
              </label>
            </div>

            <div className="input-container">
              <input
                type="number"
                id="age"
                className="input-field"
                name="Age"
                placeholder=" "
                required
                value={formData.Age}
                onChange={handleChange}
              />
              <label htmlFor="age" className="input-label">
                Age
              </label>
            </div>

            <div className="input-container">
              <input
                type="password"
                id="password"
                className="input-field"
                name="Password"
                placeholder=" "
                required
                value={formData.Password}
                onChange={handleChange}
              />
              <label htmlFor="password" className="input-label">
                Password
              </label>
            </div>

            <div className="input-container">
              <input
                type="password"
                id="cpassword"
                className="input-field"
                name="CPassword"
                placeholder=" "
                required
                value={formData.CPassword}
                onChange={handleChange}
              />
              <label htmlFor="cpassword" className="input-label">
                Confirm Password
              </label>
            </div>

            <button className="submit-btn" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
