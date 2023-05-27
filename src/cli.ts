#! /usr/bin/env node

require("dotenv").config();
import { Command } from "commander";
import { getBalance, transferBalance } from "./bank/bank";
import { getSpInfo, getSpList, getSpPrice } from "./sp/sp";
import { createBucket } from "./bucket/createBucket";

const program = new Command();

program.version("0.0.1").description("A CLI tool for Greenfield");

program
  .command("bucket")
  .description(
    "Support the bucket operation functions, including create/update/delete/head/list"
  )
  .addCommand(
    new Command("create")
      .description(
        "Create a new bucket and set a createBucketMsg to the storage provider.\n" +
          "The bucket name should be unique and the default visibility is private.\n" +
          "The command requires setting the primary SP address with --primarySP.\n" +
          "Examples:\n" +
          "# Create a new bucket called gnfd-bucket with public-read visibility\n" +
          "$ gnfd-cmd bucket create --visibility=public-read gnfd://gnfd-bucket"
      )
      .requiredOption("--name <name>", "Bucket name (required)")
      .option(
        "--visibility [visibility]",
        "Set the visibility of the bucket (default: private)"
      )
      .option(
        "--chargedQuota [chargedQuota]",
        "Indicate the read quota info of the bucket (default: 0)"
      )
      .action((options) => {
        console.log(`Options: ${JSON.stringify(options)}`);
        // Add your code here to create the bucket
        createBucket(options.name, options.visibility, options.chargedQuota);
      })
  )

  // update bucket visibility, charged quota or payment address
  // (1) gnfd-cmd bucket update --visibility=public-read gnfd://gnfd-bucket
  // (2) gnfd-cmd bucket update --chargedQuota 50000 gnfd://gnfd-bucket
  .addCommand(
    new Command("update")
      .description(
        "Update bucket visibility, charged quota, or payment address"
      )
      .option("--visibility [visibility]", "Bucket visibility")
      .option("--chargedQuota [chargedQuota]", "Bucket charged quota")
      .requiredOption("--name <name>", "Bucket name")
      .action((options) => {
        console.log(`Update command called: Name: ${options.name}`);
        if (options.visibility) {
          console.log(`Update visibility to: ${options.visibility}`);
          // Add your code here to update the visibility
        }
        if (options.chargedQuota) {
          console.log(`Update charged quota to: ${options.chargedQuota}`);
          // Add your code here to update the charged quota
        }
        // Add your code here for updating the bucket
        console.log(program.opts());
      })
  )

  // delete bucket
  .addCommand(
    new Command("delete")
      .description(
        "Send a deleteBucket txn to greenfield chain, the bucket must be empty before deleting"
      )
      .requiredOption("--name <name>", "Bucket name")
      .action((options) => {
        console.log(`Delete command called: Name: ${options.name}`);
        // Add your code here
      })
  )

  // head bucket
  .addCommand(
    new Command("head")
      .description(
        "send headBucket txn to chain and fetch bucket info on greenfield chain"
      )
      .requiredOption("--name <name>", "Bucket name")
      .action((options) => {
        console.log(`Head command called: Name: ${options.name}`);
        // Add your code here
      })
  )

  // list buckets
  .addCommand(
    new Command("ls")
      .description(" List the bucket names and bucket ids of the user.")
      .action(() => {
        console.log("List command called");
        // Add your code here
      })
  );

program
  .command("object")
  .description(
    "Support the object operation functions, including put/get/update/delete/head/list and so on"
  )
  .action(() => {
    console.log("Object command called");
    // Add your code here
  });

program
  .command("group")
  .description(
    "Support the group operation functions, including create/update/delete/head/head-member"
  )
  .action(() => {
    console.log("Group command called");
    // Add your code here
  });

program
  .command("crosschain")
  .description(
    "Support the cross-chain functions, including transfer and mirror"
  )
  .action(() => {
    console.log("Crosschain command called");
    // Add your code here
  });

program
  .command("bank")
  .description("Bank operations")
  .addCommand(
    new Command("transfer")
      .description("Transfer funds to an account in Greenfield")
      .requiredOption("--toAddress <address>", "Recipient address")
      .requiredOption("--amount <amount>", "Amount to transfer")
      .action((options) => {
        console.log(
          `Transfer command called: To: ${options.toAddress} Amount: ${options.amount}`
        );
        transferBalance(options.toAddress, options.amount);
      })
  )
  .addCommand(
    new Command("balance")
      .description("Query the balance of an account")
      .requiredOption("--address <address>", "Account address")
      .action((options) => {
        console.log(`Balance command called: Address: ${options.address}`);
        getBalance(options.address);
      })
  );

program
  .command("policy")
  .description("Support object policy and bucket policy operation functions")
  .action(() => {
    console.log("Policy command called");
    // Add your code here
  });

program
  .command("payment")
  .description("Support the payment operation functions")
  .action(() => {
    console.log("Payment command called");
    // Add your code here
  });

// list storage providers
// gnfd-cmd sp ls

// // get storage provider info
// gnfd-cmd sp head https://gnfd-testnet-sp-1.nodereal.io

// // get quota and storage price of storage provider:
// gnfd-cmd sp get-price https://gnfd-testnet-sp-1.nodereal.io

program
  .command("sp")
  .description("Support the storage provider operation functions")
  .addCommand(
    new Command("ls").description("List all storage providers").action(() => {
      getSpList();
    })
  )
  .addCommand(
    new Command("head")
      .description("Get storage provider info")
      .requiredOption("-ep, --endpoint <endpoint>", "Storage provider endpoint")
      .action((options) => {
        console.log(`Head command called: Endpoint: ${options.endpoint}`);
        getSpInfo(options.endpoint);
        // Add your code here
      })
  )
  .addCommand(
    new Command("get-price")
      .description("Get quota and storage price of storage provider")
      .requiredOption("--endpoint <endpoint>", "Storage provider endpoint")
      .action((options) => {
        console.log(`Get-price command called: Endpoint: ${options.endpoint}`);
        // Add your code here
        getSpPrice(options.endpoint);
      })
  );

program
  .command("create-keystore")
  .description("Create a new keystore file")
  .action(() => {
    console.log("Create-keystore command called");
    // Add your code here
  });

program.parse(process.argv);
