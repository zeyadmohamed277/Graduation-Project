import styled, { keyframes } from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img from "../../assets/logo.png";
import { shake } from "react-animations";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PeopleIcon from "@mui/icons-material/People";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import me from "../../assets/WhatsApp Image 2025-04-15 at 17.32.21_f765dc0f.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
const ContactUs = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const bounceAnimation = keyframes`${shake}`;

  const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
  `;

  const ADiv = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
  });
  const ADiv2 = styled("div")({
    display: "inline-block",
    borderRadius: "0.5rem",
    backgroundColor: "#fef3c7",
    padding: "0.25rem 0.75rem",
    fontSize: "20px",
    color: "#c2410c",
  });
  const Ah2 = styled("h2")({
    fontSize: "1.875rem",
    fontWeight: "700",
    letterSpacing: "-0.05em",
    "@media (min-width: 640px)": {
      fontSize: "2.25rem",
    },
  });
  const Ap = styled("p")({
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "700px",
    color: "var(--muted-foreground)",
    fontSize: "1rem",
    "@media (min-width: 768px)": {
      fontSize: "1.125rem",
    },
  });
  const GridContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    max-width: 80rem; /* max-w-5xl = 1280px = 80rem */
    gap: 2rem; /* gap-8 = 2rem */
    padding-top: 3rem; /* pt-12 = 3rem */

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr); /* md:grid-cols-3 */
    }
  `;
  const FeatureCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem; /* space-y-4 = 1rem vertical gap */
  `;
  const IconWrapper = styled.div`
    display: flex;
    height: 4rem;
    width: 4rem;
    align-items: center;
    justify-content: center;
    border-radius: 9999px; /* rounded-full */
    background-color: #fef3c7; /* bg-orange-100 */
  `;
  const Title = styled.h3`
    font-size: 1.25rem; /* text-xl */
    font-weight: 700; /* font-bold */
  `;
  const Description = styled.p`
    color: var(
      --muted-foreground
    ); /* Assuming you're using CSS variables or theme */
  `;
  const Section = styled.section`
    padding-top: 3rem;
    padding-bottom: 3rem;

    @media (min-width: 768px) {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }

    @media (min-width: 1024px) {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  `;
  const Container = styled.div`
    max-width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;

    @media (min-width: 768px) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  `;
  const CenteredColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
  `;
  const TeamGrid = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 80rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding-top: 3rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `;
  const TeamMember = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `;
  const AvatarWrapper = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 9999px;
    overflow: hidden;
  `;
  const MemberInfo = styled.div`
    text-align: center;
  `;
  const MemberName = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
  `;
  const MemberRole = styled.p`
    font-size: 20px;
    color: #f97316; /* text-orange-500 */
  `;
  const MemberBio = styled.p`
    margin-top: 0.5rem;
    color: var(--muted-foreground);
  `;
  const Grid = styled.div`
    display: grid;
    gap: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `;
  const Card = styled.div`
    background-color: white;
    border-radius: 0.75rem;
    padding: 1.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* shadow-sm */
  `;
  const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    gap: 1rem;
  `;
  const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;
  const ListItem = styled.li`
    display: flex;
    align-items: flex-start;
  `;
  const NumberCircle = styled.div`
    margin-right: 1rem;
    margin-top: 0.25rem;
    display: flex;
    height: 1.5rem;
    width: 1.5rem;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    background-color: #ffedd5;
    color: #f97316;

    span {
      font-size: 0.875rem;
      font-weight: 700;
    }
  `;
  const ItemText = styled.p`
    font-size: 1.125rem;
  `;
  const IconRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
  `;
  return (
    <>
      <div style={{ padding: "20px",overflowX: "hidden",marginTop: "20px" }}>
        <BouncyDiv>
          <img
            src={Img}
            alt="logo"
            style={{ width: "200px", height: "200px", marginTop: "50px" }}
          />
        </BouncyDiv>

        {/* Our Values Section */}
        <Section>
          <div style={{ container: "true" }}>
            <ADiv>
              <div>
                <ADiv2>Our Values</ADiv2>
                <Ah2>What Drives Us Every Day</Ah2>
                <Ap>
                  Our core values guide everything we do, from sourcing
                  ingredients to serving our customers.
                </Ap>
              </div>
            </ADiv>

            <GridContainer>
              <FeatureCard>
                <IconWrapper>
                  <FavoriteBorderIcon />
                </IconWrapper>
                <Title>Passion</Title>
                <Description>
                  We pour our hearts into every dish, creating food that
                  nourishes both body and soul.
                </Description>
              </FeatureCard>
              <FeatureCard>
                <IconWrapper>
                  <PeopleIcon />
                </IconWrapper>
                <Title>Community</Title>
                <Description>
                  We believe in creating spaces where people connect over
                  delicious meals and shared experiences.
                </Description>
              </FeatureCard>
              <FeatureCard>
                <IconWrapper>
                  <StarBorderIcon sx={{ fontSize: "35px" }} />
                </IconWrapper>
                <Title>Quality</Title>
                <Description>
                  We never compromise on ingredients or preparation, ensuring
                  every bite exceeds expectations.
                </Description>
              </FeatureCard>
            </GridContainer>
          </div>
        </Section>

        {/* Aim section */}
        <Section>
          <Container>
            <Grid>
              <Card>
                <CardHeader>
                  <IconWrapper>
                    <AdjustIcon sx={{ fontSize: "35px" }} />
                  </IconWrapper>
                  <ADiv2>Aim</ADiv2>
                  <Ah2>Aims of the Site</Ah2>
                </CardHeader>
                <List>
                  <ListItem>
                    <NumberCircle>
                      <span>1</span>
                    </NumberCircle>
                    <ItemText>
                      The aim of FoodCo is to make cooking easy and fun for
                      everyone.
                    </ItemText>
                  </ListItem>
                  <ListItem>
                    <NumberCircle>
                      <span>2</span>
                    </NumberCircle>
                    <ItemText>
                      We hope to inspire users to try new meals and improve
                      their cooking skills.
                    </ItemText>
                  </ListItem>
                  <ListItem>
                    <NumberCircle>
                      <span>3</span>
                    </NumberCircle>
                    <ItemText>
                      Our goal is to build a community of food lovers who can
                      share their cooking experiences and enjoy the joy of
                      making food together.
                    </ItemText>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Container>
        </Section>

        {/* Meet  Team Section */}
        <Section>
          <Container>
            <CenteredColumn>
              <ADiv>
                <div>
                  <ADiv2>Team</ADiv2>
                  <Ah2>Meet the People Behind the Magic</Ah2>
                  <Ap>
                    Our talented team brings together decades of culinary
                    expertise and passion for hospitality.
                  </Ap>
                </div>
              </ADiv>
            </CenteredColumn>

            <TeamGrid>
              <TeamMember>
                <AvatarWrapper>
                  <img style={{ width: "100%" }} src={me} />
                </AvatarWrapper>
                <MemberInfo>
                  <MemberName>Zeyad Mohamed Shehab</MemberName>
                  <MemberRole>Founder</MemberRole>
                  <MemberBio>
                    With 3 years of culinary experience, Zeyad brings authentic
                    family recipes to life.
                  </MemberBio>
                </MemberInfo>
              </TeamMember>
            </TeamGrid>
          </Container>
        </Section>

        {/* contact section */}
        <Section>
          <Container>
            <Grid>
              <div className="space-y-4">
                <ADiv2>Get In Touch</ADiv2>
                <Ah2>We'd Love to Hear From You</Ah2>
                <Description>
                  Have questions, feedback Reach out to us through any of these
                  channels.
                </Description>

                <div className="space-y-4 pt-4">
                  <IconRow>
                    <PhoneIcon sx={{ color: "#F97316" }} />
                    <span>(555) 123-4567</span>
                  </IconRow>
                  <IconRow>
                    <LocationOnIcon sx={{ color: "#F97316" }} />
                    <span>Egypt</span>
                  </IconRow>
                  <IconRow  >
                    <a style={{ color: "black" }} href="https://www.linkedin.com/in/zeyad-mohamed-1b8695311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <LinkedInIcon  style={{ color: "#F97316" }}/>
                      <span>Zeyad Mohamed</span>
                    </a>
                  </IconRow>
                </div>

                <div className="pt-4">
                  {showContactForm && (
                    <div style={{ marginTop: "20px" }}>
                      <input
                        type="text"
                        placeholder="Your Message"
                        id="userMessage"
                        style={{
                          width: "100%",
                          height: "40px",
                          padding: "10px",
                          borderRadius: "5px",
                          border: "1px solid #ccc",
                          marginBottom: "10px",
                        }}
                      />
                      <button
                        onClick={() => {
                          const inputElement = document.getElementById("userMessage") as HTMLInputElement;
                          console.log("User Message:", inputElement?.value);
                        }}
                        style={{
                          backgroundColor: "#F97316",
                          color: "white",
                          padding: "10px",
                          borderRadius: "5px",
                          border: "1px solid transparent",
                          cursor: "pointer",
                          width: "100px",
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  )}
                  
                  
                  <button
                    onClick={() => setShowContactForm(!showContactForm)}
                    style={{
                      backgroundColor: "#F97316",
                      color: "white",
                      padding: "13px",
                      borderRadius: "10px",
                      border: "1px solid transparent",
                      cursor: "pointer",
                      width: "120px",
                      marginTop: "20px",
                    }}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </Grid>
          </Container>
        </Section>
      </div>
    </>
  );
};
export default ContactUs;
