import styled from "styled-components";
import backgroundFoods from "../../images/variascomidas.jpg";

export const Main = styled.main`
  display: flex;

  .background {
    background-image: url(${backgroundFoods});
    height: 100vh;
    width: 100vw;
  }

  @media (min-width: 1024px) {
    .background {
      background: none;
    }

    aside {
      background-image: url(${backgroundFoods});
      height: 100vh;
      width: 67vw;
      background-position-x: center;
      background-size: cover;
    }
  }
`;

export const Film = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.6);

  @media (min-width: 1024px) {
    height: 100vh;
    width: 60vw;
  }
`;

export const Box = styled.div`
  height: 90vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  img {
    width: 90px;
    height: 90px;
    position: relative;
    top: 40px;
  }
`;

export const BoxContent = styled.div`
  height: 406px;
  width: 280px;
  background: rgba(245, 224, 204, 0.8);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  h2 {
    color: #9e5642;
    font-weight: 400;
  }

  .input {
    margin: 8px 25px;
  }

  .switch {
    color: #9e5642;
    margin: 0 17px;
  }

  button {
    background: #9e5642;
    color: #f7f7f7;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-weight: bold;
    margin: 10px 25px;
  }

  @media (min-width: 1024px) {
    height: 400px;
    width: 330px;

    .input {
      margin: 8px 50px;
    }

    .switch {
      margin: 0 42px;
    }

    button {
      margin: 10px 50px;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: rgba(255, 255, 255, 0.5);

  .button {
    color: #323232;
    text-transform: uppercase;
    font-weight: 1000;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  color: #323232;
  font-weight: 700;
  transform: translateY(-10px);
  text-transform: uppercase;

  p {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-weight: 300;
    font-size: 15px;
    margin: 5px 0;
  }
`;
