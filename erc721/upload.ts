import { NFTStorage, File } from "nft.storage";
import fs from "fs";

(async () => {
  const apiKey = process.env.NFT_STORAGE_API_KEY as string;
  const client = new NFTStorage({ token: apiKey });

  const metadata = await client.store({
    name: "todos",
    description: "sample image",
    image: new File([fs.readFileSync("./images/nft.jpg")], "nft.jpg", {
      type: "image/jpg",
    }),
    attributes: [
      { trait_type: "skin", value: "flash" },
      {
        trait_type: "face",
        value: "frightened",
      },
    ],
  });
  console.log(metadata.url);
})();
