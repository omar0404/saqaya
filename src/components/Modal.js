import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#282828",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  outline: 0,
};

const ModalWrapper = ({ open, onClose, children }) => (
  <Modal onClose={onClose} open={open}>
    <Box sx={style}>{children}</Box>
  </Modal>
);
export { ModalWrapper };
