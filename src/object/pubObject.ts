import { client } from "../client";
import { createReadStream, readFileSync } from "fs";
import { join } from "path";

export const putObject = async (
  filePath: string,
  bucketName: string,
  objectName: string
) => {
  //   const file = readFileSync(filePath, "utf-8");
  const stream = createReadStream(filePath) as unknown;
  if (!stream) {
    console.log("file not found");
    return;
  }
};
