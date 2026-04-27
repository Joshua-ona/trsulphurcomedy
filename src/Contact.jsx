import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaTiktok,
    FaTwitter,
    FaWhatsapp,
    FaPhone
} from "react-icons/fa";

export default function Contact() {
    return (
        <div className="contact-page">

            {/* HERO SECTION */}
            <div className="contact-hero">
                <h1>Get In Touch</h1>
                <p>Bookings, collaborations & inquiries 🎤</p>
            </div>

            {/* CONTACT GRID */}
            <div className="contact-grid">

                {/* CONTACT INFO */}
                <div className="contact-card glass-card">
                    <h2>Contact Info</h2>

                    <a href="mailto:kayemba2012@gmail.com">
                        <FaEnvelope /> kayemba2012@gmail.com
                    </a>

                    <a
                        href="https://wa.me/256706423099"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp /> +256 706 423099
                    </a>

                    <a href="tel:+256706423099">
                        <FaPhone /> +256 706 423099
                    </a>
                </div>

                {/* SOCIALS */}
                <div className="contact-card glass-card">
                    <h2>Social Media</h2>

                    <a href="https://facebook.com/TRSulphur" target="_blank">
                        <FaFacebook /> Facebook
                    </a>

                    <a href="https://instagram.com/tr.sulphurcomedy" target="_blank">
                        <FaInstagram /> Instagram
                    </a>

                    <a href="https://tiktok.com/@tr_sulphur_comedy" target="_blank">
                        <FaTiktok /> TikTok
                    </a>

                    <a href="https://twitter.com/tr_sulphur_comedy" target="_blank">
                        <FaTwitter /> Twitter
                    </a>
                </div>

            </div>
        </div>
    );
}