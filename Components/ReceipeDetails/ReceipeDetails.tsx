import styled from "styled-components";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Receipe.css";
import Swal from 'sweetalert2'

const ReceipeDetails = () => {
  const [btn, setbtn] = useState<boolean>(false);
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState<any[]>([]); 
  const [strMeal, setstrMeal] = useState<string>();
  const [strMealThumb, setstrMealThumb] = useState<string>();
  const [lang, setlang] = useState<string>("en");

  const { id } = useParams();

  const FavRecipes = async () => {
    try {
      const { data } = await axios.post(`http://localhost:3000/Fav/AddTofav`, {
        RecId: id,
        strMeal: strMeal,
        strMealThumb: strMealThumb,
      });
      Swal.fire({
        title: "Good job!",
        text: data.message,
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Recipe already Exists in Favorite List",
        icon: "error",
      });
      console.log(error);
    }
  };

  const getRecipes = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setRecipeData(data.meals);
      setstrMeal(data.meals[0].strMeal);
      setstrMealThumb(data.meals[0].strMealThumb);
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: (error as any).response?.data?.message || "Something went wrong",
        icon: "error",
      });
    }
  }, [id]);

  const getTranslate = useCallback(
    async (language: string) => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/translator/translated-meals/${id}?lang=${language}`
        );
        setRecipeData(
          Array.isArray(data.translatedMeal)
            ? data.translatedMeal
            : [data.translatedMeal]
        );
      } catch (error) {
        console.log(error);
      }
    },
    [id]
  );

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  useEffect(() => {
    if (lang !== "en") {
      getTranslate(lang);
    } else {
      getRecipes();
    }
  }, [lang, getRecipes, getTranslate]);

  const filteredIngredients = useMemo(() => {
    if (!recipeData.length) return [];
    return Object.keys(recipeData[0])
      .filter((key) => key.startsWith("strIngredient") && recipeData[0][key])
      .slice(0, 6)
      .map((key) => recipeData[0][key]);
  }, [recipeData]);

  const filteredMeasures = useMemo(() => {
    if (!recipeData.length) return [];
    return Object.keys(recipeData[0])
      .filter((key) => key.startsWith("strMeasure") && recipeData[0][key])
      .slice(0, 6)
      .map((key) => recipeData[0][key]);
  }, [recipeData]);

  const Logo = React.memo(
    styled("img")({
      width: "100%",
      borderRadius: "50%",
    })
  );

  const YouBtn = React.memo(
    styled("a")({
      backgroundColor: "#F97316",
      color: "white",
      padding: "10px",
      margin: "10px",
      border: "1px solid black",
      borderRadius: "10px",
      cursor: "pointer",
      position: "relative",
    })
  );

  const H3 = styled("h2")({
    textAlign: "center",
    fontSize: "25px",
    fontFamily: "cursive",
    color: "#F97316",
    fontWeight: "bold",
  });
  const H2 = styled("h2")({
    textAlign: "center",
    fontSize: "25px",
    fontFamily: "cursive",
    color: "black",
  });
  const Ul = styled("ul")({
    display: "flex",
  });
  const Li = styled("li")({
    margin: "10px",
    padding: "10px",
  });
  const P = styled("p")({
    fontSize: "18px",
    fontFamily: "roboto",
    fontWeight: "300px",
    color: "black",
  });

  return (
    <div style={{ padding: "20px" }}>
      <Box sx={{ flexGrow: 1, marginTop: "50px", width: "100%" }}>
        <div className="dropdown-container">
          <p className="dropdown-label">Choose Language:</p>

          <select
            className="custom-select"
            value={lang}
            onChange={(e) => setlang(e.target.value)}
          >
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="es">Spanish</option>
          </select>
        </div>
        {recipeData.map((recipe, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs={12} sm={6} md={4}>
              <Logo src={recipe.strMealThumb} alt={recipe.strMeal} />
              <H3>{recipe.strMeal}</H3>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <H3>Instructions</H3>
              <P>{recipe.strInstructions}</P>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <H3>Area: </H3>
                <H2> {recipe.strArea}</H2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <H3>Category:</H3>
                <H2>{recipe.strCategory}</H2>
              </div>
              <H3>Recipes:</H3>
              <Ul>
                {filteredMeasures.map((measure, i) => (
                  <Li key={i}>{measure}</Li>
                ))}
              </Ul>
              <H3>Tags:</H3>
              <Ul>
                {filteredIngredients.map((ingredient, i) => (
                  <Li key={i}>{ingredient}</Li>
                ))}
              </Ul>
              <YouBtn href={recipe.strYoutube}>Tutorial</YouBtn>
              {btn ? (
                <FavoriteOutlinedIcon
                  sx={{
                    fontSize: "40px",
                    position: "relative",
                    left: "15px",
                    top: "10px",
                    cursor: "pointer",
                    color: "red",
                  }}
                  onClick={() => {
                    setbtn(false);
                  }}
                />
              ) : (
                <FavoriteBorderOutlinedIcon
                  sx={{
                    fontSize: "40px",
                    position: "relative",
                    left: "15px",
                    top: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setbtn(true);
                    const token = localStorage.getItem("authToken");
                    if (token) {
                      FavRecipes();
                    } else {
                       Swal.fire({
                                title: "Oops!",
                                text: "Create an account to add to favorite list",
                                icon: "error",
                              });
                      
                      navigate("/auth/login");
                    }
                  }}
                />
              )}
            </Grid>
          </Grid>
        ))}
      </Box>
    </div>
  );
};

export default ReceipeDetails;
