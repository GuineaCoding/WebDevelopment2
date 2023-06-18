const songList3 = [
  {
    title: 'Piano Sonata No. 3',
    artist: 'Beethoven',
    duration: '4',
  },
  {
    title: 'Piano Sonata No. 7',
    artist: 'Beethoven',
    duration: '4',
  },
  {
    title: 'Piano Sonata No. 10',
    artist: 'Beethoven',
    duration: '4',
  },
];

// Initialize a variable `time` to keep track of the total duration
let time = 0;

// Iterate through the `songList3` array using a for loop
for (let j = 0; j < songList3.length; j++) {
  // Output the details of each song: title, artist, and duration
  console.log('Song ' + j + ': Title: ' + songList3[j].title + ': Artist: ' + songList3[j].artist + ': Duration ' + songList3[j].duration);

  // Parse the duration from a string to an integer using `parseInt()`
  const songDuration = parseInt(songList3[j].duration);

  // Add the duration of the current song to the total `time`
  time += songDuration;
}

// Output the total number of songs and the total duration
console.log('Total Amount Of Songs: ' + songList3.length + ' Total Duration: ' + time);
