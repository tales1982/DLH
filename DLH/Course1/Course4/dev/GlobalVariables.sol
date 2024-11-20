pragma solidity ^0.8.13;

contract BlobVariables {
    
    //function doSomething() public {
    function getTimestamp() public view returns(uint){
      uint timestamp = block.timestamp; // Current block timestamp
        
      return timestamp;
  
    }

    function getSender() public view returns(address){
        address sender = msg.sender;
        return sender;
    }

    function getBlockNumber() public view returns(uint){

        uint block_nr = block.number;
        return block_nr;
    }


    
}