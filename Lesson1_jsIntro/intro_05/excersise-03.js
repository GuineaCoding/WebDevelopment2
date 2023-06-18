// Prompt the user to enter their favorite song
const favoriteSong = prompt('Enter your favorite Song');

// Prompt the user to enter the artist who created the favorite song
const favoriteSongArtistName = prompt('Enter the artist of your favorite song');

// Create an object named songOutput with properties songName and songArtist,
// and assign the corresponding values from the prompts
const songOutput = {
  songName: favoriteSong,
  songArtist: favoriteSongArtistName,
  print: function() {
    // Output a message to the console stating the user's favorite song and its artist
    console.log('Your Favorite Song is ' + favoriteSong + ' and is created by ' + favoriteSongArtistName);
  }
}

//log the favorite song details to the console
songOutput.print();
