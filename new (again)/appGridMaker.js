const appGrid = document.getElementsByClassName("app-grid");

const appList = [
  { name: "Adobe Creative Cloud", link: "https://www.adobe.com" },
  { name: "Everything", link: "https://www.voidtools.com/downloads/" },
  { name: "Discord", link: "https://www.discord.com" },
  { name: "Fences", link: "https://www.stardock.com/products/fences/download" },
  { name: "Visual Studio Code", link: "https://code.visualstudio.com/" },
  { name: "VLC", link: "https://www.videolan.org/vlc/index.html" },
  { name: "OBS", link: "https://obsproject.com/" },
  { name: "GitHub Desktop App", link: "https://desktop.github.com/" },
  { name: "Spotify", link: "https://www.spotify.com/us/download/other/" },
  {
    name: "GoXLR",
    link:
      "https://www.tc-helicon.com/Categories/Tchelicon/Signal-Processors/Effects/GO-XLR-MINI/p/P0DI7/Downloads#googtrans(en|en)",
  },
  { name: "Minecraft", link: "https://www.minecraft.net/en-us/get-minecraft/" },
];

// Sorts alphabetically by the name property
appList.sort(function (x, y) {
  let a = x.name.toUpperCase(), // Allows for case-insensitive comparison
    b = y.name.toUpperCase();
  return a == b ? 0 : a > b ? 1 : -1;
});

for (var n = 0; n < appList.length; n++) {
  /* ----- Creates the needed elements ----- */
  const appLink = document.createElement("a");
  const appDiv = document.createElement("div");
  const appIcon = document.createElement("img");
  const appName = document.createElement("h3");

  /* ----- Link ----- */
  appLink.className = "app-link";
  appLink.target = "_blank";
  appLink.href = appList[n].link;

  /* ----- Image ----- */
  appDiv.className = "app-grid-item";
  appIcon.className = "app-icon";
  var appFileName = appList[n].name;
  appFileName = appFileName.toLowerCase();
  var i = appFileName.indexOf(" "); // Get the index of the first space
  while (i != -1) {
    // While there are still spaces
    var before = appFileName.slice(i, i + 2); // Get the space and its following character (e.g. "I am" --> " a")
    appFileName = appFileName.replace(before, before[1].toUpperCase()); // Capitalize the character and remove the space (e.g. " a" --> "A")
    i = appFileName.indexOf(" "); // Get the index of the next space (will return -1 and break the loop if no more spaces are found)
  }
  appFileName = appFileName + ".png";
  appIcon.src = "imgs/apps/" + appFileName;
  appIcon.alt = appFileName;

  /* ----- Text Content ----- */
  if (appList[n].name.length <= 10) {
    appName.className = "app-name-short";
  } else {
    appName.className = "app-name";
  }
  appName.textContent = appList[n].name;

  /* ----- Creation ----- */
  appDiv.appendChild(appIcon);
  appDiv.appendChild(appName);
  appLink.appendChild(appDiv);
  appGrid[0].appendChild(appLink);
}
