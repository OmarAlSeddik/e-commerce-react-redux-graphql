import styled from "styled-components";

const StyledNav = styled.nav`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  width: 20rem;
  margin-right: auto;

  .item {
    flex: 1;
    padding: 0 1rem;
    line-height: 1.2rem;
    cursor: pointer;
    color: var(--c-text);
    text-align: center;
  }

  .item-active {
    color: var(--c-primary);
    font-weight: 600;
  }

  .indicator {
    position: absolute;
    content: "";
    width: 33.333%;
    height: 2px;
    bottom: 0;
    background-color: var(--c-primary);
    transition: left 0.2s;
  }

  .indicator-1 {
    left: 0;
  }

  .indicator-2 {
    left: 33.333%;
  }

  .indicator-3 {
    left: 66.667%;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <div className="item item-active">WOMEN</div>
      <div className="item">MEN</div>
      <div className="item">KIDS</div>
      <div className="indicator indicator-1" />
    </StyledNav>
  );
};

export default Nav;
