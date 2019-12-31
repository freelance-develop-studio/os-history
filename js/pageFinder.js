
function search() {
    $('#content').load(PAGE_MAP.get('SEARCH_RESULT').pageUrl, function() {
        const searchText = document.getElementById("search_input").value.toUpperCase();
        const searchTable = document.getElementById("searchResultTable");
        const osNames = Array.from(PAGE_MAP.keys());
        let findAnyResult = false;

        osNames.forEach(osName => {
            if (osName.includes(searchText)) {
                const pageSetting = PAGE_MAP.get(osName);
                searchTable.innerHTML += pageSetting.searchTableRow;
                findAnyResult = true;
            }
        });

        if (findAnyResult === false) {
            searchTable.innerHTML = NOT_FOUND_SEARCH_TABLE_ROW;
        }
    });
}