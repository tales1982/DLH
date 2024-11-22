//https://mainnet.infura.io/v3/5ac30a4f319944ac85e89ef79666afc2
var Web3 = require('web3')
var url = 'https://mainnet.infura.io/v3/eec0d3f10e904f379a97fbf1cee51cba'
var web3 = new Web3(url)
//console.log(web3)
//console.log(web3.eth.accounts.create());
address = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52'
/*
const get_eth_balance = async (web3, address) => {

    const balance = await web3.eth.getBalance(address);
  
    return balance;
  };

  get_eth_balance(web3, address);
*/  
  // Call the function to get the balance
  async function getBalanceAsync(address) {
    try {
      const balance = await web3.eth.getBalance(address);
      return web3.utils.fromWei(balance, 'ether');
    } catch (error) {
      throw new Error(`Error fetching balance: ${error}`);
    }
  }


  // Usage example: Call the async function and handle the result
getBalanceAsync(address)
.then(balance => {
  console.log(`Balance of ${address}: ${balance} ETH`);
})
.catch(error => {
  console.error(error);
});