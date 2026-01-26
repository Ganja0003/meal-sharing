import fb from "../assets/facebook_logo.png";
import ig from "../assets/insta.jpeg";
import ln from "../assets/linkedin.png";

function Footer() {
  return (
    <footer id="footer">
      <div className="map">
        <h1>location</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63795.86586817356!2d45.2654651843551!3d2.0592860453915027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58425955ce6b53%3A0xbb20eaaa52cc59d9!2sMogadishu%2C%20Somalia!5e0!3m2!1sda!2sdk!4v1746030301859!5m2!1sda!2sdk"
          width="300"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="footer-info">
        <h1>Contact Us</h1>
        <ul className="smLogos">
          <li>+45 93 99 52 66</li>
          <li>yuusuf98@outook.com</li>
        </ul>
      </div>

      <div className="footer-info">
        <h1>Socials</h1>
        <ul className="smLogos">
          <li>
            <a href="https://www.facebook.com/">
              <img src={fb.src} alt="Facebook" width={30} height={30} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src={ig.src} alt="Instagram" width={30} height={30} />
            </a>
          </li>
          <li>
            <a href="https://linkedIn.com">
              <img src={ln.src} alt="linkedIn" width={30} height={30} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
