import { Backdrop, Button } from "@mui/material";
import { useState } from "react";

const Modal = (props) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={handleToggle}>Open backdrop</Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Button>Confirm</Button>
        <Button onClick={handleToggle}>Cancel</Button>
      </Backdrop>
    </>
  );
};
export default Modal;
