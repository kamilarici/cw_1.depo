import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globalStyles";
import TextField from "@mui/material/TextField";
import useStockCall from "../hooks/useStockCall";

export default function FirmModal({ open, handleClose }) {
  const { postStockData } = useStockCall();
  const [info, setInfo] = React.useState({
    name: "",
    phone: "",
    addres: "",
    image: "",
  });
  const handleChange = (e) => {
    //             const {name,value}=e.target
    // setInfo({...info,[name]:value})
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postStockData("firms", info);
    setInfo({ name: "", phone: "", addres: "", image: "" });
    handleClose();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component={"form"}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info?.name}
              required
              onChange={handleChange}
            />
            <TextField
              label="phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info?.phone}
              required
              onChange={handleChange}
            />
            <TextField
              label="address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info?.address}
              required
              onChange={handleChange}
            />
            <TextField
              label="image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info?.image}
              required
              onChange={handleChange}
            />

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
