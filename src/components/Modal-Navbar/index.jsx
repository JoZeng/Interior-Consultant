import "./styles.css";
import CloseIcon from '@mui/icons-material/Close';

export default function Modal({open, handleClose}) {
  return (
    <>
    {open && (
      <div className="backdrop-modal">
        <div className="container-modal-close" onClick={() => handleClose()}>
          <CloseIcon sx={{fontSize: 44, color: "white"}} />
        </div>
        <li>
          <ul id="container-modal-home"
          onClick={() => handleClose()}>Home</ul>
          <ul>Collection</ul>
          <ul>About</ul>
          <ul>Contact</ul>
        </li>
      </div>
    )}
    </>
  );
}
