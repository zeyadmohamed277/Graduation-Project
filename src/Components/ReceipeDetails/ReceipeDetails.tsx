import Grid from "@mui/material/Grid";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import  { useEffect, useState, useCallback } from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Receipe.css";
import Swal from "sweetalert2";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Paper,
} from "@mui/material";

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
        title: "Done!",
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


  const getYoutubeEmbedUrl = (url: any) => {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  };
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Box sx={{ px: 2, py: 5, mx: "auto" }}>
          {recipeData.map((recipe, index) => (
            <div key={index}>
              <Paper key={index} elevation={0} sx={{ p: 3, mb: 6 }}>
                <Grid container justifyContent="end" alignItems="center">
                  <FormControl
                    fullWidth
                    sx={{ maxWidth: 300, display: "flex", }}
                  >
                    <InputLabel id="language-select-label">
                      Choose Language
                    </InputLabel>
                    <Select
                      labelId="language-select-label"
                      id="lang"
                      value={lang}
                      label="Choose Language"
                      onChange={(e) => setlang(e.target.value)}
                      
                    >
                      <MenuItem value="en">English</MenuItem>
                      <MenuItem value="ar">Arabic</MenuItem>
                      <MenuItem value="fr">French</MenuItem>
                      <MenuItem value="de">German</MenuItem>
                      <MenuItem value="es">Spanish</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        aspectRatio: "16/9",
                        overflow: "hidden",
                        borderRadius: "12px",
                      }}
                    >
                      <img
                        src={recipe.strMealThumb}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="center"
                  >
                    <Typography variant="h3" gutterBottom>
                      {recipe.strMeal}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      <strong>Area:</strong> {recipe.strArea}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      <strong>Category:</strong> {recipe.strCategory}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ mb: 2, display: "flex", gap: "10px" }}
                    >
                      <strong>Tags:</strong>{" "}
                      <div style={{ display: "flex", gap: "10px" }}>
                        {[1, 2, 3, 4, 5].map((i) => {
                          const ingredient = recipe[`strIngredient${i}`];
                          return ingredient ? (
                            <span
                              style={{
                                backgroundColor: "#F4F4F5",
                                fontSize: "14px",
                                padding: "7px",
                                borderRadius: "30%",
                              }}
                              key={i}
                            >
                              {ingredient}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </Typography>

                    <Button
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #B0B0B0",
                      }}
                      onClick={() => {
                        if (btn) {
                          setbtn(false);
                        } else {
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
                            navigate("/auth/signup");
                          }
                        }
                      }}
                      fullWidth
                      sx={{ mb: 2 }}
                    >
                      {btn ? (
                        <FavoriteOutlinedIcon fontSize="large" color="error" />
                      ) : (
                        <FavoriteBorderOutlinedIcon
                          fontSize="large"
                          color="error"
                        />
                      )}
                    </Button>
                  </Grid>
                </Grid>

                <Box sx={{ my: 5, display: "flex", gap: "20px" }}>
                  <Box
                    sx={{
                      mt: 4,
                      flex: 0.5,
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "22px",
                      border: "1px solid rgb(153, 146, 146)",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography variant="h5" gutterBottom>
                      Recipes
                    </Typography>
                    <ul style={{ textAlign: "start", listStyleType: "circle" }}>
                      {[1, 2, 3, 4, 5].map((i) => {
                        const measure = recipe[`strMeasure${i}`];
                        const ingredient = recipe[`strIngredient${i}`];
                        return ingredient ? (
                          <li key={i}>
                            {measure} {ingredient}
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </Box>

                  <Box
                    sx={{
                      mt: 4,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h4" gutterBottom>
                      Instructions
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ textAlign: "start" }}
                      gutterBottom
                    >
                      {recipe.strInstructions}
                    </Typography>
                  </Box>
                </Box>

                <iframe
                  src={getYoutubeEmbedUrl(recipe.strYoutube)}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "500px" }}
                />
              </Paper>
            </div>
          ))}
        </Box>
      </div>
    </>
  );
};

export default ReceipeDetails;
