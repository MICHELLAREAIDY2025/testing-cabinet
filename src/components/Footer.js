// src/components/Footer.jsx
import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <div className="icon-circle">
          <FaPhone size={20} />
        </div>
        <div className="icon-circle">
          <FaEnvelope size={20} />
        </div>
        <div className="icon-circle">
          <FaInstagram size={20} />
        </div>
      </div>
      <p className="footer-text">© 2025 - Cabinet D’artiste</p>
    </footer>
  );
}