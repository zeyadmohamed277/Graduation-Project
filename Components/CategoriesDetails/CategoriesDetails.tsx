import { Box, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Categories.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CategoriesDetails = () => {
  const [details, setCategoriesDetails] = useState<any[]>([]);

  const { id } = useParams();

  const getCategoryDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
      );
      setCategoriesDetails(data.meals || []);
      console.log(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoryDetails();
  }, []);

  const Img2 = styled("img")({
    width: "100%",
  });
  const Div = styled("div")({
    position: "relative",
    overflow: "hidden",
  });
  const P = styled("p")({
    fontSize: "30px",
    color: "black",
    textAlign: "center",
    fontFamily: "roboto",
    fontWeight: "bold",
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
            {details.map((meal) => (
              <Grid item xs={12} sm={6} md={3} key={meal.idMeal}>
                <Link to={`/ReceipeDetails/${meal.idMeal}`}>
                  <Div className="colom">
                    <Div3 className="overlay">
                      <P>{meal.strMeal}</P>
                    </Div3>
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

export default CategoriesDetails;
