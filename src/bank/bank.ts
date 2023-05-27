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
  console.log(process.env.ADDRESS);
  const transferTx = await client.account.transfer(msgSend);

  const simulateInfo = await transferTx.simulate({
    denom: "BNB",
  });

  console.log(transferTx);
  console.log(simulateInfo);
};

export const getBalance = async (address: string) => {
  const queryBalanceRequest: QueryBalanceRequest = {
    address: address,
    denom: "BNB",
  };

  const bal = await client.account.getAccountBalance(queryBalanceRequest);
  console.log(`${bal.balance?.amount}  ${bal.balance?.denom}`);
};
