import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  const Footer = styled.footer`
    border-top: 1px solid #e5e7eb; /* default Tailwind border color */
    background-color: gray; /* bg-slate-50 */
    color: white;
  `;

  const FooterContainer = styled.div`
    width: 90%;
    height: 200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 768px) {
      padding: 3rem 1rem;
    }
  `;

  const FooterGrid = styled.div`
    display: grid;
    gap: 2rem;

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
  `;

  const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  `;

  const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `;

  const BrandName = styled.span`
    color:"#F97316"
      font-size: 1.25rem;
      font-weight: 700;
    `;

  const Paragraph = styled.p`
    font-size: 0.875rem;
    color: var(--muted-foreground);
  `;

  const Heading = styled.h3`
    font-size: 20px
    font-weight: 600;
    color:#f97316;
  `;

  const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: "black";
  `;

  const ListItem = styled.li`
    color: "black";
  `;

  const StyledLink = styled("a")`
    font-size: 0.875rem;
    color: white; /* Changed to white */
    text-decoration: none;

    &:hover {
      color: #f97316; /* text-orange-500 */
    }
  `;


  return (
    <>
      <Footer>
        <FooterContainer>
          <FooterGrid>
            <Section>
              <Brand>
                <Heading>Yummy</Heading>
              </Brand>
              <Paragraph>
                Bringing authentic flavors to your table
              </Paragraph>
            </Section>

            <Section>
              <Heading>Explore</Heading>
              <List>
               
                <ListItem>
                  <Link style={{ color: "white"}} to={"/home"}>Home</Link>
                </ListItem>
                <ListItem>
                  <Link style={{ color: "white"}} to={"/ContactUs"}>About Us</Link>
                </ListItem>
                <ListItem>
                  <Link style={{ color: "white"}} to={"/Ingredients"}>Ingredients</Link>
                </ListItem>
                <ListItem>
                  <Link style={{ color: "white"}} to={"/Area"}>Area</Link>
                </ListItem>
              </List>
            </Section>

            <Section>
              <Heading>Legal</Heading>
              <List>
                <ListItem>
                  <StyledLink href="#">Privacy Policy</StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink href="#">Terms of Service</StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink href="#">Accessibility</StyledLink>
                </ListItem>
              </List>
            </Section>

            <Section>
              <Heading>Connect</Heading>
              <List>
                <ListItem>
                  <StyledLink href="#">Instagram</StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink href="#">Facebook</StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink style={{color:"white"}} href="https://www.linkedin.com/in/zeyad-mohamed-1b8695311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    LinkedIn
                  </StyledLink>
                </ListItem>
              </List>
            </Section>
          </FooterGrid>
        </FooterContainer>
      </Footer>
    </>
  );
};

export default Footer;
