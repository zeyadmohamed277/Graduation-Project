import { Box, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./Ingredients.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const IngDetails = () => {
  const [Ingdetails, setIngDetails] = useState<any[]>([]);

  const { id } = useParams();
  console.log(id);

  const getIngDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`
      );
      setIngDetails(data.meals || []);
      console.log(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getIngDetails();
  }, []);

  const P = styled("p")({
    fontSize: "20px",
    color: "black",
    textAlign: "center",
    fontFamily: "roboto",
    fontWeight: "bold",
  });
  const Div = styled("div")({
    textAlign: "center",
    cursor: "pointer",
  });
  const Img2 = styled("img")({
    width: "100%",
  });
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Box sx={{ flexGrow: 1, marginTop: "60px", width: "100%" }}>
          <Grid container spacing={2}>
            {Ingdetails.map((meal) => (
              <Grid item xs={12} sm={6} md={3} key={meal.idMeal}>
                <Link to={`/ReceipeDetails/${meal.idMeal}`}>
                  <Div className="colom">
                    <div className="overlay">
                      <P>{meal.strMeal}</P>
                    </div>
                    <Img2 src={meal.strMealThumb} alt={meal.strMeal} />
                  </Div>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default IngDetails;
