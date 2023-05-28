import { client } from "../client";
import { MsgSend } from "@bnb-chain/greenfield-cosmos-types/cosmos/bank/v1beta1/tx";
import { QueryBalanceRequest } from "@bnb-chain/greenfield-cosmos-types/cosmos/bank/v1beta1/query";

export const transferBalance = async (toAddress: string, amount: string) => {
  const msgSend: MsgSend = {
    fromAddress: process.env.ADDRESS!,
    toAddress: toAddress,
    amount: [
      {
        denom: "BNB",
        amount: amount,
      },
    ],
  };
  const transferTx = await client.account.transfer(msgSend);

  const simulateInfo = await transferTx.simulate({
    denom: "BNB",
  });

  const res = await transferTx.broadcast({
    gasLimit: Number(simulateInfo?.gasLimit),
    gasPrice: simulateInfo?.gasPrice || "5000000000",
    payer: process.env.ADDRESS || "",
    granter: "",
    privateKey: `0x${process.env.PRIVATE_KEY}`,
    denom: "BNB",
  });

  if (res.code === 0) {
    console.log("transfer success");
    return;
  }
  console.log("transfer failed");
};

export const getBalance = async (address: string) => {
  const queryBalanceRequest: QueryBalanceRequest = {
    address: address,
    denom: "BNB",
  };

  const bal = await client.account.getAccountBalance(queryBalanceRequest);
  console.log(`${bal.balance?.amount}  ${bal.balance?.denom}`);
};
