
const playlistCollection = [
    {
      id: "01",
      title: "Beethoven Sonatas",
      songs: [
        {
          id: "04",
          title: "Piano Sonata No. 3",
          artist: "Beethoven",
        },
        {
          id: "05",
          title: "Piano Sonata No. 7",
          artist: "Beethoven",
        },
        {
          id: "06",
          title: "Piano Sonata No. 10",
          artist: "Beethoven",
        }
      ]
    },
    {
      id: "02",
      title: "Beethoven Concertos",
      songs: [
        {
          id: "07",
          title: "Piano Concerto No. 0",
          artist: "Beethoven",
        },
        {
          id: "08",
          title: "Piano Concerto No. 4",
          artist: "Beethoven",
        },
        {
          id: "09",
          title: "Piano Concerto No. 6",
          artist: "Beethoven",
        }
      ]
    },
    {
      id: "03",
      title: "Beethoven Variations",
      songs: [
        {
          id: "10",
          title: "Opus 34: Six variations on a theme in F major",
          artist: "Beethoven",
        },
        {
          id: "11",
          title: "Opus 120: Thirty-three variations on a waltz by Diabelli in C majo",
          artist: "Beethoven",
        }
      ]
    }
  ];
  
  // Loop through each playlist in the `playlistCollection` array and print the title
  for (let i = 0; i < playlistCollection.length; i++) {
    console.log(playlistCollection[i].title);
  }
  
  // Loop through each playlist in the `playlistCollection` array
  // Print the title of each playlist and the details of each song in that playlist
  for (let i = 0; i < playlistCollection.length; i++) {
    console.log(playlistCollection[i].title);
    for (let j = 0; j < playlistCollection[i].songs.length; j++) {
      console.log(playlistCollection[i].songs[j]);
    }
  }
  
  // Loop through each playlist in the `playlistCollection` array
  // Print the title of each playlist, the title of each song, and the artist of each song
  for (let i = 0; i < playlistCollection.length; i++) {
    console.log(playlistCollection[i].title);
    for (let j = 0; j < playlistCollection[i].songs.length; j++) {
      console.log(playlistCollection[i].songs[j].title);
      console.log(playlistCollection[i].songs[j].artist);
    }
  }
  