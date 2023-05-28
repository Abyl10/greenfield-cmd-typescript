import { IGetCreateBucketApproval } from "@bnb-chain/greenfield-chain-sdk/dist/esm/types";
import { client } from "../client";
import { selectSpForBucket } from "../sp/sp";
import { VisibilityType } from "@bnb-chain/greenfield-cosmos-types/greenfield/storage/common";

export const createBucket = async (
  name: string,
  visibility: string | undefined,
  chargedQuota: string | undefined
) => {
  const selectedSp = await selectSpForBucket();
  console.log(name, visibility, chargedQuota, selectedSp);
  const bucket = await client.bucket.createBucket({
    bucketName: name,
    creator: process.env.ADDRESS || "",
    visibility:
      visibility?.toLowerCase() === "public"
        ? "VISIBILITY_TYPE_PUBLIC_READ"
        : "VISIBILITY_TYPE_PRIVATE",
    chargedReadQuota: chargedQuota ? chargedQuota : "0",
    spInfo: selectedSp,
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
    privateKey: `0x${process.env.PRIVATE_KEY}`,
  });

  if (res.code === 0) {
    console.log("create bucket success");
  }
};
