import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";

import bg1 from "./assets/parts/bg1.png";
import bg2 from "./assets/parts/bg2.png";
import bg3 from "./assets/parts/bg3.png";
import bg4 from "./assets/parts/bg4.png";
import bg5 from "./assets/parts/bg5.png";

export type ArrayItem = { image: string; name?: string; description?: string };

export const arrayItem: ArrayItem[] = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
];

export const arrayURI: string[] = [
  "https://www.arweave.org/",
  "https://reactjs.org/",
  "https://solana.com/",
  "https://thirdweb.com/",
];

export const arrayBgItem: string[] = [bg1, bg2, bg3, bg4, bg5];
export const arrayColorItem: string[] = [
  "#4CBFAC",
  "#04CFF2",
  "#7661A9",
  "#BA1FA6",
  "#FCD662",
];
