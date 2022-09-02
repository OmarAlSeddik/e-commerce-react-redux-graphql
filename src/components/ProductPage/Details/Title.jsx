import styled from "styled-components";

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.6875rem;

  .brand {
    font-size: 1.875rem;
    line-height: 1.6875rem;
    font-weight: 600;
  }

  .name {
    font-size: 1.875rem;
    line-height: 1.6875rem;
  }
`;

const Title = ({ productData }) => {
  return (
    <StyledTitle>
      <div className="brand">{productData.brand}</div>
      <div className="name">{productData.name}</div>
    </StyledTitle>
  );
};

export default Title;
