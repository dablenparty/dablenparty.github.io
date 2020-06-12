const appGrid = document.getElementsByClassName("app-grid");
//var appList = ['discord','steam','fences','everything','voidtools','obs studio','github desktop','spotify','vlc','goxlr','adobe creative cloud','minecraft'];

const appList = [
    {name: 'Adobe Creative Cloud', link: 'https://www.adobe.com'},
    {name: 'Everything', link: 'https://www.voidtools.com/downloads/'},
    {name: 'Discord', link: 'https://www.discord.com'},
    {name: 'Fences', link: 'https://www.stardock.com/products/fences/download'},
    {name: 'Visual Studio Code', link: 'https://code.visualstudio.com/'},
    {name: 'VLC', link: 'https://www.videolan.org/vlc/index.html'},
    {name: 'OBS', link: 'https://obsproject.com/'},
    {name: 'GitHub Desktop', link: 'https://desktop.github.com/'},
    {name: 'Spotify', link: 'https://www.spotify.com/us/download/other/'},
    {name: 'GoXLR', link: 'https://www.tc-helicon.com/Categories/Tchelicon/Signal-Processors/Effects/GO-XLR-MINI/p/P0DI7/Downloads#googtrans(en|en)'},
    {name: 'Minecraft', link: 'https://www.minecraft.net/en-us/get-minecraft/'}
]
appList.sort(function(x,y) {
    let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
});

for (var n = 0; n < appList.length; n++) {
    const appLink = document.createElement("a");
    const appDiv = document.createElement("div");
    appLink.className = "app-link";
    appLink.target = "_blank";
    appLink.href = appList[n].link;
    // max length for short name is 8 characters
    appDiv.className = "app-grid-item";
    const appIcon = document.createElement("img");
    appIcon.className = "app-icon";
    var appFileName = appList[n].name;
    appFileName = appFileName.toLowerCase();
    var i = appFileName.indexOf(" ");
    while (i != -1) {
        console.log(i);
        var before = appFileName.slice(i,i+2)
        appFileName = appFileName.replace(before, before[1].toUpperCase());
        i = appFileName.indexOf(" ");
    }
    appFileName = appFileName + ".png";
    appIcon.src = "imgs/apps/" + appFileName;

    const appName = document.createElement("h3");
    if (appList[n].name.length <= 10) {
        appName.className = "app-name-short";
    }
    else {
        appName.className = "app-name";
    }
    appName.textContent = appList[n].name;
    appDiv.appendChild(appIcon);
    appDiv.appendChild(appName);
    appLink.appendChild(appDiv);
    appGrid[0].appendChild(appLink);
}