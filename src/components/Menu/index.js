import "./menu.css"
import { BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <a href="https://youtube.com/c/sujeitoprogramador" className="social">
        <BsYoutube color="#FFF" size={24} className="menu-link" />
      </a>
      <a href="https://instagram.com/sujeitoprogramador" className="social">
        <BsInstagram color="#FFF" size={24} />
      </a>
      <Link to="/links" className="menu-item">
        Meus Links
      </Link>
    </div>
  )
}