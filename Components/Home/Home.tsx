import "react-responsive-carousel/lib/styles/carousel.min.css";
import cover from "../../assets/ai-generated-generative-ai-frame-of-food-waste-compost-and-soil-environmental-concept-white-background-biodegradable-kitchen-waste-composting-organic-food-photo.jpg";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import "./Home.css";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const Home = () => {
  
  const P = styled("p")({
    fontSize: "40px",
    color: "black",
    textAlign: "center",
    fontFamily: "roboto",
    fontWeight: "bold",
  });
  const StyledButton = styled("button")({
    color: "black",
    border: "1px solid black",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "20px",
    "&:hover": {
      backgroundColor: "#F97316",
      color: "black",
    },
  });

  return (
    <>
      <div style={{ width: "100%" }}>
        {/* Hero Section */}
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            left: "0px",
            right: "0px",
            marginTop: "67px",
          }}
        >
          <div
            style={{
              color: "black",
              textAlign: "center",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
              Welcome to
              <span
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "#F97316",
                }}
              >
                {" "}
                Yummy{" "}
              </span>
            </h1>
            <p style={{ fontSize: "1.5rem" }}>
              Discover the best recipes for every occasion
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Link to="/receipe">
              <StyledButton>Explore Recipes</StyledButton>
            </Link>
          </div>
        </div>

        {/* category section */}
        <section style={{ padding: "20px", marginTop: "30px" }}>
          <div style={{ container: "true" }}>
            <div
              style={{
                marginBottom: "50px",
                textAlign: "center",
                marginTop: "50px",
              }}
            >
              <p
                style={{ fontSize: "35px", fontWeight: "bold", color: "black" }}
              >
                Popular Categories
              </p>
              <p style={{ fontSize: "23px", color: "#F97316" }}>
                Find the perfect recipe for any occasion
              </p>
            </div>

            <div
              style={{
                width: "100%",
                marginBottom: "50px",
                display: "flex",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Link
                to={`/CategoriesDetails/Breakfast`}
                style={{
                  cursor: "pointer",
                }}
              >
                <div>
                  <img
                    style={{ width: "200px", height: "100px" }}
                    src="https://www.themealdb.com/images/category/breakfast.png"
                    alt="Category Image"
                  />
                  <P>Breakfast</P>
                </div>
              </Link>

              <Link
                to={`/CategoriesDetails/Side`}
                style={{
                  cursor: "pointer",
                }}
              >
                <div>
                  <img
                    style={{ width: "200px", height: "100px" }}
                    src="https://www.themealdb.com/images/category/Side.png"
                    alt="Category Image"
                  />
                  <P>Side</P>
                </div>
              </Link>

              <Link
                to={`/CategoriesDetails/Starter`}
                style={{
                  cursor: "pointer",
                }}
              >
                <div>
                  <img
                    style={{ width: "200px", height: "100px" }}
                    src="https://www.themealdb.com/images/category/Starter.png"
                    alt="Category Image"
                  />
                  <P>Starter</P>
                </div>
              </Link>

              <Link
                to={`/CategoriesDetails/SeaFood`}
                style={{
                  cursor: "pointer",
                }}
              >
                <div>
                  <img
                    style={{ width: "200px", height: "100px" }}
                    src="https://www.themealdb.com/images/category/SeaFood.png"
                    alt="Category Image"
                  />
                  <P>SeaFood</P>
                </div>
              </Link>

              <Link
                to={`/CategoriesDetails/Vegetarian`}
                style={{
                  cursor: "pointer",
                }}
              >
                <div>
                  <img
                    style={{ width: "200px", height: "100px" }}
                    src="https://www.themealdb.com/images/category/Vegetarian.png"
                    alt="Category Image"
                  />
                  <P>Vegetarian</P>
                </div>
              </Link>

              <Link
                to={`/CategoriesDetails/Vegan`}
                style={{
                  cursor: "pointer",
                }}
              >
                <div>
                  <img
                    style={{ width: "200px", height: "100px" }}
                    src="https://www.themealdb.com/images/category/Vegan.png"
                    alt="Category Image"
                  />
                  <P>Vegan</P>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/*  Featured Recipes */}
        <section style={{ padding: "20px", marginTop: "30px" }}>
          <div style={{ container: "true" }}>
            <div
              style={{
                marginBottom: "50px",
                textAlign: "center",
                marginTop: "50px",
              }}
            >
              <p
                style={{ fontSize: "35px", fontWeight: "bold", color: "black" }}
              >
                Featured Recipes
              </p>
              <p style={{ fontSize: "23px", color: "#F97316" }}>
                Our most popular recipes this week
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "nowrap",
                overflowX: "auto",
              }}
            >
              <Card sx={{ maxWidth: 345, border: "2px solid #F97316" }}>
                <CardHeader title="Koshari" subheader="Egyptian Dish" />
                <CardMedia
                  component="img"
                  height="194"
                  image="https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg"
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This delicious Koshari is a fantastic dish for gatherings
                    and a fun meal to prepare with your guests. Feel free to add
                    1 cup of frozen peas along with the lentils for an extra
                    touch, if desired.
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ maxWidth: 345, border: "2px solid #F97316" }}>
                <CardHeader title="Lasagne" subheader="Italian Dish" />
                <CardMedia
                  component="img"
                  height="194"
                  image="https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg"
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This delicious lasagne is a crowd-pleasing dish and a fun
                    meal to prepare together with your guests. Feel free to add
                    extra ingredients like spinach or mushrooms to customize it
                    to your taste!
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ maxWidth: 345, border: "2px solid #F97316" }}>
                <CardHeader title="Pancakes" subheader="American Dish" />
                <CardMedia
                  component="img"
                  height="194"
                  image="https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg"
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    These delicious pancakes are the perfect breakfast or brunch
                    treat and a fun dish to whip up with friends or family. Feel
                    free to add your favorite toppings, like fresh berries or
                    whipped cream, for an extra indulgent touch!
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ maxWidth: 345, border: "2px solid #F97316" }}>
                <CardHeader title="Shawarma" subheader="Egyptian Dish" />
                <CardMedia
                  component="img"
                  height="194"
                  image="https://www.themealdb.com/images/media/meals/kcv6hj1598733479.jpg"
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This delicious shawarma is a perfect crowd-pleaser and a fun
                    meal to prepare together with your guests. Feel free to
                    customize it with your favorite toppings, like pickles or
                    tomatoes, for an extra burst of flavor.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <Link to="/receipe">
              <p
                style={{
                  fontSize: "23px",
                  color: "#F97316",
                  textDecoration: "underline",
                }}
              >
                View All
                <ArrowForwardIcon sx={{ fontSize: "25px" }} />
              </p>
            </Link>
          </div>
        </section>

        {/* What users say */}
        <section
          style={{ padding: "10px", marginTop: "30px", marginBottom: "50px" }}
        >
          <div className="container">
            <div
              style={{
                marginBottom: "50px",
                textAlign: "center",
                marginTop: "50px",
              }}
            >
              <p
                style={{ fontSize: "35px", fontWeight: "bold", color: "black" }}
              >
                What Our Users Say
              </p>
              <p style={{ fontSize: "23px", color: "#F97316" }}>
                Hear from our community of home chefs
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "nowrap",
                overflowX: "auto",
              }}
            >
              <Card sx={{ minWidth: 275, border: "2px solid #F97316" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                  >
                    Ahmed M., Dubai
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    Home Chef
                  </Typography>
                  <Typography variant="body2">
                    "These recipes have transformed my cooking! Everything is so
                    easy to follow and the results are always delicious."
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ minWidth: 275, border: "2px solid #F97316" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                  >
                    Sophia L., New York
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    Home Chef
                  </Typography>
                  <Typography variant="body2">
                    “This has become our go-to meal for family nights. Everyone
                    loves it!”
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ minWidth: 275, border: "2px solid #F97316" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                  >
                    Priya K., Chicago
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    Home Chef
                  </Typography>
                  <Typography variant="body2">
                    “Tastes homemade but better. Seriously addictive!”
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ minWidth: 275, border: "2px solid #F97316" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                  >
                    Omar S., Toronto
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    Home Chef
                  </Typography>
                  <Typography variant="body2">
                    “I love how easy it is to customize. Every bite feels like
                    it was made just for me.”
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
