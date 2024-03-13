import logo from "../assets/img/logo.svg";
import instagramIcon from "../assets/img/social/Instagram.svg";
import tiktokIcon from "../assets/img/social/Tik Tok.svg";
import facebookIcon from "../assets/img/social/Facebook.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-logo">
          <img src={logo} width={36} alt="Logo" />
          <span className="footer-title">MO&Craft</span>
        </div>
        <ul className="footer-inner-social">
          <li>
            <a
              href="https://www.instagram.com/m_o_craft?igshid=NGVhN2U2NjQ0Yg%3D%3D"
              target="_blank" rel="noreferrer"
            >
              <img width={25} src={instagramIcon} alt={instagramIcon} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/mandocrafts" rel="noreferrer" target="_blank">
              <img width={25} src={facebookIcon} alt={facebookIcon} />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@m_o_craft" rel="noreferrer" target="_blank">
              <img width={25} src={tiktokIcon} alt={tiktokIcon} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
