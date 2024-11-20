// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.10;
contract PayableFunction {

  address private owner;
  uint balance = 0;
// Payable function that allows other contracts to send ether to this contract.



   function deposit () payable public{
    balance += msg.value;//getting value of msg.
  } 


function getOwner() public view returns (address) {    
        return owner;
    }
  

  function balanceOfAccoutn() public view returns(uint256){

      return owner.balance;
  }


  function getBalanceOfSC() public view returns (uint256) {
        return address(this).balance;
    }

 
}