import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const PlaylistsContext = createContext({});

const PlaylistsProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState({});

  const addSong = (playlistId, songId) => {
    const newPlaylistSongs = (playlists[playlistId].songs || []).slice();
    if (!newPlaylistSongs.includes(songId)) newPlaylistSongs.push(songId);

    setPlaylists({
      ...playlists,
      [playlistId]: {
        ...playlists[playlistId],
        songs: newPlaylistSongs,
      },
    });
  };
  const removeSong = (playlistId, songId) => {
    const newPlaylistSongs = (playlists[playlistId].songs || [])
      .slice()
      .filter((id) => id !== songId);

    setPlaylists({
      ...playlists,
      [playlistId]: {
        ...playlists[playlistId],
        songs: newPlaylistSongs,
      },
    });
  };
  const createPlaylist = (name) => {
    const id = uuidv4();
    setPlaylists({ ...playlists, [id]: { id, name, songs: [] } });
  };
  return (
    <PlaylistsContext.Provider
      value={{ playlists, addSong, removeSong, createPlaylist }}
    >
      {children}
    </PlaylistsContext.Provider>
  );
};

export { PlaylistsProvider };
