# Dates Supply Chain

## Description
Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

### Actors
* Farmer
* Distributor
* Retailer
* Consumer

### Actions
* **Farmer** – harvest dates palletes, process dates palletes, pack dates bags, add dates palettes, ship dates palettes
* **Distributor** – buy dates palettes
* **Retailer** – receive dates palettes
* **Consumer** – buy dates items 

## UMLs

The following are the UMLs for Dates supply chain:

### Activity Diagram

![Activity Diagram](images/ActivityDiagram.png)

### Sequence Diagram
![Sequence Diagram](images/SequenceDiagram.png)

### State Diagram
![State Diagram](images/StateDiagram.png)

### Class Diagram
![Data Mode Diagram](images/classdiagram.png)

## Prerequisites

* Truffle v5.0.21 (core: 5.0.21)
* Solidity v0.5.0 (solc-js)
* Node v10.14.1
* Web3.js v1.0.0-beta.37

## How To Start
1. Clone this repository
```
git clone https://github.com/s2010/Architect-a-Blockchain-Supply-Chain-Solution---Part-AB.git
```
2. Change directory to ```project6``` folder and install all requisite npm packages:
```
cd project6
npm install
```
3. Launch ganache:
```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```
4. In a separate terminal window, Compile smart contracts:
```
truffle compile 
```
5. Migrate smart contracts to the locally running blockchain, ganache-cli:
```
truffle migrate 
```
6. Test smart contracts:
```
truffle test 
```
7. In a separate terminal window, launch the DApp:
```
npm run dev
```

## Contracts deployment output:

Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6acfc0


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x2bff36c6cfc9279d0a74644d911ec969e7a5b6cc9a83eb8438f2bacec79941e2
   > Blocks: 2            Seconds: 17
   > contract address:    0x9985526fde1aC7C7816200A38a0eCe6b9045D026
   > block number:        4853958
   > block timestamp:     1564939322
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             0.152845512500230585
   > gas used:            261393
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.000261393 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.000261393 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0x4c320ef1e3deba69f0fd9c0971415c55ef4ae30bfb2405194cde1bf3ff4ee480
   > Blocks: 0            Seconds: 9
   > contract address:    0x9145EE18eB0b50B69A3F59608Ac0bf13Da01366b
   > block number:        4853960
   > block timestamp:     1564939352
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             0.152426859500230585
   > gas used:            376630
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.00037663 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0x0646a098cd4665c0a7b58c55a1067f531ce7e081b8f1143536334df5c8eca20c
   > Blocks: 1            Seconds: 10
   > contract address:    0xc6E7516E8C696438C3510ca0d1911c7203C06DF9
   > block number:        4853961
   > block timestamp:     1564939367
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             0.152050357500230585
   > gas used:            376502
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.000376502 ETH


   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0xd18e5ac20d084fca0e6d6f1ce20d8d7bc596860dc083e80cf408942035a87dae
   > Blocks: 1            Seconds: 21
   > contract address:    0x39ad513586A69b4E74CD048861589189e91D7C48
   > block number:        4853963
   > block timestamp:     1564939397
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             0.151673791500230585
   > gas used:            376566
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.000376566 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0x886c95d88c10849450aef1dc0dddc226b38765f80b36297b415eda5eee3f29c0
   > Blocks: 0            Seconds: 5
   > contract address:    0x2dF7275332b9B0811E14EdA58114DD108F5Ee724
   > block number:        4853964
   > block timestamp:     1564939412
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             0.151297161500230585
   > gas used:            376630
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.00037663 ETH


   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0x354e1fb932140d30a00a5227c54718872c417c54649bdb785a15df628fa47795
   > Blocks: 1            Seconds: 21
   > contract address:    0x87e104b5F49aF552A183B74843799451bD1a4657
   > block number:        4853966
   > block timestamp:     1564939442
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             0.148226766500230585
   > gas used:            3070395
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.003070395 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.004576723 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.004838116 ETH
