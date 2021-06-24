let editItem = JSON.parse(localStorage.getItem("editItem"));

const productType = document.getElementById("product_type");
const quantityType = document.getElementById("quantity_type");
const descriptionType = document.getElementById("description_type");

productType.value = editItem.product;
quantityType.value = editItem.quantity;
descriptionType.value = editItem.description;

const save = () =>{
    editItem.product = productType.value;
    editItem.quantity = quantityType.value;
    editItem.description = descriptionType.value;
    const items = JSON.parse(localStorage.getItem("items"));
    items[editItem.index] = editItem;
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("editItem", null);
    window.location.href = "add.html";

}