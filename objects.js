var playlist = {
  Slowdive: 'Alison'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

// playlist['Slowdive'] = 'Alison'
// playlist['My Bloody Valentine'] = 'Sometimes'

// function updatePlaylist(){
//  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
//  return playlist
// }

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
