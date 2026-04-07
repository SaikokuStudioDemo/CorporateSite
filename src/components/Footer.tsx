import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/" onClick={() => window.scrollTo(0,0)}>
              <img src="/assets/LOGO-SAIKOKUSTUDIONoSpace.png" alt="SAIKOKU STUDIO" />
            </Link>
          </div>
          <div className="footer-links">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>ABOUT</a>
            <a href="#business" onClick={(e) => handleNavClick(e, 'business')}>BUSINESS</a>
            <a href="#mvv" onClick={(e) => handleNavClick(e, 'mvv')}>PHILOSOPHY</a>
            <a href="#company" onClick={(e) => handleNavClick(e, 'company')}>COMPANY</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">&copy; {year} SAIKOKU STUDIO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
