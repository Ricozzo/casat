import { useEffect, useState } from "react";
import instaLogo from "../../assets/insta.png";
import faceLogo from "../../assets/facebook.png";

const Footer = () => {
  /* const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrollAtBottom =
        window.scrollY + window.innerHeight >= document.body.offsetHeight;
      setShowFooter(isScrollAtBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showFooter) {
    return null;
  }
 */
  return (
    <footer className="footer">
      <div className="logosFooter">
        <a href="https://www.instagram.com/ricozzzo/" target="_blank">
          <img
            className="logoOne"
            src={instaLogo}
            alt="instaLogo"
            style={{ width: 25 }}
          />
        </a>
        <a
          href="https://www.facebook.com/henrique.ortizpereira"
          target="_blank"
        >
          <img
            className="logoTwo"
            src={faceLogo}
            alt="facebook"
            style={{ width: 35 }}
          />
        </a>
      </div>
      <div className="contactsfooter">
        <h5>project@ironhack.com</h5>
        <h5>+351 934 002 556</h5>
      </div>
    </footer>
  );
};

export default Footer;
