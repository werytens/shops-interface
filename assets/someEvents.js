import { registerTest } from "./app.js";

const regButton = document.querySelector("#regb");
const regModal = document.querySelector("#reg_modal");
const regNave = document.querySelector("#reg");

regNave.addEventListener("click", () => {
    regModal.style.display = "flex";
})
regButton.addEventListener("click", async () => {
    let regData = [document.querySelector(".reg_login"),
        document.querySelector(".reg_password"),
        document.querySelector(".reg_passwordrepeat"),
        document.querySelector(".reg_city"),
        document.querySelector(".reg_fcs")]


    regModal.style.display = "none";

    console.log(regData);

    await registerTest();
})
