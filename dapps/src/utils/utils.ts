export type Homepage = {
  title: string;
  url: string;
};

export type NavProps = {
  title: string;
  image?: string;
  originalColor: boolean;
  homepages: Homepage[];
};

const homepages: Homepage[] = [];

export const header: NavProps = {
  title: "",
  image: process.env.assetPrefix + "/assets/logo.png",
  originalColor: true,
  homepages: homepages,
};

export const etherscan = "";
export const polygonscan = "";
export const solscan =
  "https://solscan.io/collection/bab140f50beb6db1aece36040a8cd8a0f89a36da309a6ab2b453fee2ad83f518";

export const openseaUrl = "https://opensea.io/collection/arst-v3";
export const twitterUrl = "https://twitter.com/eggdragons";
export const instagramUrl = "";
export const discordUrl = "";

export const contractAddress = "83t8KWWZcCHMfoMnsuTeeJNGQT1nQeSbsqn6W3qom3YD";
