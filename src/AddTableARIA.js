export const AddTableARIA = (table) => {
  const allTables = table.querySelectorAll("table");
  for (let i = 0; i < allTables.length; i++) {
    allTables[i].setAttribute("role", "table");
  }
  const allCaptions = table.querySelectorAll("caption");
  for (let i = 0; i < allCaptions.length; i++) {
    allCaptions[i].setAttribute("role", "caption");
  }
  const allRowGroups = table.querySelectorAll("thead, tbody, tfoot");
  for (let i = 0; i < allRowGroups.length; i++) {
    allRowGroups[i].setAttribute("role", "rowgroup");
  }
  const allRows = table.querySelectorAll("tr");
  for (let i = 0; i < allRows.length; i++) {
    allRows[i].setAttribute("role", "row");
  }
  const allCells = table.querySelectorAll("td");
  for (let i = 0; i < allCells.length; i++) {
    allCells[i].setAttribute("role", "cell");
  }
  const allHeaders = table.querySelectorAll("th");
  for (let i = 0; i < allHeaders.length; i++) {
    allHeaders[i].setAttribute("role", "columnheader");
  }
};
