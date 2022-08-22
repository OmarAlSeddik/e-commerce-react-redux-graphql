import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { categoryActions } from "../../store/categorySlice";

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
    font-weight: 400;
    transition: color 0.2s, font-weight 0.2s;
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
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.value);

  const handleClick = (value) => {
    dispatch(categoryActions.changeCategory(value));
  };

  return (
    <StyledNav>
      <div
        onClick={() => handleClick(1)}
        className={`item ${category === 1 ? "active" : ""}`}
      >
        WOMEN
      </div>
      <div
        onClick={() => handleClick(2)}
        className={`item ${category === 2 ? "active" : ""}`}
      >
        MEN
      </div>
      <div
        onClick={() => handleClick(3)}
        className={`item ${category === 3 ? "active" : ""}`}
      >
        KIDS
      </div>
      <div className={`indicator indicator-${category}`} />
    </StyledNav>
  );
};

export default Nav;
