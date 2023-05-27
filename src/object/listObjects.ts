import { client } from "../client";

export const getListObjects = async (name: string) => {
  const objects = await client.object.listObjects({
    bucketName: name,
    endpoint: "https://gnfd-testnet-sp-2.bnbchain.org",
    
  });

  console.log(objects);
};
