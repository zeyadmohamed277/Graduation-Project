import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Area from "./Components/Area/Area";
import Search from "./Components/Search/Search";
import Categories from "./Components/Categories/Categories";
import ContactUs from "./Components/ContactUs/ContactUs";
import Ingredients from "./Components/Ingredients/Ingredients";
import Favorites from "./Components/Favorites/Favorites";
import ReceipeDetails from "./Components/ReceipeDetails/ReceipeDetails";
import SignUp from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import CategoriesDetails from "./Components/CategoriesDetails/CategoriesDetails";
import AreaDetails from "./Components/AreaDetails/AreaDetails";
import Chatbot from "./Components/Chatbot/Chatbot";
import Receipe from "./Components/Receips/Receips";
import Fridge from "./Components/Fridge/Fridge";
import Footer from "./Components/Footer/Footer";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <SignUp /> },
        { path: "/home", element: <Home /> },
        { path: "/Search", element: <Search /> },
        { path: "/Categories", element: <Categories /> },
        { path: "/Area", element: <Area /> },
        { path: "/ContactUs", element: <ContactUs /> },
        { path: "/Ingredients", element: <Ingredients /> },
        { path: "/Favorites", element: <Favorites /> },
        { path: "/ReceipeDetails/:id", element: <ReceipeDetails /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/login", element: <Login /> },
        { path: "/CategoriesDetails/:id", element: <CategoriesDetails /> },
        { path: "/AreaDetails/:id", element: <AreaDetails /> },
        { path: "/Favorite/:id", element: <Favorites /> },
        { path: "/chatbot", element: <Chatbot /> },
        { path: "/receipe", element: <Receipe /> },
        { path: "/fridge", element: <Fridge /> },
        { path: "/footer", element: <Footer /> },
      ],
    },

  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
