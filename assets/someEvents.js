import { registerTest } from "./modules/registration.js";
import { renderShops } from "./modules/shopFunctions.js";

















const regButton = document.querySelector("#regb");
const regClose = document.querySelector("#regc");

const regModal = document.querySelector("#reg_modal");
const regNave = document.querySelector("#reg");








document.addEventListener("DOMContentLoaded", async () => {
    await renderShops();
})


document.querySelector("#shops").addEventListener("click", () => {
    document.querySelector(".shop_modal").style.display = "block";
})
document.querySelector(".shop_modal_close").addEventListener("click", () => {
    document.querySelector(".shop_modal").style.display = "none";
})



regNave.addEventListener("click", () => {
    regModal.style.display = "flex";
})
regClose.addEventListener("click", () => {
    regModal.style.display = "none";
})











regButton.addEventListener("click", async () => {
    let regData = [document.querySelector(".reg_login").value,
        document.querySelector(".reg_password").value,
        document.querySelector(".reg_passwordrepeat").value,
        document.querySelector(".reg_city").value,
        document.querySelector(".reg_fcs").value];

    ;let returnedReg = await registerTest(regData);

    if (returnedReg != 0) {
        let regTitle = document.querySelector(".reg_title");

        regTitle.innerHTML = returnedReg.split("revert ")[1];
        regTitle.style.color = "red";

        setTimeout(() => {
            regTitle.innerHTML = "Registration";
            regTitle.style.color = "var(--title)";
        }, 2000);
    } else {
        regModal.style.display = "none";
        clearAllRegInputs();
    }

    
})

function clearAllRegInputs() {
    document.querySelectorAll(".reg_input").forEach((item) => {
        item.value = "";
    })
}   