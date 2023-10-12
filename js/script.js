const menuItems = document.getElementsByClassName("Elemento")

function Display(){
    for (let i = 0; i < menuItems.length; i++) {
        const element = menuItems[i];
        const displayActual = element.style.display;
        element.style.display = displayActual === "none" ? "flex" : "none";
    }
}