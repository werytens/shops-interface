// Import Functions

import { registerFunction } from "./pages/register.js";
import { usersFunction } from "./pages/users.js";
import { shopsFunction } from "./pages/shops.js";
import { profileFunction } from "./pages/profile.js";

// Buttons

const registerButton = document.getElementById("register");
const usersButton = document.getElementById("users");
const shopsButton = document.getElementById("shops");
const profileButton = document.getElementById("profile");

// Start Functions

registerButton.addEventListener("click", async () => {
    await registerFunction();
})

usersButton.addEventListener("click", async () => {
    await usersFunction();
})

shopsButton.addEventListener("click", async () => {
    await shopsFunction();
})

profileButton.addEventListener("click", async () => {
    await profileFunction();
})
