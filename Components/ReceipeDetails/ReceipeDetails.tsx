import styled from "styled-components";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useEffect, useState } from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReceipeDetails = () => {
  const [btn, setbtn] = useState<boolean>(false);
  const [strMeal, setstrMeal] = useState<string>();
  const [strMealThumb, setstrMealThumb] = useState<string>();
  const [recdetalis, setrecdetalis] = useState<any[]>([]);
  const [recFav, setrecFav] = useState<any[]>([]);
  const [translate, settranslate] = useState<any[]>([]);
  const [lang, setlang] = useState<string>("en");

  const { id } = useParams();

  const FavRecipes = async () => {
    try {
      const { data } = await axios.post(`http://localhost:3000/Fav/AddTofav`, {
        RecId: id,
        strMeal: strMeal,
        strMealThumb: strMealThumb,
      });
      setrecFav(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  const getRecipes = async () => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setrecdetalis(data.meals);
      setstrMeal(data.meals[0].strMeal);
      setstrMealThumb(data.meals[0].strMealThumb);
    } catch (error) {
      console.log(error);
    }
  };

  const getTranslate = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/translator/translated-meals/${id}?lang=${lang}`
      );
      console.log("Translate API Response:", data);
      settranslate(
        Array.isArray(data.translatedMeal)
          ? data.translatedMeal
          : [data.translatedMeal]
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(() => {
      getTranslate();
  }, [lang]);

  const Logo = styled("img")({
    width: "100%",
    borderRadius: "50%",
  });
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

  const YouBtn = styled("a")({
    backgroundColor: "#F97316",
    color: "white",
    padding: "10px",
    margin: "10px",
    border: "1px solid black",
    borderRadius: "10px",
    cursor: "pointer",
    position: "relative",
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
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <p style={{ fontSize: "20px", fontFamily: "roboto",color:"#F97316" }}>
            Choose Language:
          </p>
          <select
            style={{
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid",
              fontSize: "15px",
            }}
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
        {lang? translate.map((recipe, index) => (
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
                    {Object.keys(recipe)
                      .filter((key) => key.startsWith("strMeasure") && recipe[key]).slice(0, 6)
                      .map((key, i) => (
                      <Li key={i}>{recipe[key]}</Li>
                      ))}
                    </Ul>
                    <H3>Tags:</H3>
                    <Ul>
                    {Object.keys(recipe)
                      .filter((key) => key.startsWith("strIngredient") && recipe[key]).slice(0, 6)
                      .map((key, i) => (
                      <Li key={i}>{recipe[key]}</Li>
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
                        FavRecipes();
                      }}
                    />
                  )}
                </Grid>
              </Grid>
            ))
          : recdetalis.map((recipe, index) => (
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
                    {Object.keys(recipe)
                      .filter((key) => key.startsWith("strMeasure") && recipe[key]).slice(0, 5)
                      .map((key, i) => (
                      <Li key={i}>{recipe[key]}</Li>
                      ))}
                    </Ul>
                    <H3>Tags:</H3>
                    <Ul>
                    {Object.keys(recipe)
                      .filter((key) => key.startsWith("strIngredient") && recipe[key]).slice(0, 5)
                      .map((key, i) => (
                      <Li key={i}>{recipe[key]}</Li>
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
                        FavRecipes();
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
