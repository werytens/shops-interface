import {
    myContract, 
    currentAccount
} from "../app.js";

export async function renderShops() {
    let shopCount;

    try {
        shopCount = await myContract.methods.getShopCount().call();
    } catch (error) {
        console.log(error);
    }

    const shopModal = document.querySelector(".shop_modal");
    let iElement;
    for (let index = 0; index < shopCount; index++) {
        iElement = document.createElement("div");
        iElement.innerHTML = `
        <div class = "shop_info">
            <div>Shop Number: ${index + 1}. City: ${await getInfoAboutShop(index)}.</div>
            <div class = "shopButton">Click To Open</div>
        </div>
        <div class = "shop_item_modal"">
            <div class = "sim_main_info">
                ${index}
            </div>
            <div class = "sim_close">
                X
            </div>
        </div>
        `;
        iElement.classList.add("shop_div");
        shopModal.append(iElement);
    }

    document.querySelectorAll(".shopButton").forEach(item => item.addEventListener("click", () => {
        let element = item.parentElement.parentElement.children[1];

        element.style.display = "flex";

        element.children[1].addEventListener("click", () => {
            element.style.display = "none";
        })
    }))
}

async function getInfoAboutShop(id) {
    try {
        const result = await myContract.methods.getInfoAboutShop(id).call();

        return result;
    } catch (error) {
        console.log(error);
    }
}