import { client } from "../client";

export const getListBucket = async () => {
  const buckets = await client.bucket.getUserBuckets({
    address: process.env.ADDRESS || "",
    endpoint: "https://gnfd-testnet-sp-2.bnbchain.org",
  });
  if (!buckets) {
    console.log("bucket not found");
    return;
  }
  console.log(buckets);
};
