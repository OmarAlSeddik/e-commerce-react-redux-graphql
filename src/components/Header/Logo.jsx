import styled from "styled-components";

const StyledLogo = styled.img`
  position: absolute;
  left: 50%;
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
`;

const Logo = () => {
  return <StyledLogo src="logo.png" />;
};

export default Logo;
