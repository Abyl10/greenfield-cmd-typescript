import { client } from "../client";

export const deleteBucket = async (name: string) => {
  const bucket = await client.bucket.deleteBucket({
    bucketName: name,
    operator: process.env.ADDRESS || "",
  });

  const simulateInfo = await bucket.simulate({
    denom: "BNB",
  });

  const res = await bucket.broadcast({
    denom: "BNB",
    gasLimit: Number(simulateInfo?.gasLimit),
    gasPrice: simulateInfo?.gasPrice || "5000000000",
    payer: process.env.ADDRESS || "",
    privateKey: `0x${process.env.PRIVATE_KEY}`,
    granter: "",
  });

  if (res.code === 0) {
    console.log("delete bucket success");
  }
};
