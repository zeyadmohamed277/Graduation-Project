import { Box, styled } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Favorites.css";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favdata, setFavdata] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [recipeIds, setRecipeIds] = useState<string[]>([]);

  const getFavdata = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/Fav/GetFav");
      const { recipes, message } = data;
      setFavdata(recipes);
      console.log(recipes);
    } catch (error) {
      console.log("Error fetching meal details:", error);
    }
  };

  const getdata = async (ids: string[]) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${ids}`
      );
      setData(response.data);
    } catch (error) {
      console.log("Error fetching meal details:", error);
    }
  };

  useEffect(() => {
    getFavdata();
  }, []);

  useEffect(() => {
    getdata(recipeIds);
  }, [recipeIds]);

  const Img2 = styled("img")({
    width: "100%",
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

  const P = styled("p")({
    fontSize: "40px",
    color: "black",
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
  });

  return (
    <div style={{ padding: "20px" }}>
      {favdata.length === 0 ? (
        <P>No favorites found. Add some to see them here!</P>
      ) : (
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            textAlign: "center",
            marginTop: "65px",
          }}
        >
          <Grid container spacing={1}>
            {favdata.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.RecId}>
                <Link to={`/ReceipeDetails/${item?.RecId}`}>
                  <Div2 className="colom">
                    <Div3 className="overlay">
                      <P>{item.strMeal}</P>
                    </Div3>
                    <Img2 src={item.strMealThumb} alt={item.strCategory} />
                  </Div2>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default Favorites;
