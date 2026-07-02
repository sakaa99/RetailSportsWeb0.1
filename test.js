var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight === "0px" || MenuItems.style.maxHeight === "") {
        MenuItems.style.maxHeight = "220px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}