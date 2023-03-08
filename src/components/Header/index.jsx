import "./styles.css";
import DehazeIcon from '@mui/icons-material/Dehaze';
import Modal from "../Modal-Navbar";
import { useState } from "react";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <header>
      <Modal  
      open={openModal}
      handleClose={() => setOpenModal(false)}/>

      <div className="container-header">
        <span>THIS INTERIOR</span>
        <div 
        className="container-header-dehaze"
        onClick={() => setOpenModal(true)}>
          <DehazeIcon 
          sx={{height: 28, width:28.5, fontSize:28}}
          />
        </div>
        <li>
          <ul id="text-home">Home</ul>
          <ul>Collection</ul>
          <ul>About</ul>
          <ul>Contact</ul>
        </li>
      </div>
    </header>
  );
}
