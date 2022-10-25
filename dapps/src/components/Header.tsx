import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import type { NavProps, Homepage } from "../utils/utils";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SnsLinks } from "./SnsLinks";

const HomepageMap: React.FC<{ homepages: Homepage[] }> = ({ homepages }) => {
  const map = homepages?.map((data, index) => {
    return (
      <div key={index}>
        <Nav.Link href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </Nav.Link>
      </div>
    );
  });
  return <>{map}</>;
};

export const Header: React.FC<NavProps> = ({
  title,
  image,
  originalColor,
  homepages,
}) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      variant="dark"
      bg={originalColor === false ? "dark" : ""}
      className={originalColor === false ? "dark" : "color-nav"}
      id="hedder"
      sticky="top"
    >
      <Container>
        <Navbar.Brand>
          {!!image && (
            <img
              alt=""
              src={image}
              height="30"
              className="d-inline-block align-top"
            />
          )}
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <HomepageMap homepages={homepages}></HomepageMap>
          </Nav>
          <Nav>
            <SnsLinks />
            <WalletMultiButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
