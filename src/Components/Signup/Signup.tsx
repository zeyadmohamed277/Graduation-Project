import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Swal from "sweetalert2";

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

      const { token, message } = response.data;

      if (token) {
        localStorage.setItem("authToken", token);

        Swal.fire({
          title: "Good job!",
          text: message,
          icon: "success",
        });
        navigate("/home");
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Token not received. Signup failed.",
          icon: "error"
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        Swal.fire({
          title: "Oops!",
          text: error.response.data.message,
          icon: "error"
        });
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      <div
        style={{ padding: "20px", display: "flex", justifyContent: "center" }}
      >
        <div style={{ marginTop: "70px" }}>
          <form className="form-container" onSubmit={signup}>
            <h2
              style={{
                textAlign: "center",
                fontFamily: "roboto",
                fontWeight: "bold",
                fontSize: "32px",
                color: "#F97316",
              }}
            >
              Create an Account
            </h2>
            <h2
              style={{
                textAlign: "center",
                fontFamily: "roboto",
                fontWeight: "bold",
                fontSize: "32px",
                color: "#F97316",
              }}
            >
              Register Now!
            </h2>
            <p>
              Already have an account?{" "}
              <a
                className="login-link"
                onClick={() => {
                  navigate("/auth/login");
                }}
              >
                Log in here
              </a>
            </p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                <div className="input-container" style={{ flex: 1 }}>
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
                <div className="input-container" style={{ flex: 1 }}>
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
              </div>

              <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                <div className="input-container" style={{ flex: 1 }}>
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
                <div className="input-container" style={{ flex: 1 }}>
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
              </div>

              <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                <div className="input-container" style={{ flex: 1 }}>
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
                <div className="input-container" style={{ flex: 1 }}>
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
              </div>
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
