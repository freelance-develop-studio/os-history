const linkMap = new Map();
linkMap.set("WINDOWS 3", '<tr><td><a href="#" onclick="loadPage(\'windows3\')">Windows 3</a></td></tr>');
linkMap.set("WINDOWS 95", '<tr><td><a href="#" onclick="loadPage(\'windows95\')">Windows 95</a></td></tr>');
linkMap.set("WINDOWS 98", '<tr><td><a href="#" onclick="loadPage(\'windows98\')">Windows 98</a></td></tr>');
linkMap.set("WINDOWS 2000", '<tr><td><a href="#" onclick="loadPage(\'windows2000\')">Windows 2000</a></td></tr>');
linkMap.set("WINDOWS XP", '<tr><td><a href="#" onclick="loadPage(\'windowsXP\')">Windows XP</a></td></tr>');
linkMap.set("WINDOWS Vista", '<tr><td><a href="#" onclick="loadPage(\'windowsVista\')">Windows Vista</a></td></tr>');
linkMap.set("WINDOWS 7", '<tr><td><a href="#" onclick="loadPage(\'windows7\')">Windows 7</a></td></tr>');
linkMap.set("WINDOWS 8", '<tr><td><a href="#" onclick="loadPage(\'windows8\')">Windows 8</a></td></tr>');
linkMap.set("WINDOWS 10", '<tr><td><a href="#" onclick="loadPage(\'windows10\')">Windows 10</a></td></tr>');
linkMap.set("LINUX", '<tr><td><a href="#" onclick="loadPage(\'linux\')">Linux</a></td></tr>');
linkMap.set("MAC OS CHEETAH", '<tr><td><a href="#" onclick="loadPage(\'macOsCheetah\')">Mac Os Cheetah</a></td></tr>');
linkMap.set("MAC OS PUMA", '<tr><td><a href="#" onclick="loadPage(\'macOsPuma\')">Mac Os Puma</a></td></tr>');
linkMap.set("MAC OS JAGUAR", '<tr><td><a href="#" onclick="loadPage(\'macOsJaguar\')">Mac Os Jaguar</a></td></tr>');
linkMap.set("MAC OS PANTHER", '<tr><td><a href="#" onclick="loadPage(\'macOsPanther\')">Mac Os Panther</a></td></tr>');
linkMap.set("MAC OS TIGER", '<tr><td><a href="#" onclick="loadPage(\'macOsTiger\')">Mac Os Tiger</a></td></tr>');
linkMap.set("MAC OS LEOPARD", '<tr><td><a href="#" onclick="loadPage(\'macOsLeopard\')">Mac Os Leopard</a></td></tr>');
linkMap.set("MAC OS SNOW LEOPARD", '<tr><td><a href="#" onclick="loadPage(\'macOsSnowLeopard\')">Mac Os Snow Leopard</a></td></tr>');

const NOT_FOUND_PAGE_ROW = "<tr><td>Nebyl nalezen zadny zaznam pro hledany retezec. </td></tr>";


function search() {
    $('#content').load("../pages/searchResult.html", function() {
        const searchText = document.getElementById("search_input").value.toUpperCase();
        const searchTable = document.getElementById("searchResultTable");
        const osNames = Array.from(linkMap.keys());
        let findAnyResult = false;

        osNames.forEach(osName => {
            if (osName.includes(searchText)) {
                const tableRow = linkMap.get(osName);
                searchTable.innerHTML += tableRow;
                findAnyResult = true;
            }
        });

        if (findAnyResult === false) {
            searchTable.innerHTML = NOT_FOUND_PAGE_ROW;
        }
    });
}