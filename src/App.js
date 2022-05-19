import React, { useState, useEffect } from "react";
import axios from "axios";
import { MagnifyingGlass } from "phosphor-react";

import { Header, Main, Card, Footer } from "./styles";
import { GlobalStyles } from "./style/global";

import logo from "./assets/logo.svg";
import logo2 from "./assets/logo-2.svg";
import facebook from "./assets/facebook-logo.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";

export const App = () => {
  const [data, setData] = useState();

  async function getData() {
    const { data } = await axios.get("https://fakerapi.it/api/v1/books");
    setData(data.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <GlobalStyles />

      <Header>
        <img src={logo} />
        <div>
          <a href="#">Home</a>

          <a href="#">About</a>

          <a href="#">Features</a>

          <a href="#">Pricing</a>

          <a href="#">Gallery</a>

          <a href="#">Team</a>

          <a href="#">
            <MagnifyingGlass size={10.35} />
          </a>
        </div>
      </Header>

      <Main>
        {data &&
          data.map((item) => {
            return (
              <Card key={item.id}>
                <img src={item.image} />

                <h3>{item.title}</h3>

                <p>{item.author}</p>

                <p>{item.description}</p>

                <div>
                  <div>{item.genre}</div>

                  <p>
                    {new Date(item.published).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "short",
                      year: "2-digit",
                    })}
                  </p>
                </div>
              </Card>
            );
          })}
      </Main>

      <Footer>
        <div className="div-image">
          <img src={logo2} />
        </div>

        <div className="text-social">
          <div className="div-text">
            <p>Terms & Conditions</p>

            <p>Privacy Policy</p>
          </div>
          <div className="div-social">
            <a href="https://www.instagram.com" target="_blank">
              <img src={instagram} />
            </a>

            <a href="https://www.twitter.com" target="_blank">
              <img src={twitter} />
            </a>

            <a href="https://www.facebook.com" target="_blank">
              <img src={facebook} />
            </a>
          </div>
        </div>
      </Footer>
    </>
  );
};
