function loadPage(pageName) {
    switch (pageName) {
        case "windows3":
            $('#content').load("../pages/windows/windows3.html");
            break;
        case "windows95":
            $('#content').load("../pages/windows/windows95.html");
            break;
        case "windows98":
            $('#content').load("../pages/windows/windows98.html");
            break;
        case "windows2000":
            $('#content').load("../pages/windows/windows2000.html");
            break;
        case "windowsXP":
            $('#content').load("../pages/windows/windowsXP.html");
            break;
        case "windowsVista":
            $('#content').load("../pages/windows/windowsVista.html");
            break;
        case "windows7":
            $('#content').load("../pages/windows/windows7.html");
            break;
        case "windows8":
            $('#content').load("../pages/windows/windows8.html");
            break;
        case "windows10":
            $('#content').load("../pages/windows/windows10.html");
            break;
        case "linux":
            $('#content').load("../pages/linux/linux.html");
            break;
        case "macOsCheetah":
            $('#content').load("../pages/MacOs/macOsCheetah.html");
            break;
        case "macOsPuma":
            $('#content').load("../pages/MacOs/macOsPuma.html");
            break;
        case "macOsJaguar":
            $('#content').load("../pages/MacOs/macOsJaguar.html");
            break;
        case "macOsPanther":
            $('#content').load("../pages/MacOs/macOsPanther.html");
            break;
        case "macOsTiger":
            $('#content').load("../pages/MacOs/macOsTiger.html");
            break;
        case "macOsLeopard":
            $('#content').load("../pages/MacOs/macOsLeopard.html");
            break;
        case "macOsSnowLeopard":
            $('#content').load("../pages/MacOs/macOsSnowLeopard.html");
            break;
        default:
            $('#content').load("../pages/windows/windows2000.html");
            break;
    }
}

// default page after startup server
loadPage("windows2000");