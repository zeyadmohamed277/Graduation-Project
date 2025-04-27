import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Grid from "@mui/material/Grid";
import { useState } from "react";

import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Search = () => {
  const [data, setdata] = useState<any[]>([]);

  async function searchName(mealName: string) {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
      );
      setdata(response.data.meals);
    } catch (error) {
      console.log(error);
    }
  }

  async function searchLetter() {
    try {
      const inputElement = document.querySelector(
        "#search-letter"
      ) as HTMLInputElement | null;
      if (inputElement && inputElement.value.length > 0) {
        const inputValue = inputElement.value;
        const firstLetter = inputValue.charAt(0);

        console.log("First letter:", firstLetter);

        let data = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`
        );
        let dataApi = await data.json();
        setdata(dataApi.meals);
        return dataApi.meals;
      }
    } catch (error) {
      console.error(error);
    }
  }

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
    fontSize: "35px",
    color: "black",
    textAlign: "center",
    fontFamily: "roboto",
    fontWeight: "bold",
  });
  const Img2 = styled("img")({
    width: "100%",
  });

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "roboto",
            marginTop: "60px",
            color: "black",
          }}
        >
          Search Your Meal
        </h1>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "roboto",
            color: "#F97316",
            fontSize: "30px",
          }}
        >
          Find Your Perfect Recipe
        </h2>
        <Box
          sx={{
            flexGrow: 1,
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <div>
            <input
              style={{
                backgroundColor: "white",
                color: "black",
                width: "550px",
                padding: "10px",
                borderRadius: "15px",
              }}
              type="text"
              id="search-name"
              placeholder="Search by Name"
              onKeyUp={(e) => {
                searchName((e.target as HTMLInputElement).value);
              }}
            />
          </div>

          <div>
            <input
              style={{
                backgroundColor: "white",
                color: "black",
                width: "550px",
                padding: "10px",
                borderRadius: "15px",
              }}
              type="text"
              id="search-letter"
              placeholder="Search by first letter"
              onKeyUp={() => searchLetter()}
            />
          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          <Grid container spacing={1}>
            {data &&
              data.length > 0 &&
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
export default Search;
