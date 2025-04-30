import { Box, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./Ingredients.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Ingredients = () => {
  const [Ingredients, setIngredients] = useState<any[]>([]);

  const getIngredients = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      setIngredients(response.data.categories);
      console.log(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getIngredients();
  }, []);
  const H1 = styled("h3")({
    textAlign: "center",
    fontSize: "25px",
    fontFamily: "bold",
    color: "#F97316",
  });
  const P1 = styled("p")({
    textAlign: "center",
    fontSize: "20px",
    color: "black",
  });
  const Div = styled("div")({
    textAlign: "center",
    cursor: "pointer",
  });
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            textAlign: "center",
            marginTop: "65px",
          }}
        >
          <Grid container spacing={1}>
            {Ingredients.map((ingredient) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={ingredient.idCategory}
                gap={2}
              >
                <Link
                  to={`/CategoriesDetails/${ingredient.strCategory}`}
                  className="colom"
                >
                  <Div>
                    <MenuBookIcon sx={{ fontSize: "50px", color: "black" }} />
                    <H1>{ingredient.strCategory}</H1>

                    <P1>
                      {ingredient.strCategoryDescription
                        .split(" ")
                        .slice(0, 30)
                        .join(" ")}
                    </P1>
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

export default Ingredients;
