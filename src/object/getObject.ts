import { client } from "../client";
const os = require("os");
const fs = require("fs");
const path = require("path");

export const getOneObject = async (bucketName: string, objectName: string) => {
  const object = await client.object.getObject({
    bucketName: bucketName,
    objectName: objectName,
    endpoint: "https://gnfd-testnet-sp-2.bnbchain.org",
  });

};
