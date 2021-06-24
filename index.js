const open = document.getElementById("Add item");
const container = document.getElementById("toggle_modal");
const close = document.getElementById("modal_close");
const Obj = "";

const editItem = (index) => {
    // let editItem = JSON.parse(item);
    const items = JSON.parse(localStorage.getItem("items"));

    let editItem = items[index];
    editItem.index = index;
    localStorage.setItem("editItem", JSON.stringify(editItem));
}
const deleteItem = (index) => {
    const items = JSON.parse(localStorage.getItem("items"));
    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));
    window.location.href = "add.html";
}

const renderItems = () => {
    const items = JSON.parse(localStorage.getItem("items"));
    let html = "";
    items.forEach((item, index) => {
        html += `
        <div class="grid-design">
            <div class="info">
                <p id="title">${item.product}</p>
                <p id="text">${item.description}</p>
                <p id="amount">${item.quantity}</p>
            </div>
            <div class="click">
                 <button onclick=deleteItem(${index}) id = "Delete"> Delete </button>
             <a href="edit.html"> <button onclick=editItem(${index}); id = "edit" > Edit </button></a>
            </div>
        </div>
        
        `
    })
    let itemsContainer = document.getElementById("add_Arr");
    itemsContainer.innerHTML = html;
}
// show modal
const showModal = () => {
    document.getElementById("toggle_modal").style.visibility = "visible";
}

// close Modal
const closeModal = () => {
    document.getElementById("toggle_modal").style.visibility = "hidden";
}

const clearInput = () => {
    document.getElementById("product_type").value = "";
    document.getElementById("quantity_type").value = "";
    document.getElementById("description_type").value = "";
}


const add_item = () => {
    document.getElementById("toggle_modal").style.visibility = "hidden";
    let product_Value = document.getElementById("product_type").value;
    let Quantity_Value = document.getElementById("quantity_type").value;
    let Description_Value = document.getElementById("description_type").value;

    if (product_Value == "" && Quantity_Value == "" && Description_Value == "") {
        alert("Enter valid values")
    }
    else {
        let Obj = {
            product: product_Value,
            quantity: Quantity_Value,
            description: Description_Value,
        }
        if (localStorage.getItem("items")) {
            let items = JSON.parse(localStorage.getItem("items"));
            items.push(Obj);
            localStorage.setItem("items", JSON.stringify(items));
        } else {
            let Array_data = []
            Array_data.push(Obj);
            localStorage.setItem("items", JSON.stringify(Array_data));
        }
    }
    renderItems();
    clearInput();
}

renderItems();



