import styled from "styled-components";

const StyledPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  .error {
    font-size: 4rem;
  }

  .message {
    font-size: 3rem;
  }
`;

const NotFoundPage = () => {
  return (
    <StyledPage>
      <h1 className="error">404</h1>
      <h2 className="message">Page Not Found</h2>
    </StyledPage>
  );
};

export default NotFoundPage;
