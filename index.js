// document.addEventListener("DOMContentLoaded", function () {
//     console.log("The DOM HAS Loaded")
// })

// console.log("Fire Away");
textFunction = () => {
    document.getElementById("text").textContent = "This is really cool!"
}

document.addEventListener("DOMContentLoaded", textFunction)