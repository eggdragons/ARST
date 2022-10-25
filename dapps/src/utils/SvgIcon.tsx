import twitter from "../../public/assets/icon/twitter.svg";
import telegram from "../../public/assets/icon/telegram.svg";
import opensea from "../../public/assets/icon/opensea.svg";
import instagram from "../../public/assets/icon/instagram.svg";
import discord from "../../public/assets/icon/discord.svg";
import etherscan from "../../public/assets/icon/etherscan.svg";
import polygon from "../../public/assets/icon/polygon.svg";
import solana from "../../public/assets/icon/solana.svg";

export const IconType = {
  twitter,
  telegram,
  opensea,
  instagram,
  discord,
  etherscan,
  polygon,
  solana,
};

type Props = {
  type: keyof typeof IconType;
  size?: number;
  fill?: string;
  stroke?: string;
  fillOpacity?: number;
  strokeOpacity?: number;
};

export const SvgIcon: React.FC<Props> = ({
  type,
  size,
  fill,
  stroke,
  fillOpacity,
  strokeOpacity,
}) => {
  const IconSvgFile = IconType[type];
  return (
    <IconSvgFile
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
      fillOpacity={fillOpacity}
      strokeOpacity={strokeOpacity}
    />
  );
};
