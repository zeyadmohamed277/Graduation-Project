import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import "./Home.css";
import { Link } from "react-router-dom";

const Receipe = () => {
  const [data, setdata] = useState<any[]>([]);

  const getdata = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );
      setdata(response.data.meals);
      console.log(response.data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

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
    fontFamily: "roboto",
    fontWeight: "bold",
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
            {data &&
              data.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.idMeal} gap={2}>
                  <Link to={`/ReceipeDetails/${item?.idMeal}`}>
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
      </div>
    </>
  );
};
export default Receipe;
