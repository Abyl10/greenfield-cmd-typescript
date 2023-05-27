#! /usr/bin/env node
import { Command } from "commander";

const program = new Command();

program.version("0.0.1").description("A CLI tool for Greenfield");

program
  .command("bucket")
  .description(
    "Support the bucket operation functions, including create/update/delete/head/list"
  )
  .action(() => {
    console.log("Bucket command called");
    // Add your code here
  });

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
  .description("Support the bank functions")
  .action(() => {
    console.log("Bank command called");
    // Add your code here
  });

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

program
  .command("sp")
  .description("Support the storage provider operation functions")
  .action(() => {
    console.log("SP command called");
    // Add your code here
  });

program
  .command("create-keystore")
  .description("Create a new keystore file")
  .action(() => {
    console.log("Create-keystore command called");
    // Add your code here
  });

program.parse(process.argv);
