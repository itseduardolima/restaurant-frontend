import Logo from "../assets/images/Logo.png";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-dark);
  padding: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
    gap: 10px;
  }
`;

const FooterText = styled(Typography)`
  && {
    color: white;
    font-family: var(--font-primary);
    font-size: 16px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  color: white;
`;

const SocialIcon = styled.span`
  font-size: 24px;
  margin: 0 10px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <img src={Logo} alt="Logo" width={97} />
      </div>

      <div>
        <FooterText variant="body2">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </FooterText>
      </div>

      <div>
        <SocialIcons>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
        </SocialIcons>
      </div>
    </FooterContainer>
  );
};

export default Footer;
