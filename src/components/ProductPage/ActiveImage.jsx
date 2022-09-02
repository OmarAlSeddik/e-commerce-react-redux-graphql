import styled from "styled-components";

const StyledActiveImage = styled.div`
  height: 36rem;
  width: 24rem;
  margin-left: 3rem;
  margin-right: 6rem;
  cursor: default;

  .active-image {
    height: auto;
  }
`;

const ActiveImage = ({ productData, selectedImage }) => {
  return (
    <StyledActiveImage>
      <img
        className="active-image"
        src={productData.gallery[selectedImage]}
        alt={selectedImage}
      />
    </StyledActiveImage>
  );
};

export default ActiveImage;
