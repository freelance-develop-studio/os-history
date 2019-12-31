const PAGE_MAP = new Map(
    [
        [
            "WINDOWS 3",
            {
                pageUrl: 'pages/windows/windows3.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'WINDOWS 3\')">Windows 3</a></td></tr>'
            }
        ],
        [
            "WINDOWS 95",
            {
                pageUrl: 'pages/windows/windows95.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'WINDOWS 95\')">Windows 95</a></td></tr>'         
            }
        ],
        [
            "WINDOWS 98",
            {
                pageUrl: 'pages/windows/windows98.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'"WINDOWS 98\')">Windows 98</a></td></tr>'
            }
        ],
        [
            "WINDOWS 2000",
            {
                pageUrl: 'pages/windows/windows2000.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'WINDOWS 2000\')">Windows 2000</a></td></tr>'
            }
        ],
        [
            "WINDOWS XP",
            {
                pageUrl: 'pages/windows/windowsXP.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'WINDOWS XP\')">Windows XP</a></td></tr>'
            }
        ],
        [
            "WINDOWS VISTA",
            {
                pageUrl: 'pages/windows/windowsVista.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'WINDOWS VISTA\')">Windows Vista</a></td></tr>'
            }
        ],
        [
            "WINDOWS 7",
            {
                pageUrl: 'pages/windows/windows7.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'WINDOWS 7\')">Windows 7</a></td></tr>'
            }
        ],
        [
            "WINDOWS 8",
            {
                pageUrl: 'pages/windows/windows8.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'WINDOWS 8\')">Windows 8</a></td></tr>'
            }
        ],
        [
            "WINDOWS 10",
            {
                pageUrl: 'pages/windows/windows10.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'WINDOWS 10\')">Windows 10</a></td></tr>'
            }
        ],
        [
            "LINUX",
            {
                pageUrl: 'pages/linux/linux.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'LINUX\')">Linux</a></td></tr>'
            }
        ],
        [
            "MAC OS CHEETAH",
            {
                pageUrl: 'pages/MacOs/macOsCheetah.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'MAC OS CHEETAH\')">Mac Os Cheetah</a></td></tr>'
            }
        ],
        [
            "MAC OS PUMA",
            {
                pageUrl: 'pages/MacOs/macOsPuma.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'MAC OS PUMA\')">Mac Os Puma</a></td></tr>'
            }
        ],
        [
            "MAC OS JAGUAR",
            {
                pageUrl: 'pages/MacOs/macOsJaguar.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'MAC OS JAGUAR\')">Mac Os Jaguar</a></td></tr>'
            }
        ],
        [
            "MAC OS PANTHER",
            {
                pageUrl: 'pages/MacOs/macOsPanther.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'MAC OS PANTHER\')">Mac Os Panther</a></td></tr>'
            }
        ],
        [
            "MAC OS TIGER",
            {
                pageUrl: 'pages/MacOs/macOsTiger.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'MAC OS TIGER\')">Mac Os Tiger</a></td></tr>'
            }
        ],
        [
            "MAC OS LEOPARD",
            {
                pageUrl: 'pages/MacOs/macOsLeopard.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'MAC OS LEOPARD\')">Mac Os Leopard</a></td></tr>'
            }
        ],
        [
            "MAC OS SNOW LEOPARD",
            {
                pageUrl: 'pages/MacOs/macOsSnowLeopard.html',
                searchTableRow: '<tr><td><a href="#" onclick="loadPage(\'MAC OS SNOW LEOPARD\')">Mac Os Snow Leopard</a></td></tr>'
            }
        ],
        [
            "SEARCH_RESULT",
            {
                pageUrl: 'pages/searchResult.html'
            }
        ]

    ]
);

const NOT_FOUND_SEARCH_TABLE_ROW = "<tr><td>Nebyl nalezen zadny zaznam pro hledany retezec. </td></tr>";

