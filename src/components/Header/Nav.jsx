import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { categoryActions } from "../../store/categorySlice";

const StyledNav = styled.nav`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  width: 21rem;
  margin-right: auto;

  .item {
    flex: 1;
    padding: 0 1rem;
    line-height: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    font-weight: 400;
    transition: color 0.2s, font-weight 0.2s;
    text-transform: uppercase;
  }

  .item:hover {
    color: var(--c-primary);
  }

  .item.active {
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
    transition: left 0.2s 0.2s, height 0.2s;
  }

  .indicator-0 {
    left: 0;
  }

  .indicator-1 {
    left: 33.333%;
  }

  .indicator-2 {
    left: 66.667%;
  }

  .indicator-inactive {
    height: 0;
  }
`;

const Nav = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const { pathname } = useLocation();

  const handleClick = (value) => {
    dispatch(categoryActions.changeCategory(value));
  };

  const navItems = ["all", "tech", "clothes"];

  const navOptions = navItems.map((navItem, i) => {
    return (
      <Link
        to="/"
        key={i}
        onClick={() => handleClick(i)}
        className={`item ${
          category.value === i && pathname === "/" ? "active" : ""
        }`}
      >
        {navItem}
      </Link>
    );
  });

  return (
    <StyledNav>
      {navOptions}
      <div
        className={`indicator indicator-${category.value} ${
          pathname === "/" ? "" : "indicator-inactive"
        }`}
      />
    </StyledNav>
  );
};

export default Nav;
