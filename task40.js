let makeAlbum = (artistName, albumTitle, song, numberOfTrack) => {
  return { artistName, albumTitle, song, numberOfTrack };
};
let famousAlbum = makeAlbum("Arjit Singh", "No idea", "Humdard", "10");
let famousAlbum1 = makeAlbum("Atif Aslam", "No idea", "Aadat", "9");
let famousAlbum2 = makeAlbum("Alan Walker", "No idea", "Faded", "19");

console.log(famousAlbum);
console.log(famousAlbum1);
console.log(famousAlbum2);
