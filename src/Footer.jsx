
import { FaEnvelope, FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <p>© TR Sulphur Comedy</p>

      <div className="icons">

        <a
            href="https://www.facebook.com/TR Sulphur"
            target="_blank"
            rel="noopener noreferrer"
          > 
          <FaFacebook/>
        </a>
          <a href="https://tiktok.com/tr_sulphur_comedy"> <FaTiktok /></a>
        <a href="https://instagram.com/tr.sulphurcomedy"> <FaInstagram /></a>
        <a href="https://twitter.com/tr_sulphur_comedy"> <FaTwitter /></a>
        <a href="https://wa.me/256 706 423099" target="_blank" rel="noopener noreferrer">
             <FaWhatsapp />
</a>
        <a href="mailto:kayemba2012@gmail.com">
    <FaEnvelope/>
</a>
       
       
      </div>
    </footer>
  );
}