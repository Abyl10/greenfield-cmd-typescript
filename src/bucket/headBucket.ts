import { client } from "../client";

export const getHeadBucket = async (name: string) => {
  const bucket = await client.bucket.headBucket(name);
  if (!bucket) {
    console.log("bucket not found");
    return;
  }
  console.log(bucket);
};
