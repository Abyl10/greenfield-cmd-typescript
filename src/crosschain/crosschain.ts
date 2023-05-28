import { client } from "../client";

export const transferOutCrossChain = async (
  toAddress: string,
  amount: string
) => {
  const transfer = await client.crosschain.transferOut({
    from: process.env.ADDRESS || "",
    to: toAddress,
    amount: {
      amount: amount,
      denom: "BNB",
    },
  });

  const simulateInfo = await transfer.simulate({
    denom: "BNB",
  });

  const res = await transfer.broadcast({
    denom: "BNB",
    gasLimit: Number(simulateInfo?.gasLimit),
    gasPrice: simulateInfo?.gasPrice || "5000000000",
    payer: process.env.ADDRESS || "",
    privateKey: `0x${process.env.PRIVATE_KEY}`,
    granter: "",
  });

  if (res.code === 0) {
    console.log("transfer out success");
  }
};
