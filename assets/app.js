import abi from "./modules/abi.js";

const contractAddress = "0x285019C98B93263b76ACdc2734Df0F84Eec0d362";

export let myContract, web3, accounts, currentAccount;

async function getAccounts() {
  web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
  accounts = await web3.eth.getAccounts();
  currentAccount = accounts[0];
}
getAccounts();

myContract = new web3.eth.Contract(abi, contractAddress);








































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
