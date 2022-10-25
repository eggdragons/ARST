import type { NextPage } from "next";

import { MintComponents } from "../components/MintComponents";
import { Header } from "../components/Header";
import { header } from "../utils/utils";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const Home: NextPage = () => {
  return (
    <>
      <section style={topStyles}>
        <Header {...header} />
        <Container className="align-self-center">
          <Row style={contentStyles}>
            <Col className="align-self-center">
              <h1 style={bigTitleStyles}>
                <span style={{ color: "#4CBFAC" }}>A</span>
                RWEAVE
              </h1>
              <h1 style={bigTitleStyles}>
                <span style={{ color: "#04CFF2" }}>R</span>EACT
              </h1>
              <h1 style={bigTitleStyles}>
                <span style={{ color: "#7661A9" }}>S</span>OLANA
              </h1>
              <h1 style={bigTitleStyles}>
                <span style={{ color: "#BA1FA6" }}>T</span>HIRDWEB
              </h1>
            </Col>
            <Col className="align-self-center p-5">
              <MintComponents />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;

const isProd = process.env.NODE_ENV === "production";

const topStyles: React.CSSProperties = {
  backgroundImage:
    process.env.NODE_ENV === "production"
      ? "url(./assets/bg.jpg)"
      : "url(../assets/bg.jpg)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const bigTitleStyles: React.CSSProperties = {
  fontSize: "7vw",
  fontWeight: "bold",
  color: "#ffffff",
};

const contentStyles: React.CSSProperties = {
  height: `calc(100vh - 64px)`,
  alignSelf: "center",
};
