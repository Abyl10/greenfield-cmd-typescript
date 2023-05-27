import { Client } from "@bnb-chain/greenfield-chain-sdk";

const rpcAddr = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443";
const chainId = "5600";

const client = Client.create(rpcAddr, chainId);

export { client };
