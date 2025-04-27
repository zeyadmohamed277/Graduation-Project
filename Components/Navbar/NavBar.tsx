import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { styled } from "@mui/material";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
// import sound from "../../assets/WhatsApp Audio 2025-04-17 at 01.06.35_917e2316.mp3";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import  SmartToyOutlinedIcon  from '@mui/icons-material/SmartToyOutlined';
import { Link } from "react-router-dom";
const pages = [
  "Home",
  "Categories",
  "Area",
  "Ingredients",
  "Favorites",
  "About-Us",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Logo = styled("img")({
    width: "65px",
    height: "65px",
    borderRadius: "50%",
  });
  const [btn, setbtn] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return (
    <AppBar sx={{ backgroundColor: "white", width: "100%" }}>
      <Container>
        <Toolbar>
          <Logo
            src={logo}
            alt="logo"
            sx={{ cursor: "pointer", marginRight: "20px" }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    if (page === "Area") {
                      navigate("/Area");
                    } else if (page === "Home") {
                      navigate("/Home");
                    } else if (page === "Categories") {
                      navigate("/Categories");
                    } else if (page === "About-Us") {
                      navigate("/ContactUs");
                    } else if (page === "Ingredients") {
                      navigate("/Ingredients");
                    } else if (page === "Favorites") {
                      navigate("/Favorites");
                    }
                  }}
                  sx={{
                    m: "auto",
                    color: "black",
                    display: "block",
                    fontFamily: "roboto",
                    fontWeight: 700,
                  }}
                >
                  {page}
                </Button>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#F97316",
              hover: { color: "black" },
            }}
          >
            Yummy
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  if (page === "Area") {
                    navigate("/Area");
                  } else if (page === "Home") {
                    navigate("/Home");
                  } else if (page === "Categories") {
                    navigate("/Categories");
                  } else if (page === "About-Us") {
                    navigate("/ContactUs");
                  } else if (page === "Ingredients") {
                    navigate("/Ingredients");
                  } else if (page === "Favorites") {
                    navigate("/Favorites");
                  }
                }}
                sx={{
                  margin: "auto",
                  color: "black",
                  display: "block",
                  fontFamily: "roboto",
                  fontWeight: 700,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              marginLeft: "150px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/Search");
            }}
          >
            <SearchIcon sx={{ color: "black" }} />
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              marginLeft: "12px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/fridge");
            }}
          >
            <img
              src="https://img.icons8.com/ios-filled/50/cccc/fridge.png"
              alt="Fridge"
              style={{ width: "20px", height: "20px", color: "black" }}
            />
          </Box>

          {/* <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              marginLeft: "12px",
              cursor: "pointer",
            }}
          >
            <audio ref={audioRef} src={sound} />
            <VolumeUpIcon onClick={playSound} sx={{ color: "black" }} />
          </Box> */}

          {btn ? (
            <Box></Box>
          ) : (
            <Box
              sx={{ display: "flex" }}
              onClick={() => {
                setbtn(true);
              }}
            >
              <Box
                sx={{
                  flexGrow: 0,
                  display: { xs: "none", md: "flex" },
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                <button
                  style={{
                    color: "black",
                    padding: "10px",
                    borderRadius: "10px",
                    border: "1px solid black",
                    cursor: "pointer",
                    marginLeft: "20px",
                    width: "80px",
                  }}
                >
                  Sign Up
                </button>
              </Box>

              <Box
                sx={{
                  flexGrow: 0,
                  display: { xs: "none", md: "flex" },
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                <button
                  style={{
                    backgroundColor: "#F97316",
                    color: "white",
                    padding: "13px",
                    borderRadius: "10px",
                    border: "1px solid transparent",
                    cursor: "pointer",
                    marginLeft: "20px",
                    width: "80px",
                  }}
                >
                  Login
                </button>
              </Box>
            </Box>
          )}
          <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <Link to="/chatbot">
          <button
            style={{
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
          >
            <SmartToyOutlinedIcon sx={{ color: "white" }} />
          </button>
        </Link>
      </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
