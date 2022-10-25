import { ReactComponent as Arweave } from "../assets/parts/arweave.svg";
import { ReactComponent as React } from "../assets/parts/react.svg";
import { ReactComponent as Solana } from "../assets/parts/solana.svg";
import { ReactComponent as Thirdweb } from "../assets/parts/thirdweb.svg";

type Props = {
  shape: string | null;
  styles?: React.CSSProperties;
};

export const Change: React.FC<Props> = ({ shape, styles }) => {
  switch (shape) {
    case "arweave":
      return <Arweave style={styles} />;
    case "react":
      return <React style={styles} />;
    case "solana":
      return <Solana style={styles} />;
    case "thirdweb":
      return <Thirdweb style={styles} />;
    default:
      return null;
  }
};
