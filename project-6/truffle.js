const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "https://rinkeby.infura.io/v3/af34c9269bc24513bb6ecec215b51f87";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    rinkeby:{
      provider: function(){return new HDWalletProvider("spirit supply whale amount human item harsh scare congress discover talent hamster",infuraKey) ;},
      network_id:'*',
      gas:4500000,
      gasPrice:1000000000,
    }
  }
};