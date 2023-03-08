import "./styles.css";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Card() {
  return (
    <>
    <main className="main">
        <div className="card1">
          <h2>Modern interior</h2>
          <p>
            A full-Service residential &<br></br>
            commercial interior design and <br></br>staging company offering
            <br></br>professional organizing &<br></br> eco-services.
          </p>
          <div className="card1-subcard">
            <span>Read more</span>
            <ArrowRightAltIcon sx={{ fontSize: 24 }} />
          </div>
        </div>

        <div className="card2">
          <div className="card2-img">
            <img src={photo1} alt="photo1" />
          </div>
          <div className="card2-subcard">
            <div className="subcard-perfil">
              <img src={photo2} alt="photo2" />
              <div className="subcard-namejob">
                <span id="name">Aliza Webber</span>
                <span id="job">Interior designer</span>
              </div>
              </div>
              <span id="perfiltext">
                Designed in 2020 by <br></br>Aliza Webber
              </span>           
          </div>
        </div>
      </main>
    </>
  );
}
