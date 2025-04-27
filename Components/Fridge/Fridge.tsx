import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Fridge = () => {
  const [chatdata, setchatdata] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const getresdata = async (inputValue: string) => {
    try {
      const response = await axios.post("http://localhost:3000/fridge/fridge", {
        ingredients: inputValue,
      });

      console.log(response.data);
      setchatdata(response.data.meals);
    } catch (error) {
      console.log("Error fetching meal details:", error);
    }
  };

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
    fontSize: "30px",
    color: "black",
    fontFamily: "Roboto",
    fontWeight: "bold",
    position: "absolute",
    top: 50,
    right: 50,
    left: 50,
  });

  const P2 = styled("p")({
    fontSize: "30px",
    color: "black",
    fontFamily: "Roboto",
    fontWeight: "bold",
    position: "absolute",
    top: 50,
    right: 50,
    left: 50,
  });

  const Bt = styled("button")({
    backgroundColor: "#f0f0f0",
    color: "black",
    border: "none",
    padding: "10px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "20px",
    "&:hover": { backgroundColor: "#e0e0e0" },
    "&:active": { backgroundColor: "#d0d0d0" },
    zIndex: 999,
    position: "relative",
    top: 0,
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
          {chatdata.length === 0 ? (
            <>
              <h1
                style={{
                  textAlign: "center",
                  fontFamily: "roboto",
                  marginTop: "60px",
                  color: "black",
                  fontSize: "35px",
                }}
              >
                Please enter the Ingredients you have in your Fridge.
              </h1>
              <h2
                style={{
                  textAlign: "center",
                  fontFamily: "roboto",
                  color: "#F97316",
                  fontSize: "30px",
                }}
              >
                (e.g., chicken, rice, tomato)
              </h2>
            </>
          ) : (
            <>
              <Grid container spacing={1}>
                {Array.isArray(chatdata) &&
                  chatdata.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Link to={`/ReceipeDetails/${item?.idMeal}`}>
                        <Div2 className="colom">
                          <Div3 className="overlay">
                            <P>{item.strMeal}</P>
                          </Div3>
                          <Img2
                            src={item.strMealThumb}
                            alt={item.strCategory}
                          />
                        </Div2>
                      </Link>
                    </Grid>
                  ))}
              </Grid>
            </>
          )}
        </Box>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            getresdata(inputValue);
          }}
        >
          <div>
            <input
              type="text"
              style={{
                width: "900px",
                padding: "8px",
                borderRadius: "10px",
                position: "relative",
              }}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </div>
          <Bt type="submit">Submit</Bt>
        </form>
      </div>
    </>
  );
};
export default Fridge;
