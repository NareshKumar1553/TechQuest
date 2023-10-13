var ItemName = [];
var ItemPrice = 0;
var TotalQuantity = 0;
var totalItems = 0;
var CurrentQuantity = 0;
var TotalSub = 0;
var TotalTax = 0;
function addRow() {
    console.log("addRow() called");
    var table = document.getElementById("my-table");
    var form = document.getElementById("my-form");
    var name = form.elements["item-name"].value;
    var quantity = form.elements["item-qty"].value;
    var Items = document.getElementById("NoItem");
    var NETAmount = document.getElementById("NETAmount");
    var NumberOfQuantity = document.getElementById("NoQuantity");
    var SubTotal = document.getElementById("subTotal");
    var tax = document.getElementById("tax");
    if(name == "") {
        alert("PLEASE ENTER ITEM NAME");
        return;
    }
    if(quantity == "") {
        alert("PLEASE ENTER THE NUMBER OF ITEMS");
        return;
    }
    if(isNaN(quantity)) {
        alert("PLEASE ENTER A VALID NUMBER");
        return;
    }
    if(ItemName.includes(name)) {
        alert("ITEM ALREADY EXISTS");
        return;
    }
    ItemName.push(name);

    let Price = 100*quantity;
    
    TotalQuantity = TotalQuantity + Number(quantity);
    TotalTax = ItemName.length * 10;
    ItemPrice = ItemPrice + Price;
    TotalSub = ItemPrice;

    SubTotal.textContent=ItemPrice;
    tax.textContent = TotalTax;
    Items.textContent=ItemName.length;
    NumberOfQuantity.textContent=TotalQuantity;
    NETAmount.textContent=ItemPrice+TotalTax;

    console.log("SUB TOTAL = "+TotalSub);
    console.log("TOTAL PRICE = "+ItemPrice);

    var newRow = table.insertRow(1); 
    var itemName = newRow.insertCell(0); // name
    var itemPrice = newRow.insertCell(1); // price
    var itemQty = newRow.insertCell(2); // qty
    var itemTax = newRow.insertCell(3); // tax
    var itemTotal = newRow.insertCell(4); // total
    var delete_row = newRow.insertCell(5); // delete

    
    delete_row.innerHTML = "<button onclick='deleteRow(this);removeDetails(CurrentQuantity)' class='button-delete'>Delete</button>";
    
    itemName.innerHTML = name;
    itemPrice.innerHTML = "100";
    itemQty.innerHTML = quantity;
    itemTax.innerHTML = "10";
    itemTotal.innerHTML = Price + 10;

    itemName.colSpan = 5;
    itemPrice.colSpan = 2;
    itemQty.colSpan = 2;
    
    form.reset();
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    CurrentQuantity = row.cells[2].innerHTML;
  }

function removeDetails(IQuantity){
    console.log("removeDetails() called");

    ItemName.pop();

    let Price = 100*IQuantity;

    console.log("CURRENT QUANTITY= "+IQuantity);

    console.log("SUB TOTAL = "+TotalSub);

    var Items = document.getElementById("NoItem");
    var NETAmount = document.getElementById("NETAmount");
    var NumberOfQuantity = document.getElementById("NoQuantity");
    var SubTotal = document.getElementById("subTotal");
    var tax = document.getElementById("tax");

    TotalTax -= 10;
    tax.textContent = TotalTax;

    TotalSub -= Price
    SubTotal.textContent=TotalSub;

    Items.textContent=ItemName.length;

    console.log("TOTAL PRICE = "+ItemPrice);

    TotalQuantity-=IQuantity
    NumberOfQuantity.textContent=TotalQuantity;

    ItemPrice -= (Price);
    NETAmount.textContent=ItemPrice+TotalTax;

    console.log("TOTAL PRICE = "+ItemPrice);
}
function href(a){
    console.log("href called");
    console.log(a);
    window.location.href = a;
}