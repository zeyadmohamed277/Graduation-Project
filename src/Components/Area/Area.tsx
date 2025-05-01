import { Box, styled } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeIcon from "@mui/icons-material/Home";
import "./Area.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Area = () => {
  const [meals, setMeals] = useState<any[]>([]);

  const getArea = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
      );
      setMeals(response.data.meals);
      console.log(response.data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArea();
  }, []);

  const H1 = styled("h3")({
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "roboto",
    color: "#F97316",
  });

  const Div = styled("div")({
    textAlign: "center",
    cursor: "pointer",
    color: "black",
  });

  return (
    <>
      <div style={{ padding: "20px" }}>
        <Box sx={{ flexGrow: 1, marginTop: "60px", width: "100%" }}>
          <Grid container spacing={2}>
            {meals.map((meal: any, index: number) => (
              <Grid item xs={12} sm={6} md={3}>
                <Link to={`/AreaDetails/${meal.strArea}`}>
                  <Div key={index}>
                    <HomeIcon sx={{ fontSize: "45px", color: "black" }} />
                    <H1>{meal.strArea}</H1>
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

export default Area;
