// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.8.0;

contract C {

    uint private data;

    function I_am_Private_Function(uint a) private pure returns(uint b) { 
        return a + 1; 
        }
    function I_am_Not_Private_Function(uint a) public pure returns(uint b) { 
        return a + 1; 
        }
    function setData(uint a) public {
         data = a; 
        }
    function getData() public view returns(uint) { 
        return data; 
        }
    function I_am_Internal_Function(uint a, uint b) internal pure returns (uint) { 
        return a + b; 
        }
}

// This will not compile. To compile comment local variables row 31-33
contract D {
    function readData() public {
        C c = new C(); // creation of the object for contract C
      
        c.setData(3);
       //local = c.getData();
       //local = c.compute(3, 5); // error: member `compute` is not visible
       //uint local = c.I_am_Private_Function(7); // error: member `f` is not visible
    }
}

contract R {
    C c = new C();
     uint local = c.getData();

    //Check if you can call an internal function 
  //  uint from_internal = c.I_am_Internal_Function(3, 5); // error: member `I_am_Internal_Function` is not visible
    
    
    //check if you can call a private function
   //  uint local = c.I_am_Private_Function(7); // error: member `I_am_Private_Function` is not visible
    
}



//Inheritance case!. Contract C is inherented in E.

contract E is C {
    function g() public {
       // C c = new C();
        uint val = I_am_Internal_Function(3, 5); // access to the internal member (from derived to parent contract)
        
    }
}

/*Inherent contract and access to the public function.

contract F is C {

    uint local = I_am_Not_Private_Function(7);
    uint local_compute = compute(1, 9); //we can access "internal functions" as we inherit the contract
}
*/
