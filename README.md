# Greenfield CMD TypeScript

This repository contains a command-line tool developed in TypeScript for various tasks. It provides a set of commands that you can execute after following the installation steps below.

## Installation

To run this project, you need to have Git and Node.js installed on your machine.

1. Clone the repository by running the following command in your terminal:
```bash
git clone https://github.com/Abyl10/greenfield-cmd-typescript.git
```

2. Navigate into the project directory:
```bash
cd greenfield-cmd-typescript
```

3. Install the project dependencies:
```bash
npm install
```

## Build

After the installation process is complete, you need to build the project before running any commands. To build the project, run the following command:
```bash
npm run build
```
You may see this errors after building: 
```bash

Found 10748 errors in 24 files.

Errors  Files
     1  node_modules/.pnpm/@bnb-chain+greenfield-chain-sdk@0.2.0/node_modules/@bnb-chain/greenfield-chain-sdk/dist/esm/types/common.d.ts:2
  1062  node_modules/.pnpm/@bnb-chain+greenfield-cosmos-types@0.4.0-alpha.9/node_modules/@bnb-chain/greenfield-cosmos-types/cosmos/bank/v1beta1/query.d.ts:421
```
but this is a typescript error from ```@bnb-chain+greenfield-chain-sdk``` library. These errors will not affect to our cli commands. 

Go to ```.env``` file and write your metamask address and primary key: 
```bash
ADDRESS="0x..."
PRIVATE_KEY=""
```


## Usage

Once the project has been successfully built, you can run the command `gnfd-cmd` to see the list of available commands. Execute the following command in your terminal:
```bash
gnfd-cmd
```
if it is not working, you can try: 
```bash
npm i -g 

gnfd-cmd
``` 

This will display a list of available commands that you can use: 
```bash
Usage: gnfd-cmd [options] [command]

A CLI tool for Greenfield

Options:
  -V, --version                          output the version number
  -h, --help                             display help for command

Commands:
  bucket                                 Support the bucket operation functions, including create/update/delete/head/list
  object                                 Support the object operation functions, including put/get/update/delete/head/list and so on
  group                                  (not implemented) Support the group operation functions, including create/update/delete/head/head-member
  crosschain                             Support the cross-chain functions, including transfer and mirror
  bank                                   Bank operations
  policy                                 (not implemented) Support object policy and bucket policy operation functions
  payment                                (not implemented) Support the payment operation functions
  sp                                     Support the storage provider operation functions
  (not <implemented)> <create-keystore>  Create a new keystore file
  help [command]                         display help for command
``` 



## Contributing

Contributions to this project are welcome. Feel free to open issues or submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License. Feel free to use and modify it according to your needs.
