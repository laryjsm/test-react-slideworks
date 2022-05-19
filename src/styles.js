import styled from "styled-components";

export const Header = styled.header`
  padding: 40px 154px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #000000;

  div {
    a {
      margin-right: 60px;
      text-decoration: none;
      color: #000000;
    }
  }
`;

export const Main = styled.main`
  padding: 81px 154px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
`;

export const Card = styled.div`
  max-width: 259px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h3,
  p,
  div {
    margin-left: 5px;
    font-family: "Inter", sans-serif;
    margin-top: 12px;
  }
  img {
    border-radius: 4px;
    width: 227px;
    height: 224px;
  }

  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #19191d;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: #787885;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #2264d1;

    p {
      color: #2264d1;
    }

    div {
      border-radius: 4px;
      border: 1px solid #9dc2ff;
      padding: 6px 8px;
    }
  }
`;

export const Footer = styled.footer`
  background: #1e2833;
  padding: 0 186px;
  color: #FFFFFF;
  font-family: 'DM Sans', sans-serif;

  .div-image {
    padding: 60px 0;
    border-bottom: 1px solid rgba(250,250,250,0.1);
  }

  .text-social {
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
  }

  .div-text {
      display: flex;
      p {
        margin-right: 39px;
      }
  }

  .div-social {
      display: flex;
      a {
          margin-left: 40px;
      }
  }



`;
