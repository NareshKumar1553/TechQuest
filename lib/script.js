function addRow() {
    console.log("addRow() called");
    var form = document.getElementById("my-form");
    var name = form.elements["item-name"].value;

    var table = document.getElementById("my-table");
    var newRow = table.insertRow(1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    // var cell6 = newRow.insertCell(5);
    cell1.innerHTML = name;
    cell2.innerHTML = "100";
    cell3.innerHTML = "2";
    cell4.innerHTML = "10";
    cell5.innerHTML = "210";
    // cell6.innerHTML = "";
    cell1.colSpan = 5;
    cell2.colSpan = 2;
    cell3.colSpan = 2;
}

    function readFormData() {
        // Get a reference to the form
        console.log("readFormData() called");
        var form = document.getElementById("my-form");
        console.log(form);
        // Get the values of the form fields
        var name = form.elements["item-name"].value;

        console.log(name);
    }