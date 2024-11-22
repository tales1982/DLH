// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.10;
contract NonPayableFunction {


  uint count = 0; //state variable
  string count_times = "first";

// these function called nnon-payable, can read and modifies state variables
    function increment() public returns(uint){
        count += 1;
        return count;  
    }


// --> now how to use view to read values:

    /*function getCount() public view returns(uint){
        return count;
    }*/


    function changeCountName() public returns(string memory){
        count_times = "count: ";
        return count_times;
    }


}