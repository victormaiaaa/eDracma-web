import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const PageLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Img = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  svg {
    width: 50%;
    height: fit-content;
  }
`;

export const Content = styled.div`
  border-radius: 10px;
  box-shadow: 3px 2px 8px rgba(0, 0, 0, 0.25);
  max-width: 800px;
  width: 100%;
  padding: 40px;
  height: min-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;

  input {
    margin: 10px 0;
  }
  button {
    margin: 10px 0;
  }

  @media (max-width: 600px) {
    width: 100vw;
    border-radius: 0;
  }
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 32px;
  padding: 20px 0;
  color: #ffffff;
`;

export const CartVoid = styled.div`
  margin: 60px 0;
`;

export const Cart = styled.div`
  margin: 20px 0;
`;
