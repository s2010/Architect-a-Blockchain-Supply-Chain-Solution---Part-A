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
git clone https://github.com/RusPosevkin/coffee-supply-chain.git
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
