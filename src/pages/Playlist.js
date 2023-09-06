import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { PlaylistsContext } from "../context/Playlists";
import { Playlist } from "../components/Playlist";
import { Typography } from "@mui/material";
import SONGS from "../songs.json";
const PlaylistPage = () => {
  const { id } = useParams();
  const { playlists, removeSong } = useContext(PlaylistsContext);
  const selectedPlaylist = playlists[id];
  if (!playlists[id])
    return <Typography color={"primary"}>no page found</Typography>;
  return (
    <Playlist
      name={selectedPlaylist.name}
      songs={selectedPlaylist.songs.map((songId) => SONGS[songId])}
      onRemovePress={(songId) => removeSong(id, songId)}
    />
  );
};

export default PlaylistPage;
