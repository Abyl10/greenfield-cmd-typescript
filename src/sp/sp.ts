import { client } from "../client";
import { SecondarySpStorePrice } from "@bnb-chain/greenfield-cosmos-types/greenfield/sp/types";

export const getSpList = async () => {
  const sps = await client.sp.getStorageProviders();
  if (!sps) {
    console.log("Error: no storage providers found");
  }
  for (let i = 0; i < sps.length; i++) {
    console.log(
      `sp[${i}]: operator-address:${sps[i].operatorAddress}, endpoint:${sps[i].endpoint}, Status:${sps[i].status}`
    );
  }
};

export const getSpInfo = async (endpoint: string) => {
  const sps = await client.sp.getStorageProviders();
  if (sps.length === 0) {
    console.log("Error: no storage providers found");
    return;
  }
  const sp = sps.find((v) => v.endpoint === endpoint);
  if (!sp) {
    console.log("Error: no storage provider found");
    return;
  }
  console.log(sp);
};

// get bucket read quota price: 0.087  wei/byte
// get bucket storage price: 0.048  wei/byte

export const getSpPrice = async (endpoint: string) => {
  console.log("getSpPrice", endpoint);
  const price: SecondarySpStorePrice | undefined =
    await client.sp.getStoragePriceByTime(endpoint);
  console.log(price);
};

export const selectSpForBucket = async (): Promise<{
  endpoint: string;
  primarySpAddress: string;
  sealAddress: string;
  secondarySpAddresses: string[];
}> => {
  const sps = await client.sp.getStorageProviders();
  const finalSps = (sps ?? []).filter(
    (v) => v?.description?.moniker !== "QATest"
  );
  const selectIndex = 0;
  const secondarySpAddresses = [
    ...finalSps.slice(0, selectIndex),
    ...finalSps.slice(selectIndex + 1),
  ].map((item) => item.operatorAddress);

  const selectSpInfo = {
    endpoint: finalSps[selectIndex].endpoint,
    primarySpAddress: finalSps[selectIndex]?.operatorAddress,
    sealAddress: finalSps[selectIndex].sealAddress,
    secondarySpAddresses,
  };

  return selectSpInfo;
};
