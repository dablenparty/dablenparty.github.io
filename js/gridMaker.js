// A generalized script for creating grids of the same style. Currently handles the GitHub and Apps pages

const gridData = [
  {
    type: "app",
    name: "Adobe Creative Cloud",
    link: "https://www.adobe.com",
  },
  {
    type: "app",
    name: "Everything",
    link: "https://www.voidtools.com/downloads/",
  },
  { type: "app", 
    name: "Discord", 
    link: "https://www.discord.com" },
  {
    type: "app",
    name: "Fences",
    link: "https://www.stardock.com/products/fences/download",
  },
  {
    type: "app",
    name: "Visual Studio Code",
    link: "https://code.visualstudio.com/",
  },
  {
    type: "app",
    name: "VLC",
    link: "https://www.videolan.org/vlc/index.html",
  },
  { type: "app", 
    name: "OBS", 
    link: "https://obsproject.com/" },
  {
    type: "app",
    name: "GitHub Desktop",
    link: "https://desktop.github.com/",
  },
  {
    type: "app",
    name: "Spotify",
    link: "https://www.spotify.com/us/download/other/",
  },
  {
    type: "app",
    name: "GoXLR",
    link:
      "https://www.tc-helicon.com/Categories/Tchelicon/Signal-Processors/Effects/GO-XLR-MINI/p/P0DI7/Downloads#googtrans(en|en)",
  },
  {
    type: "app",
    name: "Minecraft",
    link: "https://www.minecraft.net/en-us/get-minecraft/",
  },
  {
    type: "app",
    name: "Steam",
    link: "https://store.steampowered.com/about/",
  },
  {
    type: "app",
    name: "Sublime Text 3",
    link: "https://www.sublimetext.com/"
  },
  {
    type: "app",
    name: "WinDirStat",
    link: "https://windirstat.net/"
  },
  {
    type: "app",
    name: "Rainmeter",
    link: "https://www.rainmeter.net/"
  },
  {
    type: "repo",
    name: "AHK",
    link: "https://github.com/dablenparty/autohotkey",
  },
  {
    type: "repo",
    name: "C++",
    link: "https://github.com/dablenparty/cpp",
  },
  {
    type: "repo",
    name: "HTML",
    link: "https://github.com/dablenparty/dablenparty.github.io",
  },
  {
    type: "repo",
    name: "Java",
    link: "https://github.com/dablenparty/java",
  },
  {
    type: "repo",
    name: "JavaScript",
    link: "https://github.com/dablenparty/javascript",
  },
  {
    type: "repo",
    name: "Python",
    link: "https://github.com/dablenparty/python",
  },
];

// Sorts the list alphabetically by the "name" property
gridData.sort(function (x, y) {
  let a = x.name.toUpperCase(), // Allows for case-insensitive comparison
    b = y.name.toUpperCase();
  return a == b ? 0 : a > b ? 1 : -1;
});

for (var n = 0; n < gridData.length; n++) {
  /* ------ Creates the needed elements ------ */
  var grid;
  const gridLink = document.createElement("a");
  const gridDiv = document.createElement("div");
  const gridIcon = document.createElement("img");
  const gridName = document.createElement("h3");

  /* ----------- Link ----------- */
  gridLink.className = "app-link";
  gridLink.target = "_blank";
  gridLink.href = gridData[n].link;

  /* ------------- Image ------------- */
  gridDiv.className = "app-grid-item";
  gridIcon.className = "app-icon";
  var imgFileName = gridData[n].name.toLowerCase();
  if (gridData[n].type == "app") {
    var i = imgFileName.indexOf(" "); // Get index of first space
    while (i != -1) {
      // While there are still spaces
      var before = imgFileName.slice(i, i + 2); // Gets the space and its following character
      imgFileName = imgFileName.replace(before, before[1].toUpperCase()); // Capitalize the character and remove the space
      i = imgFileName.indexOf(" "); // Find next space (returns -1 if no space is found, breaking the while loop)
    }
    gridIcon.src = "imgs/apps/" + imgFileName + ".png";
    grid = document.getElementsByClassName("app-grid");
  } else if (gridData[n].type == "repo") {
    if (imgFileName == "c++") {
      imgFileName = "cpp";
    }
    gridIcon.src = "imgs/repos/" + imgFileName + ".png";
    grid = document.getElementsByClassName("repo-grid");
  }

  /* ------------ Text Content ------------ */
  if (gridData[n].name.length <= 10) {
    gridName.className = "app-name-short";
  } 
  else if (gridData[n].name.length <= 16 && gridData[n].name.length > 10) {
    gridName.className = "app-name-medium";
  }
  else {
    gridName.className = "app-name";
  }
  gridName.textContent = gridData[n].name;

  /* -------- Creation -------- */
  gridDiv.appendChild(gridIcon);
  gridDiv.appendChild(gridName);
  gridLink.appendChild(gridDiv);
  grid[0].appendChild(gridLink);
}
