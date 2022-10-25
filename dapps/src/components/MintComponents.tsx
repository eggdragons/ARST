import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram, useClaimNFT } from "@thirdweb-dev/react/solana";

import { contractAddress } from "../utils/utils";
import { useCounter, CounterSetType } from "../hooks/useCounter";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";

const counterSet: CounterSetType = {
  initMaxCount: 10,
  initMinCount: 1,
  initialValue: 1,
};

const price = 0.001;
const currency = "Sol";

export const MintComponents: React.FC = () => {
  const { program } = useProgram(contractAddress, "nft-drop");
  const { mutateAsync: claim, isLoading, error } = useClaimNFT(program);

  const wallet = useWallet();
  const { count, increment, decrement } = useCounter(counterSet);

  return (
    <>
      <Card
        className="text-center bg-white text-white"
        // @ts-ignore
        style={{ "--bs-bg-opacity": 0.1 }}
      >
        <Card.Img
          variant="top"
          src={process.env.assetPrefix + "/assets/NFT.png"}
          style={{ opacity: 1 }}
        />
        <Card.ImgOverlay>
          <Card.Title>
            <h2>Get ARST NFT!!</h2>
            <h3>
              {"( "}Price: {price} {currency}
              {" )"}
            </h3>
          </Card.Title>
        </Card.ImgOverlay>
        <Card.ImgOverlay className="d-flex flex-column justify-content-end">
          <Card.Text as="div">
            <Container>
              {!wallet.connected ? (
                <>
                  <Row>
                    <Col>
                      <h3>Now on Sale</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <WalletMultiButton />
                    </Col>
                  </Row>
                </>
              ) : (
                <>
                  <Row>
                    <Col>
                      <h3>
                        Total price: {Math.floor(count * price * 1000) / 1000}
                        {currency}
                      </h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-grid gap-3 d-sm-flex justify-content-center pt-2">
                      <ButtonGroup className="mb-2" aria-label="Second group">
                        <Button onClick={increment}>
                          <h4>＋</h4>
                        </Button>

                        <Button onClick={() => claim({ amount: count })}>
                          <h4>Get {count} NFTs</h4>
                        </Button>
                        <Button onClick={decrement}>
                          <h4>－</h4>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </>
              )}
            </Container>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};
