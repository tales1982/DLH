// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Variables {
    // State variables are stored on the blockchain.
    string public text = "Hello";
    uint public num = 123; 

    //To change them, SC redeplyment is required.

    function readState() public view returns(string memory){
        return text;
    }

    function changeState() public {
        text = "Hello New State";
    }

    //function doSomething() public {
    function doSomething() public view returns(uint){

        // Local variables are not saved to the blockchain.
        uint i_local_var = 966;
        uint j_local_var = 56;

        uint result = i_local_var + j_local_var;

        return result;
    }
    // Global variables are used mainly to to provide information about the blockchain.
    //    address sender = msg.sender; // address of the caller
      //  uint timestamp = block.timestamp; // Current block timestamp
        



}