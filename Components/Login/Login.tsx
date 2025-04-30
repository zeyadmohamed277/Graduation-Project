import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Swal from "sweetalert2";
interface LoginRequest {
  email: string;
  Password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginRequest>({
    email: "",
    Password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const Login = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
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
          text: message,
          icon: "error",
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        Swal.fire({
          title: "Oops!",
          text: error.response.data.message,
          icon: "error",
        });
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      <div
        style={{
          padding: "20px",
          marginTop: "70px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form onSubmit={Login}>
          <div className="login-container">
            <h2
              style={{
                textAlign: "center",
                fontFamily: "roboto",
                fontWeight: "bold",
                fontSize: "32px",
                color: "#F97316",
              }}
            >
              Welcome Back!
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
              login
            </h2>
            <p>
              Do you have an account ? {" "}
              <a
                className="login-link"
                onClick={() => {
                  navigate("/auth/signup");
                }}
              >
                Register here
              </a>
            </p>

            <div className="input-container">
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder=" "
                required
                name="email"
                onChange={handleChange}
              />
              <label htmlFor="email" className="input-label">
                Email
              </label>
            </div>

            <div className="input-container">
              <input
                type="password"
                id="password"
                className="input-field"
                placeholder=" "
                required
                name="Password"
                onChange={handleChange}
              />
              <label htmlFor="password" className="input-label">
                Password
              </label>
            </div>

            <button className="login-btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
