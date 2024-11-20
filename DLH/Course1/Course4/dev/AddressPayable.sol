pragma solidity ^0.7.0;

contract HelloWorldContract {

        function transferFund(address payable receiver, uint amount) payable external {

                address newAddress = receiver;
                receiver.transfer(amount); // OK
                //newAddress.transfer(amount); // shows an error

        }
}