import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  position: absolute;
  left: 101px;
  bottom: 0px;
  width: 234px;
  height: 56px;

  & > * {
    width: 37px;
    height: 20px;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    /* identical to box height, or 19px */

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    color: #1d1f22;

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  & > *.active {
    width: 65px;
    height: 20px;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    color: var(--c-primary);

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <div>WOMEN</div>
      <div>MEN</div>
      <div>KIDS</div>
    </StyledNav>
  );
};

export default Nav;
