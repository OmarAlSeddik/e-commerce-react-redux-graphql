import styled from "styled-components";

const StyledGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .image-container {
    height: 6rem;
    cursor: pointer;
  }
`;

const Gallery = ({ productData, setSelectedImage }) => {
  const handleImageSelection = (value) => {
    setSelectedImage(value);
  };

  const gallery = productData.gallery.map((image, index) => {
    return (
      <div className="image-container" key={index}>
        <img
          src={image}
          alt={index}
          onClick={() => handleImageSelection(index)}
        />
      </div>
    );
  });

  return <StyledGallery>{gallery}</StyledGallery>;
};

export default Gallery;
