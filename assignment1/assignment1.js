

document.getElementById("createTable").addEventListener("click", function() {
  let rows = document.getElementById("rowInput").value || 15;
  let columns =  document.getElementById("columnInput").value || 15;
  let table = document.createElement("table");
  let colTitle = document.createElement("tr");

  document.getElementById("tableContainer").innerHTML = "";
  
  for (let i = 0; i<= columns; i++) {
    let cell = document.createElement("th");

    /*if (i == 0)
    {
      cell.innerHTML = "&#127773;";
    }
    else if (i > 0)
    {
      cell.innerHTML = i;
    }*/

    //trying conditional operator
    let filter = (i == 0) ? cell.innerHTML = "&#127773;" : cell.innerHTML = i;
    //console.log(filter);
    colTitle.appendChild((cell));
    table.appendChild(colTitle);
  }
  document.body.appendChild(table);

  for (let i = 1; i <= rows; i++) {
    let row = document.createElement("tr");
    let rowTitle = document.createElement("th");

    rowTitle.textContent = i;
    row.appendChild(rowTitle);

    for (let j = 1; j <= columns; j++) {
        let cell = document.createElement("td");
        cell.textContent = i +" "+ " " +"x" +" "+ j + " = " + i * j;
        row.appendChild(cell);
      }
    table.appendChild(row);
  }

  document.getElementById("tableContainer").appendChild(table);
});
