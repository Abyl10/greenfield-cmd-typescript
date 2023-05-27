import { Client } from "@bnb-chain/greenfield-chain-sdk";

const rpcAddr = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443";
const chainId = "greenfield_5600-1";

const client = Client.create(rpcAddr, chainId);

export { client };
