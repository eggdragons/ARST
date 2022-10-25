import { useState } from "react";

import Nav from "react-bootstrap/Nav";

import { SvgIcon } from "../utils/SvgIcon";
import type { IconType } from "../utils/SvgIcon";
import {
  etherscan,
  polygonscan,
  solscan,
  openseaUrl,
  twitterUrl,
  instagramUrl,
  discordUrl,
} from "../utils/utils";

type Props = {
  url: string;
  icon: keyof typeof IconType;
  color?: string;
  title?: string;
};

const LinkIcon: React.FC<Props> = ({ url, icon, color, title }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <>
      {!!url && (
        <Nav.Link
          href={url}
          target="_blank"
          rel="noreferrer"
          className="align-self-center me-1"
        >
          <div
            className="hover d-none d-lg-block"
            onMouseEnter={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
          >
            <SvgIcon
              type={icon}
              size={24}
              fill={hovered ? color : "#f8f9fa"}
              fillOpacity={hovered ? 1.0 : 0.5}
            />
          </div>
          <div className="d-lg-none">{title}</div>
        </Nav.Link>
      )}
    </>
  );
};

export const SnsLinks: React.FC = () => {
  return (
    <>
      <LinkIcon
        url={openseaUrl}
        icon={"opensea"}
        color={"#2081e2"}
        title={"Opensea"}
      />
      <LinkIcon url={etherscan} icon={"etherscan"} title={"EtherScan"} />
      <LinkIcon
        url={polygonscan}
        icon={"polygon"}
        color={"#8247e5"}
        title={"PolygonScan"}
      />
      <LinkIcon
        url={solscan}
        icon={"solana"}
        color={"#8247e5"}
        title={"Solscan"}
      />
      <LinkIcon
        url={twitterUrl}
        icon={"twitter"}
        color={"#00acee"}
        title={"Twitter"}
      />
      <LinkIcon
        url={discordUrl}
        icon={"discord"}
        title={"Discord"}
        color={"#8247e5"}
      />
      <LinkIcon url={instagramUrl} icon={"instagram"} title={"Instagram"} />
    </>
  );
};
