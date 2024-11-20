pragma solidity ^0.8.13;

contract Functions {

	
	uint n1 = 2;//state variable1
    uint n2 = 4;//state variable2
 
   function getResultSumProd() public view returns(uint product, uint sum){
      product = n1 * n2;
      sum = n1 + n2;
	  return(product, sum);
   }

    //In pure, promises cannot change the state variable!!

    function getResultPure() public pure returns(uint product, uint sum){

     //try to read state variable from pure functions.

      //n1 =2;//Function cannot declared as pure because this expression potentially changes the state variable
      uint nr1 = 2;
      uint nr2 = 4;

      product = nr1 * nr2;
      sum = nr1 + nr2;
   }




    //set and get function
    //public enables visibility so that we can call this outside contract

    //view means, values are only read not to modify
    function getResult() public view returns(uint){
        uint a = 1; // local variable
        uint b = 2;
        uint result = a + b;
        return result;
       
    }





    	
	    // Functions can return multiple values.
	
    function returnManyVariables() public pure returns (uint, bool, uint){
        return (1, true, 2);
    }
  
    function namedVariables() public pure returns ( uint x, bool b, uint y){
            return (1, true, 2);
        }



}

