import {
    myContract, 
    currentAccount
} from "../app.js";

export async function registerTest([login, password, repeatRassword, FCS, city]) {
    try {
        const result = await myContract.methods.registerUser(login, password, repeatRassword, FCS, city).send({ from: currentAccount, gas: 3000000});

        return 0;
    } catch (error) {

        return String(error).split(":")[String(error).split(":").length - 1].trim();
    }
}