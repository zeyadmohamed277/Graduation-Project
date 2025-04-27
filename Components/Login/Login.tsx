import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

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
      navigate("/home");
      alert(response.data.message);
      console.log("login successful:", response.data);
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
        <form onSubmit={Login}>
          <div className="login-container">
            <h2>Welcome</h2>
            <h2>Login</h2>
            <p>
              Do you have an account{" "}
              <a
                className="login-link"
                onClick={() => {
                  navigate("/signup");
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
