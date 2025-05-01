import { Box, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Categories.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Categories = () => {

    const [category, setcategory] = useState<any[]>([]);

  const getCategory = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      setcategory(response.data.categories); 
      console.log(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
      getCategory();
    }, []);

  const Img2 = styled("img")({
    width: "100%",
  });
  const Div = styled("div")({
    position: "relative",
    overflow: "hidden",
  });
  const P = styled("p")({
    fontSize: "20px",
    color: "black",
    textAlign: "center",
    fontFamily: "roboto",
    fontWeight: "bold",
  });

  return (
    <>
    <div style={{ padding: "20px" }}>
    <Box sx={{ flexGrow: 1 , marginTop:"60px", width:"100%"}}>
        <Grid container spacing={2}>
          {category.map((meal) => (
            <Grid item xs={12} sm={6} md={3} key={meal.idCategory}>
              <Link to={`/CategoriesDetails/${meal.strCategory}`}>
              <Div className="colom">
                <div className="overlay">
                  <P>{meal.strCategory}</P>
                  <P>{meal.strCategoryDescription.split(" ").slice(0, 20).join(" ")}</P>
                </div>
                <Img2 src={meal.strCategoryThumb} alt={meal.strCategory} />
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


export default Categories;
