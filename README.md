# ARST project

I believe it is important for many people to be able to use it easily. ARST project was created with that in mind!

This project is NFT project that crosses four web3 solutions.

- Arweave : storage dapps and NFT media data
- React : dapps and NFT function
- Solana : blockchain
- Thirdweb : contract and dapps

By using thirdweb products, I was able to focus on original product, i.e., the gimmick of NFT.

- [ARST - Github](https://github.com/eggdragons/ARST)

<br>

# dapps

The dapps I have created will be dapps that can mint NFT.
All web3 features such as wallet, mint function, etc. are standard for thirdweb.

- [dapps](https://arweave.net/S-xvpS6bqgeojl1K_uVx9iXjJS-ktljuTPjzGim5Ljw/)

This dapps is hosted on arweave.
I was able to actually go from test to deploy for less than one dollar.
And I will not have to pay any fees to retain the server in the future.

<br>

## Reasons for using arweave

I think that building dapps in arweave will help many people.

- Permanently hosted and available.
- The cost is only for the storage need.
- Combined with ArDrive, it can be updated just like a conventional website.

Combined with thirdweb, dapps can be completed instantly.
For example, you can do things like limit claims from the thirdweb dashboard, so there's no need to update your website.

In the near future, when ArNS becomes available, you will be able to specify the url freely.
If this happens, I believe that more and more people will use Arweave.

I consider Arweave and Thirdweb to be an excellent match.
I think the combination of these two solutions will make it easier for everyone to take on new challenges.

<br>

## How it's made.

1. Use thirdweb templates.

   `npx thirdweb@latest create --template next-typescript-solana-starter`

2. Create mint button as written in thirdweb dashboard

   ```ts
   import { useProgram, useClaimNFT } from "@thirdweb-dev/react/solana";

   export default function Component() {
     const count = 1;
     const contractAddress = "xxxxxxxxxxxxxxxxxxxxxxx";

     const { program } = useProgram(contractAddress, "nft-drop");
     const { mutateAsync: claim, isLoading, error } = useClaimNFT(program);

     return <button onClick={() => claim({ amount: count })}>Claim</button>;
   }
   ```

   web3 functionality is now complete! thirdweb products are awesome!

3. Enjoyed the dapps design.
4. Hosting with arweave.

   It's hard to run nextjs in arweave.
   So, this time, I output Static HTML and host it on arweave.
   Read the readme in dapps folder for more details.

<br>
<br>

# NFT

I aimed to employ gimmicks that only digital assets can.
I created the NFT with several features based on actual use as well.

ARST NFT is equipped with query and carousel functions.
Only platforms with valid HTML data can be operated.
※I believe that more platforms and applications will be supported in the future.

- [NFT collection on Opensea](https://opensea.io/collection/arst-v3)
- [NFT collection on SOLSCAN](https://solscan.io/collection/bab140f50beb6db1aece36040a8cd8a0f89a36da309a6ab2b453fee2ad83f518)

<br>

## About the configuration of the ARST NFT I created this time

- image:ARST logo image
- animation1:html data with queerable functionality
  - There are three types of queries
    - Background color 5 types
    - Logo color 5 types
    - Logo shape 4 types
  - Click to switch to animation2
- animation2:html data with carousel functionality

  - 4 images to switch between
  - Images illustrating the features of each solution

※In Opensea, this can be used by entering the HTML `url` in the `animation_url` instead of `image_url`.

<br>

## What is queerable?

There are 100 NFTs, but the data used for animation data(HTML) is one.
By passing the query data to the URI that pulls the data, 100 different images are displayed.

### Feature

- No need to create a large number of images.
- Low data volume
- Leverage the strengths of digital assets.

For more information, check out the repository below!

- [queerableNFT - Github](https://github.com/eggdragons/queerableNFT)

<br>

## What is carousel?

Click on the displayed image to switch to the carousel screen.
Here, the image can be switched automatically OR you can switch the image manually.

### Feature

- Multiple digital data can be delivered together as one.
- Able to create a work that includes transitions between scenes.

For more information, check out the repository below!

- [carouselNFT - Github](https://github.com/eggdragons/carouselNFT)

<br>

<br>

# How to make use of it

I present two examples of actual use.

## Example 1. Discount coupons with advertisements

By combining the querable and carousel functions, the following can be achieved:

- The discount rate and the products to be discounted can be changed depending on the person.In other words, personalized ads can be created.
- The discount coupons themselves can be exchanged or traded.
- Multiple stores can participate

### Specifically

1. The following parameters are used for query data.

   - Discount rate
   - Discount period
   - Stores where discounts are available
   - Products for which discounts are available etc.

2. The carousel should contain advertisements for the participating companies.

Here's what I made : [NFT collection on Opensea](https://testnets.opensea.io/collection/discountcouponsample)

<br>

## Example 2. Cartoon

Using the carousel function, I made a NFT of manga, which is a part of Japanese culture.
It's obvious when you get a look at it.

Here's what I made : [NFT collection on Opensea](https://opensea.io/collection/japanesecomics)

The artist who painted this lovely picture is [Tomopen](https://twitter.com/kouteipenpen_f).

<br>

Thanks for reading to the end.

I look forward to many more creative works!
