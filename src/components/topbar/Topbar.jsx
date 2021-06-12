import "./topbar.scss";
import { Person, Mail, Twitter } from "@material-ui/icons";


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Tight Games
          </a>
          <div className="itemContainer">
              <a>
              <Person className="icon" />
              <span>+60 11-5502 2699</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="mailto:teoyanxue@example.com" target="_blank">
              <Mail className="icon" />
              <span>teoyanxue@gmail.com</span>
            </a>
          </div>
          <div className="itemContainer">
            <a  href="https://twitter.com/StuffTight" target="_blank">
              <Twitter className="icon" />
              <span> @StuffTight</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
