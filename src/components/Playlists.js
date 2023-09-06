import React, { useContext, useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ReactComponent as PlusIcon } from "../svgs/plus.svg";
import { ReactComponent as LibraryIcon } from "../svgs/library.svg";
import { ReactComponent as NoteIcon } from "../svgs/note.svg";
import { PlaylistsContext } from "../context/Playlists";
import { ModalWrapper } from "./Modal";
import { Link } from "react-router-dom";

const Playlists = () => {
  const [showCreatePlaylist, setShowCreatePlaylist] = useState(false);
  const [playlistName, setPlaylistName] = useState();
  const { createPlaylist, playlists } = useContext(PlaylistsContext);
  return (
    <div>
      <div className="playlistsWrapper">
        <div>
          <LibraryIcon />
          <span
            className="playlists"
            onClick={() => setShowCreatePlaylist(true)}
          >
            Your Playlists
          </span>
        </div>
        <PlusIcon
          cursor={"pointer"}
          onClick={() => setShowCreatePlaylist(true)}
        />
      </div>

      {Object.values(playlists || {}).map(({ name, id }) => (
        <Link to={`/playlist/${id}`} key={id}>
          <span className="playlist">
            <NoteIcon />
            {name}
          </span>
        </Link>
      ))}
      {showCreatePlaylist && (
        <ModalWrapper
          onClose={() => setShowCreatePlaylist(false)}
          open={showCreatePlaylist}
        >
          <TextField
            color="info"
            label="Playlist name"
            variant="standard"
            fullWidth
            className="textField"
            onChange={(e) => setPlaylistName(e.target.value)}
          />
          <Button
            disabled={!playlistName}
            color="primary"
            sx={{ marginTop: 2 }}
            variant="contained"
            onClick={() => {
              createPlaylist(playlistName);
              setShowCreatePlaylist(false);
            }}
          >
            Create
          </Button>
        </ModalWrapper>
      )}
    </div>
  );
};

export { Playlists };
