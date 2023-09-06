import React, { useContext, useState } from "react";

import { Button, MenuItem, TextField, Typography } from "@mui/material";
import { ModalWrapper } from "../components/Modal";
import { PlaylistsContext } from "../context/Playlists";
import { Playlist } from "../components/Playlist";
import SONGS from "../songs.json";
const PlaylistPage = () => {
  const [selectedSong, setSelectedSong] = useState();
  const [selectedPlaylistId, setSelectedPlaylistId] = useState();
  const { playlists, addSong } = useContext(PlaylistsContext);
  return (
    <div>
      <Playlist
        name={"Home"}
        songs={Object.values(SONGS)}
        onAddPress={setSelectedSong}
      />
      {selectedSong && (
        <ModalWrapper open={selectedSong} onClose={() => setSelectedSong()}>
          {!Object.keys(playlists || {}).length ? (
            <Typography textAlign={"center"} color={"white"}>
              No playlists are created
            </Typography>
          ) : (
            <div className="playlistOptions">
              <TextField
                select
                label="Select"
                helperText="Please select your playlist"
              >
                {Object.values(playlists).map(({ name, id }) => (
                  <MenuItem
                    onClick={() => {
                      setSelectedPlaylistId(id);
                    }}
                    color="info"
                    key={id}
                    value={name}
                  >
                    {name}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                disabled={!selectedPlaylistId}
                color="primary"
                sx={{ marginTop: 2 }}
                variant="contained"
                onClick={() => {
                  addSong(selectedPlaylistId, selectedSong);
                  setSelectedSong();
                }}
              >
                Save
              </Button>
            </div>
          )}
        </ModalWrapper>
      )}
    </div>
  );
};

export default PlaylistPage;
