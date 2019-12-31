function loadPage(osName) {
    if (PAGE_MAP.has(osName)) {
        $('#content').load(PAGE_MAP.get(osName).pageUrl, function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "error")
                console.log("Error: " + xhr.status + ": " + xhr.statusText);
        });
    } else {
        console.log("Error: Not found 'osName' :" + osName + " in PAGE_MAP.");
    }
}

// default page after startup server
loadPage("WINDOWS 2000");
