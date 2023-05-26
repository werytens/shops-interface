const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
const abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_rateId",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_accept",
        "type": "bool"
      }
    ],
    "name": "acceptRate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_rateId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_rateComment",
        "type": "string"
      }
    ],
    "name": "addCommentToRate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_shopNumber",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_shopRate",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_rateComment",
        "type": "string"
      }
    ],
    "name": "addNewRate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_shopAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_city",
        "type": "string"
      }
    ],
    "name": "addNewShop",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "deleteShop",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_userLogin",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_userPassword",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_userPasswordRepeat",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_fcs",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_userCity",
        "type": "string"
      }
    ],
    "name": "registerUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "requestForAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_shopId",
        "type": "uint256"
      }
    ],
    "name": "requestForBuyer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "requestForSeller",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_requestId",
        "type": "uint256"
      }
    ],
    "name": "roleRequestAccept",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_requestId",
        "type": "uint256"
      }
    ],
    "name": "roleRequestClose",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "requestMapping",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "roleToRequest",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "requestIsOpen",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "shopMapping",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "number",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "city",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "userMapping",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "fcs",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "login",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "password",
        "type": "bytes32"
      },
      {
        "internalType": "string",
        "name": "role",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "city",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

let myContract, web3, accounts, currentAccount;

async function getAccounts() {
  web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
  accounts = await web3.eth.getAccounts();
  console.log(accounts);
  currentAccount = accounts[0];
}
getAccounts();

myContract = new web3.eth.Contract(abi, contractAddress);
console.log(myContract);

// //GET
//Функция получения числа из контракта
// async function getNumber() {
//   const result = await myContract.methods.retrieve().call(); //Обращаемся к методу (call - вызов без изменения состояния)
//   console.log("Результат:", result);
//   document.querySelector(".number").innerHTML = `Число в контракте: ${result}`;
// }

//SET
//Функция для внесения числа в контракт
// async function setNumber() {
//   const value = document.querySelector(".setNum").value;
//   const result = await myContract.methods
//     .store(value)
//     .send({ from: currentAccount }); //Обращаемся к методу (send - вызов с изменением состояния)
//   console.log("Transaction:", result);
// }

// Функция регистрации
export async function registerTest() {
  const result = await myContract.methods
    .registerUser("test", "test", "test2", "test", "test")
    .send({ from: currentAccount });
  
  console.log(result);
}
