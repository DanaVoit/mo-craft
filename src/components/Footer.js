import logo from "../assets/img/logo.svg";
import instagramIcon from "../assets/img/social/Instagram.svg";
import tiktokIcon from "../assets/img/social/Tik Tok.svg";
import facebookIcon from "../assets/img/social/Facebook.svg";

export default function Footer() {
  const socialMediaLinks = [
    {
      key: "Instagram",
      url: "https://www.instagram.com/m_o_craft?igshid=NGVhN2U2NjQ0Yg%3D%3D",
      icon: instagramIcon,
    },
    {
      key: "Facebook",
      url: "https://www.facebook.com/mandocrafts",
      icon: facebookIcon,
    },
    {
      key: "TikTok",
      url: "https://www.tiktok.com/@m_o_craft",
      icon: tiktokIcon,
    },
  ];

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
