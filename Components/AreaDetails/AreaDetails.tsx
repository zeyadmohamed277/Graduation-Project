import { Box, styled } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Categories/Categories.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Link, useParams } from "react-router-dom";

const AreaDetails = () => {
  const [meals, setMeals] = useState<any[]>([]);

  const { id } = useParams();
  console.log(id);

  const getAreaDetails = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`
      );
      setMeals(response.data.meals);
      console.log(response.data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAreaDetails();
  }, []);

  const Img2 = styled("img")({
    width: "100%",
  });
  const P = styled("p")({
    fontSize: "25px",
    color: "black",
    textAlign: "center",
    fontFamily: "roboto",
    fontWeight: "bold",
  });
  const Div2 = styled("div")({
    position: "relative",
    overflow: "hidden",
  });
  const Div3 = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Box sx={{ flexGrow: 1, marginTop: "60px", width: "100%" }}>
          <Grid container spacing={2}>
            {meals.map((meal) => (
              <Grid item xs={12} sm={6} md={3} key={meal.idMeal} gap={2}>
                <Link to={`/ReceipeDetails/${meal.idMeal}`}>
                  <Div2 className="colom">
                    <Div3 className="overlay">
                      <P>{meal.strMeal}</P>
                    </Div3>
                    <Img2 src={meal.strMealThumb} alt={meal.strCategory} />
                  </Div2>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default AreaDetails;
