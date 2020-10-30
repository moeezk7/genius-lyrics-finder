document.addEventListener('DOMContentLoaded', function() {
    var tabSearchButton = document.getElementById('findSong');  // Search Button
    tabSearchButton.addEventListener('click', function() {
  
      chrome.tabs.getSelected(null, function(song) {
          searchSong = document.getElementById("songName").value; // Gets text value from the search bar
          parsedSong = searchSong.split(" "); 
          i = 0;
          searchURL = "https://genius.com/search?q="; // base url
          while (i < parsedSong.length) {  // Takes search values and adds them to url spaces are represented as %20
              searchURL = searchURL.concat(parsedSong[i]);
              i += 1;
              if (i < parsedSong.length) {
                  searchURL = searchURL.concat("%20");
              }
          }
         window.open(searchURL, "_blank"); // create a new tab with the searchURL
      });
    }, false);
  }, false);