import { client } from "../client";

export const mirrorBucket = async (id: string) => {
  const bucket = await client.crosschain.mirrorBucket({
    operator: process.env.ADDRESS || "",
    id: id,
  });

  const simulateInfo = await bucket.simulate({
    denom: "BNB",
  });

  const res = await bucket.broadcast({
    denom: "BNB",
    gasLimit: Number(simulateInfo?.gasLimit),
    gasPrice: simulateInfo?.gasPrice || "5000000000",
    payer: process.env.ADDRESS || "",
    granter: "",
    privateKey: `0x${process.env.PRIVATE_KEY}` || `0x`,
  });

  console.log(
    `mirror bucket with id ${id} succ, txHash: ${res.transactionHash}`
  );
};
