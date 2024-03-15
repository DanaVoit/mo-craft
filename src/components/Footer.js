import logo from "../assets/img/logo.svg";
import socialMediaLinks from "./data/social.json";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-logo">
          <img src={logo} width={36} alt="Logo" />
          <span className="footer-title">M&O Craft</span>
        </div>
        <ul className="footer-inner-social">
          {socialMediaLinks.map((socialMedia) => (
            <li key={socialMedia.key}>
              <a href={socialMedia.url} target="_blank" rel="noreferrer">
                <img width={25} src={socialMedia.icon} alt={socialMedia.key} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
