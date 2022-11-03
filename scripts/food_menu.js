"use strict";
let menu = {
    drinks: [
        "Select a Drink",
        "Water", "Tea", "Sweet Tea",
        "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees: [
        "Select an Entree",
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate"
    ],
    desserts: [
        "Select a Dessert", "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};

window.onload = function () {
    document.getElementById("list").style.display = "none";
    const list = document.getElementById("list");
    const cat = document.getElementById("category");
    document.getElementById("category").onchange = function () {
        list.length = 0;
        if (cat.selectedIndex == 1) {
            for (let i = 0; i < menu.drinks.length; i++) {
                let option = document.createElement("option");
                option.text = menu.drinks[i];
                list.appendChild(option);
            }
            list.style.display = "inline-block";
        }
        else if (cat.selectedIndex == 2) {
            for (let i = 0; i < menu.entrees.length; i++) {
                let option = document.createElement("option");
                option.text = menu.entrees[i];
                list.appendChild(option);
                list.style.display = "inline-block";
            }
        }
        else if (cat.selectedIndex == 3) {
            for (let i = 0; i < menu.desserts.length; i++) {
                let option = document.createElement("option");
                option.text = menu.desserts[i];
                list.appendChild(option);
                list.style.display = "inline-block";

            }
        }
        else {
            list.style.display = "none";
        }
    }
}
